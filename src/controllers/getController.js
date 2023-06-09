import * as getService from '../services/getService';

class GetController {
  async getAllDataFromUser(req, res) {
    try {
      const { status, payload } = await getService.getAllDataFromUser(
        req.params.role,
        req.query,
        req.params.type,
        req.params.project
      );
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async getAllDataFromStaffTable(req, res) {
    try {
      const { status, payload } = await getService.getAllData(
        'Staff',
        req.query,
        req.params.type
      );
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async getAllDataFromProject(req, res) {
    try {
      const { status, payload } = await getService.getAllData(
        'Project',
        req.query,
        req.params.type
      );
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  async getAllDataFromError(req, res) {
    try {
      const { status, payload } = await getService.getAllDataFromError(
        req.params.project_id,
        req.query
      );
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  async getAllDataFromStaff(req, res) {
    try {
      const { status, payload } = await getService.getAllDataFromStaff();
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async getUserById(req, res) {
    try {
      const { status, payload } = await getService.getDataById(
        'User',
        req.id,
        Number.parseInt(req.params.userId)
      );
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async getStaffById(req, res) {
    try {
      const { status, payload } = await getService.getDataById(
        'Staff',
        req.id,
        Number.parseInt(req.params.staffId)
      );
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async getProjectById(req, res) {
    try {
      const { status, payload } = await getService.getProjectById(
        req.params.projectId
      );
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async getExportErrorData(req, res) {
    try {
      const { status, payload } = await getService.getExportErrorData(
        req.params.projectId
      );
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async getLineChart(req, res) {
    try {
      const { status, payload } = await getService.getLineChart();
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async getPipeChart(req, res) {
    try {
      const { status, payload } = await getService.getPipeChart();
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  async getBarChart(req, res) {
    try {
      const { status, payload } = await getService.getBarChart();
      return res.status(status).json(payload);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}

export default new GetController();
