import express from 'express';
import {
  createJob,
  getJobs,
  getJobById,
  deleteJob,
  updateJob,  // <-- Import updateJob
} from '../controllers/jobController.js';

const router = express.Router();

router.post('/', createJob);
router.get('/', getJobs);
router.get('/:id', getJobById);
router.delete('/:id', deleteJob);
router.put('/:id', updateJob);  // <-- Add PUT route for updating job

export default router;
