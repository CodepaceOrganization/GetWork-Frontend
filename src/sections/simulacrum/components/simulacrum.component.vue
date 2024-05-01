<script >

export default {
  name: "section-simulacrum"
}

</script>

<template>
  <div class="section-simulacrum">
  <img src="/src/assets/images/simulacrum-image.png" alt="simulacrum">
  <p>Simulacrum of interviews</p>
  <pv-button label="Empezar" class="btn_empezar"/>
  <ol start="1" class="list-simulacrum">
    <li>Encuentra un lugar tranquilo y sin distracciones para concentrarte.</li>
    <li>Asegúrate de tener suficiente tiempo sin interrupciones.</li>
    <li>Ten a mano <to></to>do el material técnico necesario.</li>
    <li>Mantén una actitud positiva y de confianza.</li>
    <li>Lee cuidadosamente todas las instrucciones antes de comenzar cada ejercicio.</li>
    <li>Utiliza tu tiempo sabiamente y gestiona los límites de tiempo si los hay.</li>
    <li>Realiza pruebas previas de conexión si es una entrevista remota.</li>
    <li>Practica la comunicación clara y concisa.</li>
    <li>Acepta desafíos como oportunidades para aprender.</li>
    <li>Reflexiona sobre tu desempeño después del simulacro.</li>
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