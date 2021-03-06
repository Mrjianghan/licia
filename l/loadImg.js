/* Load image with given src.
 *
 * |Name|Type    |Desc           |
 * |----|--------|---------------|
 * |src |string  |Image source   |
 * |[cb]|function|Onload callback|
 * 
 * ```javascript
 * loadImg('http://eustia.liriliri.io/img.jpg', function (err, img) 
 * {
 *     console.log(img.width, img.height);
 * });
 * ```
 */

/* module
 * env: browser
 * test: browser
 */

_('noop');

function exports(src, cb) {
    cb = cb || noop;

    var img = new Image();
    img.onload = function() {
        cb(null, img);
    };
    img.onerror = function(err) {
        cb(err);
    };
    img.src = src;
}
