<template>
  <div>
    <div style=" padding: 10px;">
      <div ref="chartNode" style="min-height: 300px;"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FileBlockProps } from '@githubnext/blocks'
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const { content } = defineProps<{
  content: FileBlockProps['content'];
}>()

let chartNode = ref()
let chart: any = null

try {
  window.eval(content)
} catch (e) {
  console.log('Please check you use the right js file.')
}

onMounted(() => {
  chart = echarts.init(chartNode.value)
  window.addEventListener('resize', () => {
    chart.resize();
  })
  try {
    setOption(axios).then(resp => {
      chart.setOption(resp)
    })
  } catch (e) {
    console.log('Please write async setOption() function in the js file.')
  }
})


</script>