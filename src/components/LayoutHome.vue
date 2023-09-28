<template>
  <div class="">
    <div class="fixed h-screen top-0 p-4 min-w-[max-content] w-auto bg-faintGrey text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]  ">
    <div class="">
      <botton class="fixed right-430 cursor-pointer" @click="showComponent = !showComponent" >
        <img src="../assets/images/svgs/align-right.svg" alt="Image" class="w-[24px] h-[24px] mb-4" />
      </botton>
      </div>
     <div class="flex items-center mt-10">
       <!-- <h2 class="text-[30px] leading-[48px]">Memo</h2> -->
     </div>
      <ul class=" fixed h-screen shadow-lg w-[max-content] z-[1000] transition-all translate-x-[-360px] md:translate-x-0'" :class="showComponent ? 'translate-x-[-360px]' : 'translate-x-0' ">
      <li v-for="item in keyList" :key="item.id" @click="goAnchor(item)" class="cursor-pointer text-slate-500 text-[18px] font-normal leading-[24px] rounded-[4px] mb-[8px] hover:underline hover:text-black">{{ item.name }}</li>
     </ul>
    </div>
   </div>
    <div class="ml-80 w-3/4" :class="showComponent ? 'translate-x-[-140px]' : 'translate-x-0'">
     <slot></slot>
   </div>
</template>
<script   setup>
import { ref } from 'vue'

const keyList = ref([
  {
    name: 'Team',
    id: 'team'
  },
  {
    name: 'Customer & Pricing',
    id: 'customer_pricing'
  },
  {
    name: 'Product',
    id: 'product'
  },
  {
    name: 'Customers Acquisition & Retention',
    id: 'customers_cquisition_retention'
  },
  {
    name: 'Summary Financials',
    id: 'summary_financial'
  },
  {
    name: 'Deal',
    id: 'deal'
  },
  {
    name: 'Outcomes Analysis',
    id: 'outcomes_analysis'
  },
  {
    name: 'Conclusion',
    id: 'conclusion'
  },
  {
    name: 'Appendix',
    id: 'appendix'
  }
])
const showComponent = ref(false)
const goAnchor = (item) => {
  const anchorElement = document.getElementById(item.id)
  if (anchorElement) {
    anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
