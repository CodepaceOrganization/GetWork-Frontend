<script>
export default {
  name: "ranking-content.component"
}
</script>

<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Página Web</title>

  </head>
  <body>

  <div class="global-ranking">
    <div class="sidebar">
      <img src="avatar1.jpg" class="avatar" alt="Avatar 1">
      <img src="avatar2.jpg" class="avatar" alt="Avatar 2">
      <!-- Añade más imágenes según sea necesario -->
    </div>
    <div class="ranking-content">
      <h2>Global Ranking</h2>
      <ol id="ranking-list">
        <!-- Los elementos del ranking se añadirán dinámicamente aquí -->
      </ol>
    </div>
  </div>

  <script src="script.js"></script>

  </body>
  </html>
</template>

<style scoped>

.sidebar {
  float: left;
  margin-right: 20px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}

</style>