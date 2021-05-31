import { lazy } from "react";
import { Sliders } from "react-feather";

const DashboardList = lazy(() =>
  import(
    /* webpackChunkName: 'DashboardList' */ "pages/Dashboard/DashboardList"
  )
);
const DashboardDetail = lazy(() =>
  import(
    /* webpackChunkName: 'DashboardDetail' */ "pages/Dashboard/DashboardDetail"
  )
);
const ProjectList = lazy(() =>
  import(/* webpackChunkName: 'ProjectList' */ "pages/Projects/ProjectList")
);
const AddProject = lazy(() =>
  import(/* webpackChunkName: 'AddProject' */ "pages/Projects/AddProject")
);
const EditProject = lazy(() =>
  import(/* webpackChunkName: 'EditProject' */ "pages/Projects/EditProject")
);
const SystemTrendChart = lazy(() =>
  import(
    /* webpackChunkName: 'SystemTrendChart' */ "pages/Projects/SystemTrendChart"
  )
);
const ProjectHistory = lazy(() =>
  import(
    /* webpackChunkName: 'ProjectHistory' */ "pages/Projects/ProjectHistory"
  )
);
const ProjectPhases = lazy(() =>
  import(/* webpackChunkName: 'ProjectPhases' */ "pages/Projects/ProjectPhases")
);
const SystemList = lazy(() =>
  import(/* webpackChunkName: 'SystemList' */ "pages/Systems/SystemList")
);
const AddSystem = lazy(() =>
  import(/* webpackChunkName: 'AddSystem' */ "pages/Systems/AddSystem")
);
const EditSystem = lazy(() =>
  import(/* webpackChunkName: 'EditSystem' */ "pages/Systems/EditSystem")
);
const SystemHistory = lazy(() =>
  import(/* webpackChunkName: 'SystemHistory' */ "pages/Systems/SystemHistory")
);
const DeliverableTrendChart = lazy(() =>
  import(
    /* webpackChunkName: 'DeliverableTrendChart' */ "pages/Systems/DeliverableTrendChart"
  )
);
const ReportList = lazy(() =>
  import(/* webpackChunkName: 'ReportList' */ "pages/Reports")
);
import LINKS from "utils/constants/links";

const projectManagementRoutes = Object.freeze({
  id: LINKS.PROJECT_MANAGEMENT.TITLE,
  path: LINKS.PROJECT_MANAGEMENT.HREF,
  icon: <Sliders />,
  containsHome: true,
  children: [
    {
      path: LINKS.DASHBOARD.HREF,
      name: LINKS.DASHBOARD.TITLE,
      component: DashboardList,
    },
    {
      path: LINKS.DASHBOARD_DETAIL.HREF,
      name: LINKS.DASHBOARD_DETAIL.TITLE,
      component: DashboardDetail,
      isNotSlide: true,
    },
    {
      path: LINKS.PROJECTS.HREF,
      name: LINKS.PROJECTS.TITLE,
      component: ProjectList,
    },
    {
      path: LINKS.ADD_PROJECT.HREF,
      name: LINKS.ADD_PROJECT.TITLE,
      component: AddProject,
      isNotSlide: true,
    },
    {
      path: LINKS.EDIT_PROJECT.HREF,
      name: LINKS.EDIT_PROJECT.TITLE,
      component: EditProject,
      isNotSlide: true,
    },
    {
      path: LINKS.SYSTEM_TREND_CHART.HREF,
      name: LINKS.SYSTEM_TREND_CHART.TITLE,
      component: SystemTrendChart,
      isNotSlide: true,
    },
    {
      path: LINKS.PROJECT_HISTORY.HREF,
      name: LINKS.PROJECT_HISTORY.TITLE,
      component: ProjectHistory,
      isNotSlide: true,
    },
    {
      path: LINKS.PROJECT_PHASES.HREF,
      name: LINKS.PROJECT_PHASES.TITLE,
      component: ProjectPhases,
      isNotSlide: true,
    },
    {
      path: LINKS.SYSTEMS.HREF,
      name: LINKS.SYSTEMS.TITLE,
      component: SystemList,
    },
    {
      path: LINKS.ADD_SYSTEM.HREF,
      name: LINKS.ADD_SYSTEM.TITLE,
      component: AddSystem,
      isNotSlide: true,
    },
    {
      path: LINKS.EDIT_SYSTEM.HREF,
      name: LINKS.EDIT_SYSTEM.TITLE,
      component: EditSystem,
      isNotSlide: true,
    },
    {
      path: LINKS.SYSTEM_HISTORY.HREF,
      name: LINKS.SYSTEM_HISTORY.TITLE,
      component: SystemHistory,
      isNotSlide: true,
    },
    {
      path: LINKS.DELIVERABLE_TREND_CHART.HREF,
      name: LINKS.DELIVERABLE_TREND_CHART.TITLE,
      component: DeliverableTrendChart,
      isNotSlide: true,
    },
    {
      path: LINKS.REPORTS.HREF,
      name: LINKS.REPORTS.TITLE,
      component: ReportList,
    },
  ],
  component: null,
});

export default projectManagementRoutes;
