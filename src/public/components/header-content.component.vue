<script>
export default{
  name: "header-content"
}
</script>

<template>
  <div class="card">
    <pv-toolbar class="toolbar">
      <template #start>
      </template>
      <template #center>
        <h2>GetWork</h2>
      </template>
      <template #end>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.toolbar {
  background-color: #BD3F57;
  color: white;
  padding: 1rem;
}

.toolbar h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>