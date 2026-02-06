<script setup lang="ts">
import { useSessionStore } from '@/stores/useSessionStore'
import { toolList } from '@/utils/drawingTools'
import ToolbarSection from './ToolbarSection.vue'
const sessionStore = useSessionStore()

// make elemnt transparent when drawing over it

</script>
<template>
	<div ref="element" class="toolbar-container">
		<!-- future left one -->
		<!-- <ToolbarSection style="display: hidden"> </ToolbarSection> -->

		<!-- ========== DRAWING TOOLS ============= -->
		<!-- later we will have this be its own little thing and add undo/redo and pan tools -->

		<ToolbarSection class="center-toolbar">
			<button
				v-for="tool in toolList"
				:key="tool"
				@click="sessionStore.activeTool = tool"
				:class="{ active: sessionStore.activeTool === tool }"
			>
				<img :src="`./assets/${tool}.svg`" draggable="false" />
			</button>
		</ToolbarSection>

		<ToolbarSection>
			<button @click="sessionStore.inputMode = 'feedback'" class="toolbar-button">
				<img :src="`./assets/feedback.svg`" draggable="false" />
			</button>
		</ToolbarSection>
	</div>
</template>
<style scoped>
.toolbar-container {
	width: 100%;
	display: flex;
	flex-direction: row;

	align-items: center;
	justify-content: space-between;
}

.center-toolbar {
	margin: 0 auto;
}

img {
	width: 1.5em;
	height: 1.5em;
	fill: black;
	transition: rotate 0.2s ease;
	transform: scale(1.2);
}

button {
	all: unset;
	padding: 8px 10px;
	border-radius: 10000px;
	border: none;
	/* background-color: #eee; */
	cursor: pointer;
	user-select: none;
	transition:
		transform 0.15s ease,
		background 0.3s ease;
}

button:hover {
	transform: scale(1.1);
	background: rgb(226, 226, 226);
}

button.active {
	background-color: #c0c0c0;
	transform: scale(1.1);
}

button.active:hover {
	background-color: #c0c0c0;
	transform: scale(1.2);
}
</style>
