import Application from '../models/Application.js';
import Job from '../models/Job.js';

export const applyToJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const userId = req.user.id;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const existingApp = await Application.findOne({ job: jobId, applicant: userId });
    if (existingApp)
      return res.status(400).json({ message: 'You already applied to this job' });

    const application = new Application({
      job: jobId,
      applicant: userId,
    });

    await application.save();
    res.status(201).json({ message: 'Applied successfully', application });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
