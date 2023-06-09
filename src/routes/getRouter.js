import express from 'express';
import getController from '../controllers/getController';
import { checkToken, checkAdmin, checkRole } from '../middlewares';

const getRouter = express.Router();

getRouter.get(
  '/:role/users/:type/:project',
  checkToken,
  checkRole,
  getController.getAllDataFromUser
);
getRouter.get(
  '/:role/users/:type',
  checkToken,
  checkRole,
  getController.getAllDataFromUser
);

getRouter.get(
  '/staffs/:type',
  checkToken,
  checkAdmin,
  getController.getAllDataFromStaffTable
);

getRouter.get(
  '/projects/:type',
  checkToken,
  checkAdmin,
  getController.getAllDataFromProject
);

getRouter.get(
  '/errors/:project_id',
  checkToken,
  getController.getAllDataFromError
);
getRouter.get(
  '/staffs',
  checkToken,
  checkAdmin,
  getController.getAllDataFromStaff
);

getRouter.get('/user/:userId', checkToken, getController.getUserById);
getRouter.get('/staff/:staffId', checkToken, getController.getStaffById);
getRouter.get('/project/:projectId', checkToken, getController.getProjectById);

getRouter.get(
  '/export-error/:projectId',
  checkToken,
  getController.getExportErrorData
);

getRouter.get('/chart/user/line', getController.getLineChart);
getRouter.get('/chart/user/pipe', getController.getPipeChart);
getRouter.get('/chart/user/bar', getController.getBarChart);

export default getRouter;
