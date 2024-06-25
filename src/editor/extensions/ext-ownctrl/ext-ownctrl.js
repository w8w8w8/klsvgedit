/**
 * @file ext-shapes.js
 *
 * @license MIT
 *
 * @copyright 2010 Christian Tzurcanu, 2010 Alexis Deveria
 *
 */
const name = 'html_own_ctrl'



export default {
  name,
  async init () {
    const svgEditor = this
    const S = svgEditor.svgCanvas
    const { $id, $click } = S
    const svgroot = S.getSvgRoot()
    let lastBBox = {}
    
    //await loadExtensionTranslation(svgEditor)

    const modeId = 'shapes-html_own_ctrl-';//这里标记shape一下，不包括 
    const startClientPos = {}

    let curShape
    let startX
    let startY
    
    var g, u, v = svgEditor.canvas, f = 220, p = 140, m = "own_ctrl", h = "svg-ext-" + m, x = h, w = "OXC_", r = {};

    return {
        callback: function() {
            //$("#own_ctrl_panel").hide()
        },
        mouseDown: function(e) {
            var t = S.getMode();
            if (t.startsWith(m)) {
                var r = t.replace(m, "");
                x = h + r,
                !0;
                var n = S.getColor("fill")
                  , i = S.getColor("stroke")
                  , o = e.start_x
                  , a = e.start_y
                  , s = S.getNextId()
                  , d = S.getNextId().replace("svg_", w)
                  , l = {
                    elements: [{
                        type: "rect",
                        attr: {
                            x: o,
                            y: a - p,
                            width: f,
                            height: p,
                            "stroke-width": 0,
                            id: s
                        }
                    }, {
                        type: "foreignObject",
                        content: [{
                            tag: "div",
                            attr: {
                                id: "D-" + d
                            },
                            style: "width:100%;height:100%;",
                            className:'controls-box own_ctrl-table'
                        }],
                        attr: {
                            x: o,
                            y: a - p,
                            height: p,
                            width: f,
                            id: "H-" + d
                        }
                    }]
                };
                return g = S.getNextId().replace("svg_", w),
                u = svgEditor.addSvgGroupFromJson({
                    group: "g",
                    id: g,
                    type: x,
                    attr: {
                        type: x,
                        style: "pointer-events:none",
                        fill: n,
                        stroke: i,
                        "stroke-width": 1,
                        "font-size": S.getFontSize(),
                        "font-family": S.getFontFamily(),
                        "text-anchor": "right",
                        "xml:space": "preserve"
                    },
                    elements: l.elements
                }),
                {
                    started: !0
                }
            }
        },
        mouseMove: function(e) {
            if ("resize" === S.getMode() && e && e.selected && e.selected.id && e.selected.id.startsWith(w))
                return e.selected.id
        },
        mouseUp: function(e) {
            var t = S.getMode();
            return t.startsWith(m) ? {
                keep: e.event.clientX != r.x && e.event.clientY != r.y,
                element: u,
                started: !1
            } : "select" === t && e && e.selected && e.selected.id && e.selected.id.startsWith(w) ? e.selected.id : void 0
        },
        getClassId: function() {
            return x
        },
        getPrefixId: function() {
            return w
        }
    }
    



  }
}
