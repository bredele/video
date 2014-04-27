video
=====

**[peer](http://github.com/bredele/peer)**  plugin to attach a video stream to a peer connection


## Installation

with [component](http://github.com/component/component):

	$ component install bredele/video


## Usage

  video is a one liner to attach a video stream a peer connection. 

```js
var peer = require('peer');
var video = require('video');

var skype = peer();

// connect to room foo
skype.use(video('#video'));
```

  use it with **[signal](http://github.com/bredele/signal)** and **[channel](http://github.com/bredele/channel)**to create a video application like skype (video + chat) in a couple of lines:

```js
var skype = peer();

skype.use(video('#video'));
skype.use(channel('foo'));
skype.use(signal('foo'));

```

  see [example](https://github.com/bredele/video/blob/master/test/remote).


## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.