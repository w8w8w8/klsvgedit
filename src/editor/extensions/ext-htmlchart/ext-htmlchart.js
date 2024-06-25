/**
 * @file ext-shapes.js
 *
 * @license MIT
 *
 * @copyright 2010 Christian Tzurcanu, 2010 Alexis Deveria
 *
 */
const name = 'html_chart'

const loadExtensionTranslation = async function (svgEditor) {
  
}


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

    const modeId = 'shapes-html_chart-';//这里标记shape一下，不包括 
    const startClientPos = {}

    let curShape
    let startX
    let startY
    
    var l, c, g = S, u = 380, v = 240, f = "html_chart", p = "svg-ext-" + f, m = "HXC_", r = {};

    return {
      callback: function() {
        //S.setMode(modeId)
        //$id('canvasGrid').style.display = (showGrid) ? 'block' : 'none'
        $id('html_chart_panel').style.display = 'none';



      },
      mouseDown: function(e) {

          startX = e.start_x;
          startY = e.start_y;
          
                if (g.getMode() === f) {
                    !0;
                    var t = g.getColor("fill")
                      , r = g.getColor("stroke")
                      , n = e.start_x
                      , i = e.start_y
                      , o = g.getNextId()
                      , a = g.getNextId().replace("svg_", m)
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
                                className:'controls-box'
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
                            "font-size": g.getFontSize(),
                            "font-family": g.getFontFamily(),
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
        let _mode = g.getMode();
        if (("select" === _mode || "resize" === _mode  ) && e && e.selected && e.selected.id && e.selected.id.startsWith(m)){

            let _size = S.getBBox(e.selected);
            svgEditor.onGaugeResized({
                id: e.selected.id,
                size: _size
            })


        }
        if(e.selected)
          return e.selected.id
        return null;
      },
      mouseUp: function(e) {
        var t = g.getMode();
        return t !== f ? "select" === t && e && e.selected && e.selected.id && e.selected.id.startsWith(m) ? e.selected.id : void 0 : {
            keep: e.event.clientX != r.x && e.event.clientY != r.y,
            element: c,
            started: !1
        }
          
      },
      getClassId: function() {
          return x
      },
      getPrefixId: function() {
          return h
      }
  }
  }
}
