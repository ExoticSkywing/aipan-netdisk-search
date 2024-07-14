<template>
  <el-affix>
    <div class="shadow px-[20px] py-[10px]">
      <div class="max-w-[1240px] mx-auto h-[40px]  flex flex-row items-center justify-between">
        <div class="flex flex-row items-center justify-center gap-1">
          <img  class="w-[40px] h-[40px] cursor-pointer" src="@/assets/my-logo.webp" alt="logo" @click="goHome()">
          <h1 class="text-[14px] font-serif font-bold cursor-pointer" @click="goHome()">追剧自由-浪漫宇宙系</h1>
        </div>
      </div>
    </div>
  </el-affix>
</template>

<script setup>

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style scoped>

</style>