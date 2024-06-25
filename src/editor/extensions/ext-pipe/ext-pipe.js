/**
 * @file ext-shapes.js
 *
 * @license MIT
 *
 * @copyright 2010 Christian Tzurcanu, 2010 Alexis Deveria
 *
 */
const name = 'html_pipe'


const handleSvgEditEvent = ev => {
    switch (ev.detail.action) {
      case 'selectedChanged':
      case 'onOpenedDocument':
        console.log('onOpenedDocument', ev.detail.name)
        break
      case 'onSavedDocument':
        console.log('onSavedDocument', ev.detail.vars.name)
        break
      case 'elementRenamed':
         console.log('elementRenamed', ev.detail.vars)
         break
      case 'elementChanged':
        console.log('elementChanged', ev.detail.vars.elems)
        break
      case 'mouseDown':
      case 'mouseUp':
      case 'mouseMove':
        console.log('mouseMove',ev.detail)

      case 'elementTransition':
      case 'toolButtonStateUpdate':
      case 'beforeClear':
      case 'canvasUpdated':
      case 'zoomChanged':
      case 'langChanged':
      default:
        console.log(ev.detail)
        break
    }
  }


export default {
  name,
  async init () {
    const svgEditor = this
    const S = svgEditor.svgCanvas
    const { $id, $click } = S
    const svgroot = S.getSvgRoot()
    let lastBBox = {}
    await loadExtensionTranslation(svgEditor)

    const modeId = 'shapes-html_pipe-';//这里标记shape一下，不包括 
    const startClientPos = {}

    let curShape
    let startX
    let startY
    
    var g = svgEditor.canvas
          , u = "svg-ext-pipe"
          , v = "PIE_";

    return {
      callback: function() {
        //S.setMode(modeId)

      },
      initPipe: function(e) {
        if (!e || !e[0])
            return !1;
        var t = document.getElementById(e[0].id);
        if (!t)
            return !1;
        var r = e[0].property;
        if ("path" == t.nodeName) {
            var n = t.getBBox()
              , i = t.getAttribute("d")
              , o = r.contentSpace + " " + r.contentSpace;
            t.remove();
            var a = [{
                type: "path",
                attr: {
                    id: "b" + g.getNextId().replace("svg_", v),
                    d: i,
                    "stroke-width": r.borderWidth,
                    stroke: r.border,
                    fill: "none"
                }
            }, {
                type: "path",
                attr: {
                    id: "p" + g.getNextId().replace("svg_", v),
                    d: i,
                    "stroke-width": r.pipeWidth,
                    stroke: r.pipe,
                    fill: "none"
                }
            }, {
                type: "path",
                attr: {
                    id: "c" + g.getNextId().replace("svg_", v),
                    d: i,
                    "stroke-width": r.contentWidth,
                    stroke: r.content,
                    fill: "none",
                    "stroke-dasharray": o
                }
            }]
              , s = g.getNextId().replace("svg_", v)
              , d = {
                type: u,
                x: n.x,
                y: n.y,
                style: "pointer-events:none"
            };
            return $.extend(d, {
                "xml:space": "preserve"
            }),
            {
                keep: !0,
                element: g.addSvgGroupFromJson({
                    group: "g",
                    id: s,
                    type: u,
                    attr: d,
                    elements: a
                }),
                started: !1
            }
        }
        for (var l = 0; l < t.childNodes.length; l++) {
            var c = t.childNodes[l];
            if (0 <= c.id.indexOf("b" + v))
                c.setAttribute("stroke-width", r.borderWidth),
                c.setAttribute("stroke", r.border);
            else if (0 <= c.id.indexOf("p" + v))
                c.setAttribute("stroke-width", r.pipeWidth),
                c.setAttribute("stroke", r.pipe);
            else if (0 <= c.id.indexOf("c" + v)) {
                c.setAttribute("stroke-width", r.contentWidth),
                c.setAttribute("stroke", r.content);
                o = r.contentSpace + " " + r.contentSpace;
                c.setAttribute("stroke-dasharray", o)
            }
        }
        return {
            keep: !0,
            element: t,
            started: !1
        }
      },

      getClassId: function() {
          return u
      },
      getPrefixId: function() {
          return v
      }
  }
  }
}
