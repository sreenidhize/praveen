export const jobResource = `http://localhost:8082/api/v1/jobs`;
// const jobResource = `http://localhost:9000/jobs`;
import axios from "axios";

export const getAllJobs = (reqParams, cb) => {
  return axios(`${jobResource}?${reqParams}`).then((res) => {
    const result = res.data;
    cb(result);
  });
};

export const saveJob = (jobId, cb) => {
  return axios
    .post(`${jobResource}/${jobId}/save`, {
      jobId: jobId,
    })
    .then((res) => cb(res.data.id));
};

export const removeJob = (saveJobId) => {
  return axios.delete(`${jobResource}/saved/${saveJobId}`);
};

export const getAllSavedJobs = (cb) => {
  return axios(`${jobResource}/saved`).then((res) => {
    const savedJobsId = res.map((item) => item.id);
    cb(savedJobsId);
  });
};
