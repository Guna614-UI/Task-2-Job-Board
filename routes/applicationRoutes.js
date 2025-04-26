import express from 'express';
import { applyToJob } from '../controllers/applicationController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/:jobId', auth(['jobseeker']), applyToJob);
export default router;
