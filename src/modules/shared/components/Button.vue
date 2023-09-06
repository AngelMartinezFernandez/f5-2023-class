<template>
  <button :class="['button', getButtonStyle]">{{title}}</button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps( {
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'action'
  }
} )

const buttonStyles = {
  action: 'button-action',
  confirm: 'button-confirm',
  cancel: 'button-cancel',
}

const getButtonStyle = computed(() => {
  return buttonStyles[props.type]
})

</script>

<style scoped>
.button {
  background-position: center; /* animation */
  box-sizing: border-box;
  border-radius: 5px;
  margin: 0 2em;
  padding: 0 1em;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.button-confirm {
  color: #212241;
  background-color: #28E843;
  background-size: 100%;
}
.button-action {
  color: white;
  background-color: #212241;
  background-size: 100%;
}
.button-cancel {
  color: white;
  background-color: #de0e0e;
  background-size: 100%;
}
</style>
