<template>
   <div class="container flex">
    <div class="left fixed min-h-screen top-90px p-8 bg-white  w-48 text-slate-500 bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
      <div><img src="../assets//images/kinfolk-black.svg" alt="" class="w-[24px] h-[40px]"></div>
      <div class="cursor-pointer" v-for="item in keyList" :key="item.id">
        <h1 @click="goAnchor(item)"  >{{ item.name }}</h1>
      </div>
    </div>
    <div class="right ml-36">
      <slot></slot>
    </div>
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
const goAnchor = (item) => {
  const anchorElement = document.getElementById(item.id)
  if (anchorElement) {
    anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
