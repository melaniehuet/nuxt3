<template>
    <div>
        <p>{{ $t('welcome') }}</p>
    </div>
  </template>
  
  
  <script setup>
  const route = useRoute()
  const { locale } = useI18n()
  const router = useRouter();
  console.log(route, locale, router.getRoutes())
  </script>
  