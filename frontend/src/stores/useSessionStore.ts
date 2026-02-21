import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { ToolName } from '@/utils/drawingTools.js'
import type { Path } from './useCanvasStore'
import { strokeToPath } from '@/utils/svgCanvasUtils'

interface Position {
	x: number
	y: number
}

type InputModeName = 'idle' | 'drawing' | 'widget' | 'feedback' // eventually this will be "dialog" not feedback ...

export const useSessionStore = defineStore('session', () => {
	const currentStroke = ref<Position[]>([])
	const currentPath = computed<string>(() => strokeToPath(currentStroke.value))


	const previousMousePos = { x: -1, y: -1 }

	const activeTool = ref<ToolName>('pen')
	const inputMode = ref<InputModeName>('idle')

	const heldWidgetId = ref<string>('')
	const undos = ref<Path[]>([])



	return { currentStroke, currentPath, previousMousePos, activeTool, inputMode, heldWidgetId, undos }
})
