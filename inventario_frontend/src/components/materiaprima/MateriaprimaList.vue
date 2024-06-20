<script setup lang="ts">
import type { Materiaprima } from '@/models/materiaprima'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var materiaprimas = ref<Materiaprima[]>([])

async function getMateriaprimas() {
  materiaprimas.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/materiaprimas/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la Materia Prima?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getMateriaprimas())
  }
}

onMounted(() => {
  getMateriaprimas()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Materiaprimas</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Materias Primas</h2>
      <div class="col-12">
        <RouterLink to="/materiaprimas/crear">Crear Nuevo</RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Unidad Medida</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(materiaprima, index) in materiaprimas.values()" :key="materiaprima.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ materiaprima.nombre }}</td>
            <td>{{ materiaprima.descripcion }}</td>
            <td>{{ materiaprima.unidadMedida }}</td>
            <td>{{ materiaprima.precioUnitario }}</td>

            <td>
              <button class="btn btn-link" @click="toEdit(materiaprima.id)">Editar</button>
              <button class="btn btn-link" @click="toDelete(materiaprima.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
