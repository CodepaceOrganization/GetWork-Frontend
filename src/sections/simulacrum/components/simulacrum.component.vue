<script >

export default {
  name: "section-simulacrum"
}

</script>

<template>
  <div class="section-simulacrum">
  <img src="/src/assets/images/simulacrum-image.png" alt="simulacrum">
  <p>{{ $t('simulacrum.title') }}</p>
  <pv-button :label="$t('simulacrum.button')" class="btn_empezar"/>
  <ol start="1" class="list-simulacrum">
    <li>{{ $t('simulacrum.l1') }}</li>
    <li>{{ $t('simulacrum.l2') }}</li>
    <li>{{ $t('simulacrum.l3') }}</li>
    <li>{{ $t('simulacrum.l4') }}</li>
    <li>{{ $t('simulacrum.l5') }}</li>
    <li>{{ $t('simulacrum.l6') }}</li>
    <li>{{ $t('simulacrum.l7') }}</li>
    <li>{{ $t('simulacrum.l8') }}</li>
    <li>{{ $t('simulacrum.l9') }}</li>
    <li>{{ $t('simulacrum.l10') }}</li>
    <li>{{ $t('simulacrum.l11') }}</li>
  </ol>
  </div>
</template>

<style scoped>

.section-simulacrum{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #E4E4E4;
}

.btn_empezar{
  background-color: #BD3F57;
  color: white;
  padding: 1rem 3rem;
  border-radius: 14px;
  font-size: 4.5vh;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.btn_empezar:hover{
  background-color: #6f6162;
  padding: 1rem 3rem;
  border-radius: 14px;
  font-size: 4.5vh;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.list-simulacrum{
  font-weight: bold;
  font-size: 20px;
}

p{
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

</style>