<template>
  <div>
    {{ data }}
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()

const { data } = await useAsyncData('images', async () => client.from('images').select('*').order('created_at'), { transform: result => result.body })
</script>