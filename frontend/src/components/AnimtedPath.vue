<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

interface Props {
	speed?: number
	easing?: string
	autoplay?: boolean
	replay?: boolean
	equalDuration?: boolean
	startHidden?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	speed: 10,
	easing: 'linear',
	autoplay: true,
	replay: false,
	equalDuration: false,
	startHidden: true,
})

const containerRef = ref<HTMLElement | null>(null)

async function initializePaths() {
	await nextTick()

	if (!containerRef.value) return

	const paths =
		containerRef.value.querySelectorAll<SVGPathElement>('path')

	paths.forEach((path) => {
		const length = path.getTotalLength()

		path.style.transition = 'none'
		path.style.strokeDasharray = `${length}`

		if (props.startHidden) {
			path.style.strokeDashoffset = `${length}`
		}
	})
}

async function animatePaths() {
	await nextTick()

	if (!containerRef.value) return

	const paths =
		containerRef.value.querySelectorAll<SVGPathElement>('path')

	let delay = 0

	paths.forEach((path) => {
		const length = path.getTotalLength()

		const duration = props.equalDuration
			? props.speed
			: length * props.speed

		path.getBoundingClientRect()

		path.style.transition = `
			stroke-dashoffset ${duration}ms ${props.easing}
			${delay}ms
		`

		path.style.strokeDashoffset = '0'

		delay += duration
	})
}

onMounted(async () => {
	await initializePaths()

	if (props.autoplay) {
		animatePaths()
	}
})

watch(
	() => props.replay,
	() => {
		animatePaths()
	},
)

defineExpose({
	animate: animatePaths,
})
</script>

<template>
	<div ref="containerRef">
		<slot />
	</div>
</template>
