const s3UploadProgress = require('..');
const temp = require('temp');
const nock = require('nock');
const fs = require('fs');
describe('s3UploadProgress', function () {
  after(function () {
    nock.cleanAll();
  });
  it('does not screw up on retriable errors', function () {
    const tempFile = temp.path({ suffix: '.txt' });
    fs.writeFileSync(tempFile, 'asdf');
    nock('https://s3.amazonaws.com')
      .put('/dev.mybucket.com/key')
      .reply(500)
      .put('/dev.mybucket.com/key')
      .reply(200);
    return s3UploadProgress({ Bucket: 'dev.mybucket.com', Key: 'key', Body: fs.createReadStream(tempFile) });
  });
});
