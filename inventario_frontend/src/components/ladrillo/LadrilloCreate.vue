<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const tipo = ref('')
const dimension = ref('')
const peso = ref('')
const precioUnitario = ref('')
const descripcion = ref('')
const stock = ref('')

async function crearLadrillo() {
  await http
    .post(ENDPOINT, {
      tipo: tipo.value,
      dimension: dimension.value,
      peso: peso.value,
      precioUnitario: precioUnitario.value,
      descripcion: descripcion.value,
      stock: parseInt(stock.value)
    })
    .then(() => router.push('/ladrillos'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/ladrillos">Ladrillos</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Ladrillo</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearLadrillo">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="tipo" placeholder="Tipo" required />
          <label for="tipo">Tipo</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="dimension"
            placeholder="Dimension"
            required
          />
          <label for="dimension">Dimension</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="peso" placeholder="Peso" required />
          <label for="peso">Peso</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="precioUnitario"
            placeholder="Precio Unitario"
            required
          />
          <label for="precioUnitario">Precio Unitario</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="descripcion"
            placeholder="Descripcion"
            required
          />
          <label for="descripcion">Descripcion</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="stock" placeholder="Stock" required />
          <label for="stock">Stock</label>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Crear</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
