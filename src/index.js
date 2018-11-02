const AWS = require('aws-sdk');
const s3 = new AWS.S3();

/**
 * @module s3-upload-progress
 * @async
 * Thin wrapper for s3.upload() for progress (easier) notification.
 * @params {object} params As passed through to s3.upload().
 * @params {function} progress function that will receive progress updates, as
 * a value between 0 and 1.
 * @params {object} options As passed through to s3.upload().
 * @description cf https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
 * for +params+, +options+.
 */
module.exports = async function s3upload (params, progress = () => {}, options = {}) {
  const upload = s3.upload(params, options);
  progress(0);
  upload.on('httpUploadProgress', ({ loaded, total }) => {
    if (loaded && total) progress(loaded / total);
  });
  await upload.promise();
  progress(1);
};
