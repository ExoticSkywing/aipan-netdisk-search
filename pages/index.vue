<script setup>
import { useDoubanStore } from "~/stores/douban";
import { badWords } from "~/utils/sensitiveWords";

definePageMeta({
  layout: 'custom',
})
const doubanStore = useDoubanStore()
const searchKeyword = ref('')
const router = useRouter()
const doubanCache = useCookie('doubanCache', {
  maxAge: 60 * 60 * 24
})

const search = (keyword) => {
  if (badWords.includes(keyword)) {
    return alert('请勿输入敏感词')
  }
  router.push({ path: '/search', query: { keyword: encodeURIComponent(keyword) } })
}
const donate = () => {
  router.push({ path: '/donate' })
}
const hotKeywords = ref(['庆余年', '歌手2024', '我的阿勒泰', '新生', '周处除三害', '热辣滚烫', '第二十条', '承欢记', '哈哈哈哈哈'])
const doubanData = ref([])

watch(doubanData, (newValue, oldValue) => {
  doubanData.value = newValue
})

const colorMode = useColorMode()

const goDouban = (movie) => {
  // window.open(movie.url, '_blank')
  router.push({ path: '/search', query: { keyword: encodeURIComponent(movie.title) } })
}

onMounted(async () => {
  if (doubanCache.value === 'exist') {
    doubanData.value = doubanStore.doubanData
  } else {
    await doubanStore.getDoubanData()
    doubanData.value = doubanStore.doubanData
    doubanCache.value = 'exist'
  }
})
</script>

<template>
  <div class="bg-[#ffffff] dark:bg-gray-800  min-h-screen py-[60px]">
    <div class="max-w-[1240px] mx-auto flex flex-row items-center justify-between px-[20px]">
      <client-only>
        <div>

        </div>
        <div class="flex flex-row items-center gap-2">
          <el-button v-if="colorMode.preference === 'dark'" link @click="colorMode.preference = 'light'">
            <img class="w-[20px] h-[20px]" src="@/assets/theme/entypo--light-up.svg" alt="">
          </el-button>
          <el-button v-if="colorMode.preference === 'light'" link @click="colorMode.preference = 'dark'">
            <img class="w-[20px] h-[20px]" src="@/assets/theme/icon-park-solid--dark-mode.svg" alt="">
          </el-button>

          <nuxt-link class="text-sm text-slate-600 font-bold dark:text-white" href="/music" title="音乐搜索小助手">
            <img v-if="colorMode.preference === 'light'" class="w-[20px] h-[20px]" src="@/assets/theme/music-dark.svg"
              alt="">
            <img v-if="colorMode.preference === 'dark'" class="w-[20px] h-[20px]" src="@/assets/theme/music-light.svg"
              alt="">
          </nuxt-link>
        </div>
      </client-only>
    </div>
    <div class="flex flex-row items-center justify-center gap-3 mt-[80px]">
      <img class="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]" src="@/assets/my-logo.webp" alt="logo">
      <h1 class="text-[18px] sm:text-[22px] font-serif font-bold dark:text-white ">追剧自由-浪漫宇宙系</h1>
    </div>
    <div class="max-w-[1240px] mx-auto mt-[20px]">
      <div class="w-[80%] md:w-[700px] mx-auto">
        <client-only>
          <el-input v-model="searchKeyword" placeholder="请输入关键词搜索" @keydown.enter="search(searchKeyword)"
            prefix-icon="Search" size="large" input-style=" height: 48px;" clearable>
          </el-input>
        </client-only>
      </div>
    </div>
    <div class="mx-5 xl:max-w-[1200px] xl:mx-auto mt-[50px]" v-if="doubanData.length > 0">
      <h1 class="text-[12px] sm:text-sm text-slate-600 font-bold dark:text-white mt-[20px]">豆瓣热门影视榜单</h1>
      <div class="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-8  gap-3  mt-[10px]">
        <div
          class="mx-1 cursor-pointer truncate text-xs font-bold dark:bg-slate-700 dark:text-slate-100 rounded-[5px] p-2"
          v-for="(movie, index) in doubanData" :key="index" type="info" @click="goDouban(movie)">
          <img class="w-full h-[180px] lg:h-[220px] xl:h-[161px] rounded-[5px] object-cover"
            :src="'https://images.weserv.nl/?url=' + movie.cover" alt="" referrerpolicy="never">
          <p class="mt-1  text-center truncate">
            {{ movie.title }}
            {{ movie.rate }}
          </p>
        </div>
      </div>
    </div>

    <div class="p-4">               
      <div class="flex flex-row items-center justify-center  gap-3 my-3">
        <a class="" href="https://lmyz.noxox.cn">
          <img class="w-[30px] h-[30px]" src="https://img.1yo.cc/i/2024/07/08/668bdf0c210f0.webp" alt="github">
        </a>
        <a class="" href="https://t.me/+D833AK_gBgI3YWQx">
          <img class="w-[30px] h-[30px]" src="@/assets/donation/twitter-x-fill.svg" alt="群组">
        </a>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-xs sm:text-sm text-gray-300 mb-2">
            声明：本站内容皆来自网络公开资源。本站不储存、复制、传播任何文件，不做任何盈利，仅作个人公益学习，请勿非法&商业传播，如有侵权，请及时
            <a class="text-blue-400 hover:underline" href="mailto:nebuluxe@1yo.cc" title="点击留言"> 留言 </a> 告知删除。
        </p>
        <p class="text-xs sm:text-sm text-gray-400">
            不再当韭菜，影视资源随心看📽️
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-input__wrapper.is-focus) {
  --el-input-focus-border-color: #6648ff;
}
</style>