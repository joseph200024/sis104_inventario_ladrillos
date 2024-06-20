<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const descripcion = ref('')
const unidadMedida = ref('')
const precioUnitario = ref('')

async function crearMateriaprima() {
  await http
    .post(ENDPOINT, {
      nombre: nombre.value,
      descripcion: descripcion.value,
      unidadMedida: unidadMedida.value,
      precioUnitario: precioUnitario.value
    })
    .then(() => router.push('/materiaprimas'))
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
          <RouterLink to="/materiaprimas">Materiaprimas</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Materiaprima</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearMateriaprima">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
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
          <input
            type="text"
            class="form-control"
            v-model="unidadMedida"
            placeholder="Unidad Medida"
            required
          />
          <label for="unidadMedida">Unidad Medida</label>
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
