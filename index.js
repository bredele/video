
/**
 * Modules dependencies.
 * @api private
 */

var attach = require('attach');
var media = require('media');
var wedge = require('wedge');


/**
 * Default video constraints.
 * @type {Object}
 */

var constraints = {
  "mandatory": {},
  "optional": []
};


/**
 * Get a video stream from an HTML node
 * and attach the stream to a peer connection.
 * 
 * Examples:
 *
 *   peer.use(video('#id'));
 *   
 * @param {Element} node
 * @return {Function}
 * @api public
 */

module.exports = function(node, options) {

  return function(peer) {
    var data = wedge(peer.data, 'video');
    var video = media(constraints);

    // we don't validate video constraints
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