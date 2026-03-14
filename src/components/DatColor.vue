<script setup lang="ts">
import { ColorPicker } from "vue3-colorpicker"
import "vue3-colorpicker/style.css"
interface Props {
  label?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  disabled: false,
})

const color = defineModel({ type: String, required: true })



</script>

<template>

  <li class="control-item color">
    <label>
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <ColorPicker v-model:pureColor="color" showPicker="false" pickerType="chrome" !isWidget
          disable-history />

      </div>
    </label>
  </li>
</template>

<style lang="css" scoped></style>
