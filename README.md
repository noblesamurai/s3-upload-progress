# S3-upload-progress [![Build Status](https://secure.travis-ci.org/noblesamurai/s3-upload-progress.png?branch=master)](http://travis-ci.org/noblesamurai/s3-upload-progress) [![NPM version](https://badge-me.herokuapp.com/api/npm/s3-upload-progress.png)](http://badges.enytc.com/for/npm/s3-upload-progress)

> A thin wrapper around s3.upload for (easier) progress notifications.

## Purpose
A thin wrapper around AWS' s3.upload for (easier) progress notifications.

## Usage

```js
function progress (p) {
  console.log(p);
}
const upload = await s3UploadProgress({ Bucket: 'dev.mybucket.com', Key: 'key', Body: fs.createReadStream(tempFile) }, progress);
```

## API

<a name="module_s3-upload-progress"></a>

## s3-upload-progress
cf https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
for +params+, +options+.

**Params**: <code>object</code> params As passed through to s3.upload().
**Params**: <code>function</code> progress function that will receive progress updates, as
a value between 0 and 1.
**Params**: <code>object</code> options As passed through to s3.upload().

Note: To regenerate this section from the jsdoc run `npm run docs` and paste
the output above.

## Installation

This module is installed via npm:

``` bash
$ npm install s3-upload-progress
```
## License

The BSD License

Copyright (c) 2018, Tim Allen

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the Tim Allen nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

