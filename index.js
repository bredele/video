
/**
 * Modules dependencies.
 * @api private
 */

var attach = require('attach');
var media = require('media');
var wedge = require('wedge');


/**
 * video constructor.
 * @api public
 */

module.exports = function(node, options) {

  return function(peer) {
    var data = wedge(peer.data, 'video');
    var video = media({
      video: true
    });

    // video should not be undefined
    if(data.video) video.set(data);

    video.on('stream', function(data, stream) {
      peer.emit('stream');
      peer.queue('_stream', stream);
    });

    // add stream always before offer
    peer.on('create', function() {
      peer.on('_stream', function(stream) {
        peer.stream(stream);
      });
    });
    
    attach(video, node, options);
  };

};