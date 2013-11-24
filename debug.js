/*jshint onevar: true, sub: true, curly: true */
/*global console: true*/

/**
 *  a wrapper for the console object so that it can still be used without
 *  throwing an error in browsers that don't have console object available.
 *  The console object methods that are supported are:
 *  ['log','info','warn','error', 'debug', 'dir', 'group', 'groupEnd']
 *  Debug History
 *  All calls to the debug object will be saved in debug.history.

 *  @example
 *  Basic
 *  debug.log('This is a log message');
 *  @example
 *  String Substituion
 *  debug.log("The %s jumped over %d tall buildings", animal, count);
 *
 *  @version 0.2.1
 */
window.debug = (function() {
    var debug = {},
        id,
        message,
        types = ['log','info','warn','error', 'debug', 'dir', 'group', 'groupEnd'];

    /**
     *  Determine if debug mode is on or off. The default state is off (false)
     *  To turn debug on set debug.on to true or by adding a query string to the URL
     *  @example
     *  http://example.com?debug=true
     */
    debug.on = (function () {
        var debug, query, pairs, pair, i, z;
        debug = false;
        if (location.search) {
            query = location.search.substring(1);
            pairs = query.split('&');
            for (i=0, z=pairs.length; i<z; i++) {
                pair = pairs[i].split('=');
                if (pair[0] === 'debug') {
                    debug = pair[1];
                    break;
                }
            }
        }
        return debug;
    })();

    debug.history = debug.history || [];

    id = types.length;

    /* TODO is there a better way to do this? */
    while (--id >= 0) {
        (function(type) {
            debug[type] = function() {
            if (debug.on && typeof console !== 'undefined') {
                debug.history.push(arguments);
                if (console[type].apply) {
                    console[type].call(console, '--------------------');
                    console[type].apply(console, arguments);
                } else {
                    // console is native in IE so apply method won't work because it's not an object
                    message = Array.prototype.slice.apply(arguments).join(' ');
                    console[type]('--------------------');
                    console[type](message);
                }
            }
        };
        })(types[id]);
    }
    return debug;
})();
