/**
 * @file ext-shapes.js
 *
 * @license MIT
 *
 * @copyright 2010 Christian Tzurcanu, 2010 Alexis Deveria
 *
 */
const name = 'ext_shapes'

const loadExtensionTranslation = async function (svgEditor) {
  
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

    const modeId = 'shapes-';//这里标记shape一下，不包括 
    const startClientPos = {}

    let curShape
    let startX
    let startY
    var _, p, C, E, A, m = svgEditor.shapesList,  h = "SHE_", I = {}, x = "svg-ext-", w = {};
    console.log('svgEditor.shapesList',m);
    return {
      callback: function() {
        //S.setMode(modeId)
        m = svgEditor.shapesList;
      },
      mouseDown: function(e) {

          startX = e.start_x
          //const x = startX//const y = startY
          startY = e.start_y
          

          var t = S.getMode();
          
          //if (t !== modeId) { return undefined }

          //let exits = m.find(function(e) {
          //  return e.name === t
          //});
          //console.log('t:' + exits);


          if (x = "svg-ext-" + t,
          p = t,
          void 0 !== (_ = m.find(function(e) {
              return e.name === p
          }))) {
              var r = S.getColor("fill")
                , n = S.getColor("stroke")
                , i = S.getFontSize()
                , o = S.getFontFamily()
                , a = S.getStrokeWidth();
              S.getStyle();
              r === n && (r = "#FFFFFF",
              n = "#000000");
              for (var s = E = e.start_x, d = A = e.start_y, l = {
                  fill: r,
                  stroke: n,
                  "stroke-width": a,
                  "font-size": i,
                  "font-family": o,
                  "text-anchor": "middle",
                  "xml:space": "preserve"
              }, c = {
                  elements: []
              }, g = 0; g < _.content.length; g++) {
                  var u = _.content[g]
                    , v = {
                      id: u.id + S.getNextId().replace("svg_", h),
                      "stroke-width": a
                  };
                  $.extend(v, u.attr),
                  c.elements.push({
                      type: u.type,
                      content: u.content,
                      attr: v
                  })
              }
              var f = {
                  type: x,
                  x: s,
                  y: d,
                  style: "pointer-events:none"
              };
              return $.extend(f, l),
              w.x = s,
              w.y = d,
              p = S.getNextId().replace("svg_", h),
              (C = svgEditor.addSvgGroupFromJson({
                  group: "g",
                  id: p,
                  type: x,
                  attr: f,
                  elements: c.elements
              })).setAttribute("transform", "translate(" + s + "," + d + ")"),

              S.recalculateDimensions(C),
              I = C.getBBox(),
              {
                  started: !0
              }
          }
      },
      mouseMove: function(e) {

        //const mode = S.getMode()
        //if (mode !== modeId) { }
        return;

          if (void 0 !== _) {
              var t = S.getZoom()
                , r = e.event
                , n = e.mouse_x / t
                , i = e.mouse_y / t;
                
              svgEditor.configObj.curConfig.gridSnapping && (n = S.snapToGrid(n),
              i = S.snapToGrid(i));
              var o = S.getTransformList(C)
                , a = C.getBBox()
                , s = a.x
                , d = a.y
                , l = a.width
                , c = a.height
                , g = n - E
                , u = i - A
                , v = (Math.min(E, n),
              Math.min(A, i),
              Math.abs(n - E))
                , f = Math.abs(i - A)
                , p = 0
                , m = 0
                , h = c ? (c + u) / c : 1
                , x = l ? (l + g) / l : 1;
              x = v / I.width || 1,
              h = f / I.height || 1,
              n < E && (p = I.width),
              i < A && (m = I.height);
              var w = svgroot.createSVGTransform()
                , y = svgroot.createSVGTransform()
                , b = svgroot.createSVGTransform();
              if (w.setTranslate(-(s + p), -(d + m)),
              !r.shiftKey) {
                  var k = Math.min(Math.abs(x), Math.abs(h));
                  x = k * (x < 0 ? -1 : 1),
                  h = k * (h < 0 ? -1 : 1)
              }
              y.setScale(x, h),
              b.setTranslate(s + p, d + m),
              o.appendItem(b),
              o.appendItem(y),
              o.appendItem(w),
              S.recalculateDimensions(C),
              I = C.getBBox()
          }
      },
      mouseUp: function(e) {
        //const mode = S.getMode()
        //if (mode !== modeId) { return undefined }

          if (void 0 !== _){
            S.setMode('select');
              return {
                  keep: e.event.clientX != w.x && e.event.clientY != w.y,
                  element: C,
                  started: !1
              }
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
