<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const puesto = ref('')
const gmail = ref('')
const telefono = ref('')
const salario = ref('')
const fechaContratacion = ref('')

async function crearEmpleado() {
  await http
    .post(ENDPOINT, {
      nombre: nombre.value,
      puesto: puesto.value,
      gmail: gmail.value,
      telefono: parseInt(telefono.value),
      salario: parseInt(salario.value),
      fechaContratacion: fechaContratacion.value ? new Date(fechaContratacion.value) : null
    })
    .then(() => router.push('/empleados'))
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
          <RouterLink to="/empleados">Empleados</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Empleado</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearEmpleado">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="puesto" placeholder="Puesto" required />
          <label for="puesto">Puesto</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="gmail" placeholder="Gmail" required />
          <label for="gmail">Gmail</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="telefono"
            placeholder="Telefono"
            required
          />
          <label for="telefono">Telefono</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="salario"
            placeholder="Salario"
            required
          />
          <label for="salario">Salario</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="fechaContratacion"
            placeholder="Fecha Contratacion"
            required
          />
          <label for="fechaContratacion">Fecha Contratacion</label>
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
