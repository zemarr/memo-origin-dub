<template>
  <div class="">
   <div class="left fixed h-screen -top-1 p-8 min-w-[max-content] w-auto backdrop-blur-lg text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px] transition-all shadow-lg z-[1000]" :class="(!showSidebar && windowWidth <= 1023) ? '-translate-x-[340px]' : 'translate-x-0'">
     <button @click="showSidebar = !showSidebar" class="absolute -right-[52px] backdrop-blur-lg backdrop-opacity-80 py-3 px-2 flex items-center justify-center shadow-md rounded-tr-md rounded-br-md z-[1000] lg:hidden">
       <span v-show="!showSidebar" class="expand block w-7">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="expand"><g data-name="Layer 2"><path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1zm-9.29 8.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z" data-name="expand"></path></g></svg>
       </span>
       <span v-show="showSidebar" class="collapse block w-7">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="collapse"><g data-name="Layer 2"><path d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2zm-9 4H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" data-name="collapse"></path></g></svg>
       </span>
     </button>
     <div class="flex items-center">
       <img src="../assets//images/kinfolk-black.svg" alt="" class="w-[34px] h-[50px] mr-3 mb-4">
       <!-- <h2 class="text-[30px] leading-[48px]">Memo</h2> -->
     </div>
     <ul>
       <li v-for="item in keyList" :key="item.id" @click="goAnchor(item)" class="cursor-pointer text-slate-500 text-[18px] font-normal leading-[24px] rounded-[4px] mb-[8px]">{{ item.name }}</li>
     </ul>
   </div>
   <div class="right" :class="windowWidth <= 1023 ? 'ml-0' : 'ml-[340px]'">
     <slot></slot>
   </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    const showSidebar = ref(false)
    const windowWidth = ref(window.innerWidth)
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
      closeSidebar()
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    const closeSidebar = () => {
      showSidebar.value = false
    }
    return {
      keyList,
      goAnchor,
      showSidebar,
      closeSidebar,
      windowWidth
    }
  }
}

</script>
