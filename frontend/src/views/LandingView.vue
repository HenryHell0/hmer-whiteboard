<script setup lang="ts">

function preloadEditor() {
	import('@/views/EditorView.vue')
}
</script>
<template>
	<div class="template">this is the main vue (get it)</div>
	<RouterLink to="editor" @mouseenter="preloadEditor"> click me</RouterLink>
</template>
<style lang="css" scoped></style>
