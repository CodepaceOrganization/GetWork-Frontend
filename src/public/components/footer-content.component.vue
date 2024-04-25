<script>
export default {
  name: "footer-content"
}
</script>

<template>
  <div class="grid bg-primary mt-4 p-4 align-content-start">
    <div class="col-12 ml-3 align-items-center justify-content-center">
      <p>Copyright &copy; 2024. ACME Studios</p>
    </div>
    {{ $t('authoring-phrase.intro') }}
    {{ $t('authoring-phrase.author') }}
  </div>
</template>