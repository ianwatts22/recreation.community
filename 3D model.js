const modelViewer = $("model-viewer")
const x = 0.1
const y = 0.1
const z = 0.1
// trying to scale down 50%, not working

const scale = () => {
  modelViewer.scale = `${x} ${y} ${z}`
  // modelViewer.updateFraming()
  console.log("scale")
}
if(modelViewer.loaded) scale()
modelViewer.mousemove = (event) => { scale() }

const updateScale = () => {
  modelViewerTransform.scale = `${x.value} ${y.value} ${z.value}`;
};

const reality = $('#reality')
reality.click(() => {
  video.toggle()
  modelViewer.toggle()
  console.log("toggle")
  vidElement.pause()
  video.is(":hidden") ? reality.html("reality") : reality.html("virtual")
})