
<template>
  <div class="scrollable-div interviewVideo_main relative h-[172px] w-full overflow-hidden" id="videoContainer">
  <!--This section dynamically generates the corresponding number of canvas canvases based on the number of pages in the PDF-->
  <canvas
    v-for="pageIndex in pdfPages"
    :id="`pdf-canvas-` + pageIndex + `${currentId}`"
    :key="pageIndex"
    style="display: block"
    class="!w-full !h-[536px]"
  ></canvas>
 </div>
</template>
<script setup>
import { ref, reactive, nextTick, defineProps, watch, onMounted } from 'vue'
import * as pdfjsLib from 'pdfjs-dist/build/pdf'
import { v4 as uuidv4 } from 'uuid'
const currentId = uuidv4()
const props = defineProps({
  pdfUrl: String
})
let pdfDoc = reactive({})
const pdfPages = ref(1.0)
const pdfScale = ref(1.0)

const loadFile = async (url) => {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js'
  const loadingTask = pdfjsLib.getDocument(url)
  loadingTask.promise.then((pdf) => {
    pdfDoc = pdf
    // pdfPages.value = pdf.numPages
    nextTick(() => {
      renderPage(1)
    })
  })
}
const renderPage = (num) => {
  pdfDoc.getPage(num).then((page) => {
    const canvasId = 'pdf-canvas-' + num + currentId
    const canvas = document.getElementById(canvasId)
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const bsr =
ctx.webkitBackingStorePixelRatio ||
ctx.mozBackingStorePixelRatio ||
ctx.msBackingStorePixelRatio ||
ctx.oBackingStorePixelRatio ||
ctx.backingStorePixelRatio ||
1
    const ratio = dpr / bsr
    const viewport = page.getViewport({ scale: pdfScale.value })
    canvas.width = viewport.width * ratio
    canvas.height = viewport.height * ratio
    canvas.style.width = viewport.width + 'px'
    canvas.style.height = viewport.height + 'px'
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    }
    page.render(renderContext)
    if (num < pdfPages.value) {
      renderPage(num + 1)
    }
  })
}
onMounted(() => {
  console.log('mounted')
})
watch(() => props.pdfUrl, (cur, prev) => {
  if (cur !== prev) {
    loadFile(cur)
  }
}, { immediate: true, deep: true })
</script>

<style>
.interviewVideo_main {
  height: 172px;
}
.scrollable-div::-webkit-scrollbar {
  display: none;
}

</style>
