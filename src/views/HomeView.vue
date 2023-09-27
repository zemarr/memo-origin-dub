<template>
  <main class="bg-grey-300">
    <div
      :class="!dataloaded ? 'flex items-center justify-center home bg-faintGrey min-h-screen p-8 max-w-[894px] mx-auto' : ''"
    >
      <div class="mt-20" v-if="!dataloaded && !error">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" pserveAspectRatio="xMidYMid">
          <g transform="translate(26.666666666666668,26.666666666666668)">
            <rect x="-20" y="-20" width="40" height="40" fill="#000000">
              <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="-0.3s"></animateTransform>
            </rect>
          </g>
          <g transform="translate(73.33333333333333,26.666666666666668)">
            <rect x="-20" y="-20" width="40" height="40" fill="#636363">
              <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="-0.2s"></animateTransform>
            </rect>
          </g>
          <g transform="translate(26.666666666666668,73.33333333333333)">
            <rect x="-20" y="-20" width="40" height="40" fill="#e1e1e1">
              <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="0s"></animateTransform>
            </rect>
          </g>
          <g transform="translate(73.33333333333333,73.33333333333333)">
            <rect x="-20" y="-20" width="40" height="40" fill="#545454">
              <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="-0.1s"></animateTransform>
            </rect>
          </g>
        </svg>
      </div>
      <div v-if="!dataloaded && error" class=" my-10">
        <div class="flex flex-col justify-center items-center">
          <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="43.5" cy="43.5" r="43.5" fill="#F4F5F5"/>
            <path d="M48.9422 55.3909C48.9422 58.392 46.5005 60.8337 43.4994 60.8337C40.4983 60.8337 38.0566 58.392 38.0566 55.3909C38.0566 52.3898 40.4983 49.9481 43.4994 49.9481C46.5005 49.9481 48.9422 52.3898 48.9422 55.3909ZM38.6866 27.7144L39.6119 46.2198C39.6554 47.0888 40.3726 47.771 41.2427 47.771H45.7561C46.6262 47.771 47.3434 47.0888 47.3869 46.2198L48.3122 27.7144C48.3588 26.7817 47.6152 26 46.6814 26H40.3174C39.3836 26 38.64 26.7817 38.6866 27.7144Z" fill="#828282" fill-opacity="0.6"/>
           </svg>
          <p class="w-[210px] mt-4 font-Rubik text-[13px] leading-[20px] text-greyText text-center">Unable to load memo! This memo does not exist</p>
        </div>
      </div>
      <div v-if="dataloaded" class="home min-h-screen p-8">
        <div class="overview bg-white rounded-[4px] px-8 py-9">
          <div class="flex items-start flex-col w-full mb-3">
            <img class="cursor-pointer" src="../assets/images/svgs/align-right.svg" alt="Image" @click="toggleNavigation" />
          </div>
          <div class="nav-bar" v-if="showComponent"><LayoutHome  :contentData="memo"/></div>
          <div class="flex   md:flex-row flex-col w-full mb-3">
            <div class="logo w-[80px] h-[80px] mr-4">
              <img :src="`${s3Bucket}${memo.logo}`" alt="">
            </div>
            <div class="relative w-[inherit]">
              <div class="header flex items-center justify-between">
                <h1 class="text-[24px] leading-[32px] mb-[6px] tracking-[-2%]">{{ memo.title}}📌📌</h1>
                <img src="../assets//images/kinfolk-black.svg" alt="" class="w-[24px] h-[21.06px]">
              </div>
              <h2 class="mb-[12px] font-[500] text-[16px] leading-[24px]">{{ memo.company_name }}</h2>
              <p class="flex items-center text-greyText mb-[20px] text-[13px] leading-[20px]">
                <span class="mr-[6px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1C5.23969 1 3 3.01594 3 5.5C3 9.5 8 15 8 15C8 15 13 9.5 13 5.5C13 3.01594 10.7603 1 8 1ZM8 8C7.60444 8 7.21776 7.8827 6.88886 7.66294C6.55996 7.44318 6.30362 7.13082 6.15224 6.76537C6.00087 6.39991 5.96126 5.99778 6.03843 5.60982C6.1156 5.22186 6.30608 4.86549 6.58579 4.58579C6.86549 4.30608 7.22186 4.1156 7.60982 4.03843C7.99778 3.96126 8.39991 4.00087 8.76537 4.15224C9.13082 4.30362 9.44318 4.55996 9.66294 4.88886C9.8827 5.21776 10 5.60444 10 6C9.99942 6.53026 9.78852 7.03863 9.41357 7.41357C9.03863 7.78852 8.53026 7.99942 8 8Z" fill="#666666"/>
                  </svg>
                </span>
                {{ memo.formatted_address}}
              </p>
              <div class="flex items-center flex-wrap">
                <div class="bg-faintGrey text-greyText text-[14px] leading-[20px] py-[6px] px-[12px] max-w-[max-content] min-w-[122.59px] mr-3 mb-3 rounded-[4px]">
                  Year founded: <span class="text-black">{{memo.year_founded}}</span>
                </div>
                <div class="bg-faintGrey text-greyText text-[14px] leading-[20px] py-[6px] px-[12px] max-w-[max-content] min-w-[122.59px] mr-3 mb-3 rounded-[4px]">
                  Industry: <span class="text-black">{{memo.industry_type}}</span>
                </div>
                <div class="bg-faintGrey text-greyText text-[14px] leading-[20px] py-[6px] px-[12px] max-w-[max-content] min-w-[122.59px] mr-3 mb-3 rounded-[4px]">
                  Business model: <span class="text-black">{{memo.business_model}}</span>
                </div>
                <div class="bg-faintGrey text-greyText text-[14px] leading-[20px] py-[6px] px-[12px] max-w-[max-content] min-w-[122.59px] mr-3 mb-3 rounded-[4px]">
                  No of employees: <span class="text-black"> {{memo.num_employees}}</span>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="pt-6">
            <h3 class="font-[500] text-[16px] leading-[24px] mb-3">Company Overview</h3>
            <p class="text-[14px] leading-[26px] text-greyText">{{ memo.company_summary }}</p>
          </div>
        </div>

        <div class="relative">
          <div class="bg-white rounded-[4px] p-8 mt-8">
            <div class="relative">
              <div id="team" class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Team
              </div>
              <ul class="mb-6 list-disc ml-4 text-greyText text-[14px]">
                <li v-for="(member, id) in memo.team" :key="id">{{member.name}} - {{member.role}}</li>
              </ul>
            </div>
            <div class="relative mb-12">
              <div class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Market Opportunity
              </div>
              <p class="mb-6 text-greyText text-[14px] px-2">
                {{memo.market_opportunity}}
              </p>
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  v-for="(file, index) in memo.market_opportunity_docs"
                  :key="index"
                  class="relative h-[170px] bg-faintGrey rounded border box-shadow">
                  <div class="flex justify-center mt-3">
                    <a v-if="Helpers.getFileExtension(file.file_name)"
                      class="cursor-pointer"
                      :href="`https://view.officeapps.live.com/op/view.aspx?src=${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                    <a v-else
                      class="cursor-pointer"
                      :href="`${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                  </div>
                  <div class="flex items-center h-[70px] w-full bg-white absolute bottom-0">
                    <div class="ml-4">
                      <h3 class="text-[14px] text-black leading-[16.59px] font-medium font-Rubik mb-2">{{ file.file_name }}</h3>
                      <p class="text-[13px] text-greyText leading-[15.41px] font-Rubik">{{getDate(file.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mb-12">
              <div id="customer_pricing" class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Customer & Pricing
              </div>
              <p class="mb-6 text-greyText text-[14px] px-2">
                {{memo.customer_and_pricing}}
              </p>
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  v-for="(file, index) in memo.customer_and_pricing_docs"
                  :key="index"
                  class="relative h-[170px] bg-faintGrey rounded border box-shadow">
                  <div class="flex justify-center mt-3">
                    <a v-if="Helpers.getFileExtension(file.file_name)"
                      class="cursor-pointer"
                      :href="`https://view.officeapps.live.com/op/view.aspx?src=${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                    <a v-else
                      class="cursor-pointer"
                      :href="`${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                  </div>
                  <div class="flex items-center h-[70px] w-full bg-white absolute bottom-0">
                    <div class="ml-4">
                      <h3 class="text-[14px] text-black leading-[16.59px] font-medium font-Rubik mb-2">{{ file.file_name }}</h3>
                      <p class="text-[13px] text-greyText leading-[15.41px] font-Rubik">{{getDate(file.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-12 relative">
              <div id="product" class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Product
              </div>
              <p class="mb-6 text-greyText text-[14px] px-2">
                {{memo.product}}
              </p>
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  v-for="(file, index) in memo.product_docs"
                  :key="index"
                  class="relative h-[170px] bg-faintGrey rounded border box-shadow">
                  <div class="flex justify-center mt-3">
                    <a v-if="Helpers.getFileExtension(file.file_name)"
                      class="cursor-pointer"
                      :href="`https://view.officeapps.live.com/op/view.aspx?src=${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                    <a v-else
                      class="cursor-pointer"
                      :href="`${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                  </div>
                  <div class="flex items-center h-[70px] w-full bg-white absolute bottom-0">
                    <div class="ml-4">
                      <h3 class="text-[14px] text-black leading-[16.59px] font-medium font-Rubik mb-2">{{ file.file_name }}</h3>
                      <p class="text-[13px] text-greyText leading-[15.41px] font-Rubik">{{getDate(file.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mb-12">
              <div id="customers_cquisition_retention" class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Customers Acquisition & Retention
              </div>
              <p class="mb-6 text-greyText text-[14px] px-2">
                {{memo.acquisition_and_retention}}
              </p>
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  v-for="(file, index) in memo.acquisition_and_retention_docs"
                  :key="index"
                  class="relative h-[170px] bg-faintGrey rounded border box-shadow">
                  <div class="flex justify-center mt-3">
                    <a v-if="Helpers.getFileExtension(file.file_name)"
                      class="cursor-pointer"
                      :href="`https://view.officeapps.live.com/op/view.aspx?src=${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                    <a v-else
                      class="cursor-pointer"
                      :href="`${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                  </div>
                  <div class="flex items-center h-[70px] w-full bg-white absolute bottom-0">
                    <div class="ml-4">
                      <h3 class="text-[14px] text-black leading-[16.59px] font-medium font-Rubik mb-2">{{ file.file_name }}</h3>
                      <p class="text-[13px] text-greyText leading-[15.41px] font-Rubik">{{getDate(file.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mb-12">
              <div id="summary_financial" class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Summary Financials
              </div>
              <p class="mb-6 text-greyText text-[14px] px-2">
                {{memo.summary_financials}}
              </p>
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  v-for="(file, index) in memo.summary_financials_docs"
                  :key="index"
                  class="relative h-[170px] bg-faintGrey rounded border box-shadow">
                  <div class="flex justify-center mt-3">
                    <a v-if="Helpers.getFileExtension(file.file_name)"
                      class="cursor-pointer"
                      :href="`https://view.officeapps.live.com/op/view.aspx?src=${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                    <a v-else
                      class="cursor-pointer"
                      :href="`${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                  </div>
                  <div class="flex items-center h-[70px] w-full bg-white absolute bottom-0">
                    <div class="ml-4">
                      <h3 class="text-[14px] text-black leading-[16.59px] font-medium font-Rubik mb-2">{{ file.file_name }}</h3>
                      <p class="text-[13px] text-greyText leading-[15.41px] font-Rubik">{{getDate(file.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mb-12">
              <div id="deal" class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Deal
              </div>
              <p class="mb-6 text-greyText text-[14px] px-2">
                {{memo.deal}}
              </p>
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  v-for="(file, index) in memo.deal_docs"
                  :key="index"
                  class="relative h-[170px] bg-faintGrey rounded border box-shadow">
                  <div class="flex justify-center mt-3">
                    <a v-if="Helpers.getFileExtension(file.file_name)"
                      class="cursor-pointer"
                      :href="`https://view.officeapps.live.com/op/view.aspx?src=${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                    <a v-else
                      class="cursor-pointer"
                      :href="`${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                  </div>
                  <div class="flex items-center h-[70px] w-full bg-white absolute bottom-0">
                    <div class="ml-4">
                      <h3 class="text-[14px] text-black leading-[16.59px] font-medium font-Rubik mb-2">{{ file.file_name }}</h3>
                      <p class="text-[13px] text-greyText leading-[15.41px] font-Rubik">{{getDate(file.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mb-12">
              <div id="outcomes_analysis" class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Outcomes Analysis
              </div>
              <p class="mb-6 text-greyText text-[14px] px-2">
                {{memo.outcomes_analysis}}
              </p>
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  v-for="(file, index) in memo.outcomes_analysis_docs"
                  :key="index"
                  class="relative h-[170px] bg-faintGrey rounded border box-shadow">
                  <div class="flex justify-center mt-3">
                    <a v-if="Helpers.getFileExtension(file.file_name)"
                      class="cursor-pointer"
                      :href="`https://view.officeapps.live.com/op/view.aspx?src=${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                    <a v-else
                      class="cursor-pointer"
                      :href="`${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                  </div>
                  <div class="flex items-center h-[70px] w-full bg-white absolute bottom-0">
                    <div class="ml-4">
                      <h3 class="text-[14px] text-black leading-[16.59px] font-medium font-Rubik mb-2">{{ file.file_name }}</h3>
                      <p class="text-[13px] text-greyText leading-[15.41px] font-Rubik">{{getDate(file.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mb-12">
              <div id="conclusion" class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Conclusion
              </div>
              <p class="mb-6 text-greyText text-[14px] px-2">
                {{memo.conclusion}}
              </p>
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  v-for="(file, index) in memo.conclusion_docs"
                  :key="index"
                  class="relative h-[170px] bg-faintGrey rounded border box-shadow">
                  <div class="flex justify-center mt-3">
                    <a v-if="Helpers.getFileExtension(file.file_name)"
                      class="cursor-pointer"
                      :href="`https://view.officeapps.live.com/op/view.aspx?src=${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                    <a v-else
                      class="cursor-pointer"
                      :href="`${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                  </div>
                  <div class="flex items-center h-[70px] w-full bg-white absolute bottom-0">
                    <div class="ml-4">
                      <h3 class="text-[14px] text-black leading-[16.59px] font-medium font-Rubik mb-2">{{ file.file_name }}</h3>
                      <p class="text-[13px] text-greyText leading-[15.41px] font-Rubik">{{getDate(file.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative mb-12">
              <div id="appendix" class="bg-faintGrey px-4 py-[6px] text-[16px] font-[500] leading-[24px] rounded-[4px] mb-[8px]">
                Appendix
              </div>
              <p class="mb-6 text-greyText text-[14px] px-2">
                {{memo.appendix}}
              </p>
              <div class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div
                  v-for="(file, index) in memo.appendix_docs"
                  :key="index"
                  class="relative h-[170px] bg-faintGrey rounded border box-shadow">
                  <div class="flex justify-center mt-3">
                    <a v-if="Helpers.getFileExtension(file.file_name)"
                      class="cursor-pointer"
                      :href="`https://view.officeapps.live.com/op/view.aspx?src=${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                    <a v-else
                      class="cursor-pointer"
                      :href="`${s3Bucket}${file.file_name}`"
                      :download="`${file.file_name}`"
                      target="_blank"
                    >
                      <img class="w-10 h-10" :src="require(`../assets/files/${Helpers.getFileIcon(file.mime_type)}.png`)"/>
                    </a>
                  </div>
                  <div class="flex items-center h-[70px] w-full bg-white absolute bottom-0">
                    <div class="ml-4">
                      <h3 class="text-[14px] text-black leading-[16.59px] font-medium font-Rubik mb-2">{{ file.file_name }}</h3>
                      <p class="text-[13px] text-greyText leading-[15.41px] font-Rubik">{{getDate(file.created_at)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useRoute } from 'vue-router'
import Helpers from '@/utils/helpers'
import MemoService from '@/services/memo.service'
import LayoutHome from '@/components/LayoutHome.vue'
import { ref } from 'vue'
export default {
  name: 'HomeView',
  components: {
    LayoutHome
  },
  methods: {
    toggleNavigation () {
      this.showNavigation = !this.showNavigation
    }
  },
  setup () {
    const route = useRoute()
    const memo = ref({})
    const dataloaded = ref(false)
    const error = ref(false)
    const errorMessage = ref(null)
    const s3Bucket = process.env.VUE_APP_ORIGINS_S3_BUCKET
    const fetchMemo = async () => {
      const id = route.params.id
      try {
        const response = await MemoService.getMemobySlug(id)
        if (response.status === 200 && response.data.status === 'success') {
          dataloaded.value = true
          console.log(response.data.data)
          memo.value = response.data.data
          return response.data.data
        }
      } catch (e) {
        dataloaded.value = false
        error.value = true
        errorMessage.value = e.response.data.message
        console.log(e.response)
      }
    }
    const getDate = (created) => {
      const date = new Date(created.split('T')[0])
      return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
    }
    fetchMemo()
    return {
      memo,
      s3Bucket,
      Helpers,
      getDate,
      dataloaded,
      error,
      showNavigation: false
    }
  }
}

</script>

<style scoped>

  .nav-bar {
    position: fixed;
    top: 0;
    left: -100%; /* Initially hidden on the left */
    width: 300px; /* Width of the navigation bar */
    height: 100%;
    background-color: #fff; /* Background color of the navigation bar */
    transition: left 0.3s ease; /* Adding transition effect */
  }

 p {
 white-space: p-wrap;       /* Since CSS 2.1 */
 white-space: -moz-p-wrap;  /* Mozilla, since 1999 */
 white-space: -p-wrap;      /* Opera 4-6 */
 white-space: -o-p-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
 font-size: inherit;
 border: initial;
 padding: initial;
 font-family: inherit;
}
</style>
