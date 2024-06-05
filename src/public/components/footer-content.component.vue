<script>
export default {
  name:"footer-content",
}
</script>

<template>
  <div class="footer">
    <div class="copyright">
      <p>{{ $t('footer.copyright') }}</p>
    </div>
    <div>
      <p>{{ $t('footer.developed_by') }}</p>
    </div>
  </div>
</template>

<style scoped>
.footer{
  background-color: #BD3F57;
  color: #fff;
  text-align: center;
  padding: 1.2rem;
}
.copyright{
  padding-bottom: 1.5rem;
  font-weight: bold;
}
</style>