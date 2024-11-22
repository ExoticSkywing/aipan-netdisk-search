<script setup>

const router = useRouter()
const donate = () => {
  router.push({ path: '/donate' })
}
</script>
<template>
  <div class="bg-white py-4 dark:bg-slate-800 space-y-1">
    <div class="flex flex-row items-center justify-center  gap-3">
      <a class="" href="https://lmyz.1yo.cc">
        <img class="w-8 h-8" src="https://api.minio.ysl.monster/nebuluxe/halosparkpix/202311092002032.png" alt="Nebuluxe">
      </a>
      <a class="" href="https://t.me/nebuluxe">
        <img class="w-8 h-8" src="https://api.minio.ysl.monster/nebuluxe/halosparkpix/image-9miy.png" alt="频道/群组">
      </a>
    </div>
    <p class="text-center text-sm">© 2024 lmyz.1yo.cc 全息甲板 - 资源随心，娱乐无限</p>
    <p class="text-center text-sm">
      声明：本站内容皆来自网络公开资源。本站不储存、复制、传播任何文件，不做任何盈利，仅作个人公益学习，请勿非法&商业传播，如有侵权，请及时
      <a class="text-blue-500 underline" href="mailto:nebuluxe@1yo.cc" title="点击留言"> 留言 </a> 告知删除。
    </p>
  </div>
</template>
<style scoped></style>