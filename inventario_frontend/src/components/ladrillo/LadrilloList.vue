<script setup lang="ts">
import type { Ladrillo } from '@/models/ladrillo'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var ladrillos = ref<Ladrillo[]>([])

async function getLadrillos() {
  ladrillos.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/ladrillos/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Ladrillo?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getLadrillos())
  }
}

onMounted(() => {
  getLadrillos()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Ladrillos</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Ladrillos</h2>
      <div class="col-12">
        <RouterLink to="/ladrillos/crear">Crear Nuevo</RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Tipo</th>
            <th scope="col">Dimension</th>
            <th scope="col">Peso</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Stock</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ladrillo, index) in ladrillos.values()" :key="ladrillo.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ ladrillo.tipo }}</td>
            <td>{{ ladrillo.dimension }}</td>
            <td>{{ ladrillo.peso }}</td>
            <td>{{ ladrillo.precioUnitario }}</td>
            <td>{{ ladrillo.descripcion }}</td>
            <td>{{ ladrillo.stock }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(ladrillo.id)">Editar</button>
              <button class="btn btn-link" @click="toDelete(ladrillo.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
