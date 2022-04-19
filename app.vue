<template>
  <div>
    <cat-image-gallery :images="images" />
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()

const { data: images } = await useAsyncData('images', async () => client.from('images').select('*').order('created_at'), { transform: result => result.body })
</script>