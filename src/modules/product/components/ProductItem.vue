<template>
    <div class="product-card">
        <figure class="card-img">
            <!--      <img :src="image ? image : noImageSrc" :alt="title">
            EN ESTE CASO SE PONE EN EL SRC LA COMPROBACIÓN, PERO SE CONSIDERA PRÁCTICA POCO ELEGANTE METER LÓGICA AL TEMPLATE,
            POR LO QUE SACAMOS LA MISMA A UNA COMPUTED, QUEDA MAS LIMPIO Y SI SE NOMBRA CORRECTAMENTE MAS ENTENDIBLE-->
            <img :src="getImage" :alt="title">
        </figure>
        <div class="product-detail">
            <h5>{{ title }}</h5>
            <p>{{ description }}</p>
            <h3>{{ price }}€</h3>
            <!-- ToDo AQUI SE PODRIA PONER UN CONTADOR CON UN MAS Y UN MENOS Y QUE AL DARLE AL BOTÓN AÑADIR SE CONTROLE LA CANTIDAD-->
            <Button
                :title="'Añadir'"
                :type="'action'"
                @click="emitProduct"
            />
        </div>
    </div>
</template>

<script setup>
// COMPONENTE REUTILIZABLE, SE INTENTA NO PONER LÓGICA ESPECIFICA EN LOS COMPONENTES QUE SE QUIERAN REUTILIZAR
// AQUÍ LO BUENO ES QUE LLEGUEN LOS DATOS TRATADOS Y QUE SOLO PINTE
// TENER CSS Y PROPIEDADES COMPUTADAS SI HACEN FALTA NO ESTA MAL, COMO EL CASO DE LA IMAGEN PARA QUE PINTE UNA GENÉRICA SI NO RECIBE
// AUN ASI, SI SE PONE LÓGICA QUE NO TOCA PERO FUNCIONA ES LO QUE HAY, TIEMPO DE REFACTORIZAR Y APRENDER A HACERLO MEJOR SIEMPRE HAY.
import { computed } from 'vue'
import Button from '@/modules/global/components/Button.vue'

const props = defineProps( {
    id: {
        type: Number,
        default: null,
        // required: true
    },
    image: {
        type: String,
        default: null
    },
    noImage: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null,
        required: true
    },
    description: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: null,
        required: true
    }
} )
// UNA PROPIEDAD COMPUTADA ES A MI ENTENDER, UNA VARIABLE DINAMICA Y REACTIVA
// QUE SIGNIFICA ESTO, QUE CUANDO ALGO CAMBIA EN LA LOGICA QUE CONTIENE, ESTA ACTUALIZA SU VALOR AUTOMATICAMENTE
// AQUI EN getImage SI SE RECIBE UNA IMAGEN POR PROP TE DEVUELVE LA IMAGEN, EN CASO CONTRARIO DEVUELVE LA VARIABLE DE LA DATA
// SI EN CASO INICIAL NO SE RECIBE LA IMAGEN, PERO LUEGO NOSOTROS POR LA LOGICA QUE SEA, POR EJEMPLO HACEMOS QUE PULSANDO UN BOTON EN HOME,
// PASE UNA IMAGEN A PRODUCT, AUTOMANTICAMENTE getImage SE ACTUALIZARA Y DONDE PASABA  noImageSrc PASARA LA IMAGEN NUEVA
// A DIFERENCIA DE UNA VARIABLE NORMAL O UNA VARIABLE DECLARADA EN LA DATA QUE NO CAMBIARA HASTA QUE LE VOLVAMOS A ASIGNAR OTRO VALOR.

// computed properties
const getImage = computed( () => {
    return props.image ? props.image : props.noImage
} )

// emits
const emits = defineEmits( ['addProduct'] )

// methods
const emitProduct = () => {
    emits( 'addProduct', props.id )
}
</script>

<style scoped>
.product-card {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 7fr;
    border: 2px solid #2d2a4c;
    height: 13rem;
}

.product-detail {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.card-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13rem;
    width: 10rem;
    border-right: #2d2a4c solid 2px;
}

.card-img img {
    width: 100%;
    height: auto;
}

@supports (object-fit: cover) {
    .card-img img {
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
}
</style>
