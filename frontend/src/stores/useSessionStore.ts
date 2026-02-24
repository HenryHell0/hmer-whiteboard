import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { ToolName } from '@/utils/drawingTools.js'
import type {  Action,  Position } from '@/types/types'
import { strokeToPath } from '@/utils/svgCanvasUtils'


type InputModeName = 'idle' | 'drawing' | 'widget' | 'feedback' // eventually this will be "dialog" not feedback ...

export const useSessionStore = defineStore('session', () => {
	const currentStroke = ref<Position[]>([])
	const currentPath = computed<string>(() => strokeToPath(currentStroke.value))


	const previousMousePos = ref<Position>({ x: -1, y: -1 })

	const activeTool = ref<ToolName>('pen')
	const inputMode = ref<InputModeName>('idle')

	const heldWidgetId = ref<string>('')
	// eventually this will instead be history and undoneHistory or something like that I thiunk
	const undos = ref<Action[]>([])

	function updatePreviousMousePos(event: PointerEvent) {
		previousMousePos.value.x = event.clientX
		previousMousePos.value.y = event.clientY
	}

	return {
		currentStroke,
		currentPath,
		previousMousePos,
		activeTool,
		inputMode,
		heldWidgetId,
		undos,
		redos,
		updatePreviousMousePos,
	}
})
