<template>
   <div class="">
    <div class="left fixed h-screen top-0 p-8  min-w-[max-content] w-auto bg-faintGrey text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
      <div class="flex items-center">
        <img src="../assets//images/kinfolk-black.svg" alt="" class="w-[34px] h-[50px] mr-3 mb-4">
        <!-- <h2 class="text-[30px] leading-[48px]">Memo</h2> -->
      </div>
      <ul>
        <li v-for="item in keyList" :key="item.id" @click="goAnchor(item)" class="cursor-pointer text-slate-500 text-[18px] font-normal leading-[24px] rounded-[4px] mb-[8px]">{{ item.name }}</li>
      </ul>
    </div>
    <div class="right ml-[340px]">
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
