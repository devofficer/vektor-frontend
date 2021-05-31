
import React, { memo, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getEvents } from 'redux/actions/events';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import PageHeader from 'parts/PageHeader';
import LINKS from 'utils/constants/links';
import { isEmpty } from 'utils/helpers/utility';
import { getEnglishDateWithTime } from 'utils/helpers/time'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(6),
  },
  description: {
    marginBottom: theme.spacing(3),
  },
}));

const NAV_LINKS = [LINKS.USER_MANAGEMENT, LINKS.AUDIT_TRAIL_LOGS];

const AuditTrailLogDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { results = [] } = useSelector(state => state.events);
  const users = useSelector(state => state.users.results);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const event = useMemo(() => results.find((item) => item._id === id), [id, results]);

  const getUserName = (_id) => {
    const user = users.find((item) => item._id === _id)
    return user?.email || ''
  }

  const historyHandler = () => {
    history.push(LINKS.AUDIT_TRAIL_LOG_HISTORY.HREF.replace(':id', id));
  };

  const closeHandler = () => {
    history.push(LINKS.AUDIT_TRAIL_LOGS.HREF);
  }

  return (
    <>
      <PageHeader
        title={LINKS.AUDIT_TRAIL_LOG_DETAIL.TITLE}
        links={NAV_LINKS}
        leftElement={
          <ContainedButton onClick={historyHandler}>
            History
          </ContainedButton>
        }
      />
      {isEmpty(event)
        ? (
          <Typography variant='h5' color='textPrimary'>
            Not Found
          </Typography>
        ) : (
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant='h6' color='textPrimary' className={classes.title}>
                    {`Action Time: ${getEnglishDateWithTime(event.updatedAt)}`}
                  </Typography>
                  <Typography variant='body2' color='textPrimary' className={classes.description}>
                    user <br />
                    {getUserName(event?.user)}
                  </Typography>
                  <Typography variant='body2' color='textPrimary' className={classes.description}>
                    Action <br />
                    {event?.actionType}
                  </Typography>
                  <Typography variant='body2' color='textPrimary'>
                    Object <br />
                    {event?.mName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant='h6' color='textPrimary' className={classes.title}>
                    Details
                  </Typography>
                  {!isEmpty(event?.change[0]) &&
                    <Typography variant='body2' color='textPrimary' className={classes.description}>
                      Change Message <br />
                      {`${event?.change[0]?.field}: ${event?.change[0]?.nValue || ''} - ${event?.change[0]?.pValue || ''}`}
                    </Typography>
                  }
                  {!isEmpty(event?.change[0]) &&
                    <Typography variant='body2' color='textPrimary' className={classes.description}>
                      Content Type <br />
                      {event?.change[0]?.field}
                    </Typography>
                  }
                  <Typography variant='body2' color='textPrimary' className={classes.description}>
                    Object Id <br />
                    {event?.mId}
                  </Typography>
                  <Typography variant='body2' color='textPrimary'>
                    Object Repr <br />
                    {event?.mName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Button
                color='default'
                variant='contained'
                onClick={closeHandler}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        )
      }
    </>
  );
};

export default memo(AuditTrailLogDetail);
