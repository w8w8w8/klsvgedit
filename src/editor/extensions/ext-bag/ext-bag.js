/**
 * @file ext-shapes.js
 *
 * @license MIT
 *
 * @copyright 2010 Christian Tzurcanu, 2010 Alexis Deveria
 *
 */
const name = 'html_bag'



export default {
  name,
  async init () {
    const svgEditor = this
    const S = svgEditor.svgCanvas
    const { $id, $click } = S
    const svgroot = S.getSvgRoot()
    let lastBBox = {}
    
    //await loadExtensionTranslation(svgEditor)

    const modeId = 'shapes-html_pipe-';//这里标记shape一下，不包括 
    const startClientPos = {}

    let curShape
    let startX
    let startY
    
    var l, c,
    u = 200, v = 160, 
    f = "html_bag", 
    p = "svg-ext-" + f, 
    m = "BAG_", 
    r = {};

    return {
      
    
      mouseDown: function(e) {
        if (S.getMode() === f) {
            !0;
            var t = S.getColor("fill")
              , r = S.getColor("stroke")
              , n = e.start_x
              , i = e.start_y
              , o = S.getNextId()
              , a = S.getNextId().replace("svg_", m)
              , s = {
                elements: [{
                    type: "rect",
                    attr: {
                        x: n,
                        y: i - v,
                        width: u,
                        height: v,
                        "stroke-width": 0,
                        id: o
                    }
                }, {
                    type: "foreignObject",
                    content: [{
                        tag: "div",
                        attr: {
                            id: "D-" + a
                        },
                        style: "width:100%;height:100%;",
                        className:"controls-box"
                    }],
                    attr: {
                        x: n,
                        y: i - v,
                        height: v,
                        width: u,
                        id: "H-" + a
                    }
                }]
            };
            return l = S.getNextId().replace("svg_", m),
            c = svgEditor.addSvgGroupFromJson({
                group: "g",
                id: l,
                type: p,
                attr: {
                    type: p,
                    style: "pointer-events:none",
                    fill: t,
                    stroke: r,
                    "stroke-width": 1,
                    "font-size": S.getFontSize(),
                    "font-family": S.getFontFamily(),
                    "text-anchor": "right",
                    "xml:space": "preserve"
                },
                elements: s.elements
            }),
            {
                started: !0
            }
        }
      },
      mouseMove: function(e) {
          if ("resize" === S.getMode() && e && e.selected && e.selected.id && e.selected.id.startsWith(m))
              return e.selected.id
      },
      mouseUp: function(e) {
          var t = S.getMode();
          return t !== f ? "select" === t && e && e.selected && e.selected.id && e.selected.id.startsWith(m) ? e.selected.id : void 0 : {
              keep: e.event.clientX != r.x && e.event.clientY != r.y,
              element: c,
              started: !1
          }
      },
      getClassId: function() {
          return p
      },
      getPrefixId: function() {
          return m
      }
    
    
    
    
    
    }
  }
}
