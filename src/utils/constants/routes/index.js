import authRoutes from './authRoutes';
import overviewRoutes from './overviewRoutes';
import projectManagementRoutes from './projectManagementRoutes';
import sowTrackerRoutes from './sowTrackerRoutes';
import projectTemplateRoutes from './projectTemplateRoutes';
import userManagementRoutes from './userManagementRoutes';
import recentActionRoutes from './recentActionRoutes';

import formsRoutes from './formsRoutes';
import iconsRoutes from './iconsRoutes';

export const dashboardLayoutRoutes = [
  overviewRoutes,
  projectManagementRoutes,
  sowTrackerRoutes,
  projectTemplateRoutes,
  userManagementRoutes,
  recentActionRoutes,

  formsRoutes,
  iconsRoutes,
];

export const authLayoutRoutes = [authRoutes];

export const sidebarRoutes = [
  overviewRoutes,
  projectManagementRoutes,
  sowTrackerRoutes,
  projectTemplateRoutes,
  userManagementRoutes,
  recentActionRoutes,

  formsRoutes,
  iconsRoutes,
];
