<template>
  <div class="w-full min-h-screen justify-center items-center flex">
    <NButton>
      Hello world!
    </NButton>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  requiresAuth: true,
})

const router = useRouter()
onMounted(() => router.push('/users'))
</script>
