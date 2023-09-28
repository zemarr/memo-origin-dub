<template>
  <div class="flex flex-row justify-center ">
   <div class="left p-8 bg-white   h-screen top-0 w-[max-content] z-[1000] transition-all shadow-lg translate-x-[-360px] md:translate-x-0"   :class="showComponent ? 'translate-x-[-380px]' : 'translate-x-0'">
     <div class="flex items-center">
       <img src="../assets//images/kinfolk-black.svg" alt="" class="w-[34px] h-[50px] mr-3 mb-4 bg-white">
     </div>
     <ul class="w-auto" >
      <li v-for="item in keyList" :key="item.id" @click="goAnchor(item)" class="cursor-pointer text-sm my-4 leading-5 text-slate-500 hover:underline hover:text-black">{{ item.name }}</li>
     </ul>
   </div>
    <div class="right ml-0">
      <botton class="absolute right-[24px] top-[4px] cursor-pointer" @click="showComponent = !showComponent" >
        <img src="../assets/images/svgs/align-right.svg" alt="Image" class="w-[24px] h-[24px] mb-4" />
      </botton>
     <slot></slot>
   </div>
  </div>
  <!-- w-[max-content] z-[1000] transition-all shadow-sm translate-x-[-360px] md:translate-x-0' -->
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
const showComponent = ref(true)
const goAnchor = (item) => {
  const anchorElement = document.getElementById(item.id)
  if (anchorElement) {
    anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
