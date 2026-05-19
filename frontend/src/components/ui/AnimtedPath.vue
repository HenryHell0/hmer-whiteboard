<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

interface Props {
	/**
	 * ms per path OR ms per unit length
	 */
	speed?: number

	easing?: string

	autoplay?: boolean

	replay?: boolean

	/**
	 * if true:
	 * every path takes the same duration
	 */
	equalDuration?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	speed: 10,
	easing: 'linear',
	autoplay: true,
	replay: false,
	equalDuration: false,
})

const containerRef = ref<HTMLElement | null>(null)

async function animatePaths() {
	await nextTick()

	if (!containerRef.value) return

	const paths = containerRef.value.querySelectorAll<SVGPathElement>('path')

	let delay = 0

	paths.forEach((path) => {
		const length = path.getTotalLength()

		path.style.transition = 'none'
		path.style.strokeDasharray = `${length}`
		path.style.strokeDashoffset = `${length}`

		path.getBoundingClientRect()

		const duration = props.equalDuration ? props.speed : length * props.speed

		path.style.transition = `
      stroke-dashoffset ${duration}ms ${props.easing}
      ${delay}ms
    `

		path.style.strokeDashoffset = '0'

		delay += duration
	})
}

onMounted(() => {
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
