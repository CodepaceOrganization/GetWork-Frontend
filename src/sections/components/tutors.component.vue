<script >
export default {
  name: 'section-tutors',
}
</script>

<template>

  <pv-card class="pv-card" >
      <template #header>
        <img alt="user-header" class="image" src="/src/assets/images/javier_montoya.png" />
      </template>
      <template #title>Javier Montoya</template>
      <template #content>
        <p class="m-0">
          Experimentado tutor de programación con habilidades en múltiples lenguajes como Java, Python y JavaScript. Es conocido por su enfoque práctico y su capacidad para explicar conceptos complejos de manera clara y accesible.
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <pv-button label="Reservar" class="btn_reservar" />
        </div>
      </template>
    </pv-card>

</template>

<style scoped>
.pv-card {
  width: 20rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.image {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.btn_reservar{
  background-color: #BD3F57;
  color: white;
  padding: 0.5rem 1.6rem;
  border-radius: 14px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}


</style>

