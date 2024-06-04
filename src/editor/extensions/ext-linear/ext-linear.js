/**
 * @file ext-helloworld.js
 *
 * @license MIT
 *
 * @copyright 2010 Alexis Deveria
 *
 */

/**
* This is a very basic SVG-Edit extension. It adds a "Hello World" button in
*  the left ("mode") panel. Clicking on the button, and then the canvas
*  will show the user the point on the canvas that was clicked on.
*/

const name = 'help-linear'

const loadExtensionTranslation = async function (svgEditor) {
  
}

export default {
  name,
  async init () {
    const svgEditor = this
    await loadExtensionTranslation(svgEditor)
    const { svgCanvas } = svgEditor
    const { $id, $click, NS  } = svgCanvas
    
    "use strict";
        var e = "rgba(255, 0, 0, 0.5)"
          , o = svgEditor.svgCanvas
          , a = ["line", "path", "pipe"]
          , s = !1
          , t = NS
          , d = o.assignAttributes
          , r = document.getElementById("svgcanvas").ownerDocument
          , l = document.getElementById("canvasBackground")
          , c = r.createElementNS(t.SVG, "line");
        d(c, {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            "stroke-width": 1,
            stroke: e
        });
        var g = r.createElementNS(t.SVG, "line");
        function n() {
            s = !1,
            d(c, {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0
            }),
            d(g, {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0
            })
        }
        return d(g, {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            "stroke-width": 1,
            stroke: e
        }),
        l.append(c),
        l.append(g),
        {
            callback: function() {},
            mouseDown: function(e) {
                var t = o.getMode();
                -1 !== a.indexOf(t) ? s = !0 : n()
            },
            mouseMove: function(e) {
                if (s) {
                    var t = o.getMode();
                    -1 !== a.indexOf(t) && (r = e.mouse_x,
                    n = e.mouse_y,
                    i = l.getBBox(),
                    d(c, {
                        x1: r,
                        y1: 0,
                        x2: r,
                        y2: i.height
                    }),
                    d(g, {
                        x1: 0,
                        y1: n,
                        x2: i.width,
                        y2: n
                    }))
                }
                var r, n, i
            },
            mouseUp: function(e) {
                if (s && "line" != o.getMode())
                    return;
                n()
            }
        }


  }
}
