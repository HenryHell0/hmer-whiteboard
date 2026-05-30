import { type RouteRecordRaw } from 'vue-router'

// todo add features and intro dialog too
import InfoDialog from '@/views/editor/dialogs/EditorInfoDialog.vue'
import FeedbackDialog from '@/views/editor/dialogs/EditorFeedbackDialog.vue'
import LandingView from '@/views/LandingView.vue'
export const loadAsyncEditorView = () => import('@/views/editor/EditorView.vue')

// alright so the way this works is the whole app is `App.vue` with a <RouteView> but we can make different routes now!
// rn the main one is / pointing to Whiteboard.vue, and then it has /info and /feedback, so it uses it's own <RouteView> component for children
// but, we could add /store, /info seperately, etc!, and it just swaps out <RouteView> for that component!
// it's like a component registry swapper-outer thingy pretty much... but also you can do it like a tree! 🌳'
// fyi this is it's own folder for organization and if things get complex it could be routes/index, routes/whiteboard, routes/docs, etc. if there are lots of children :)

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: "landing",
		component: LandingView
	},
	{
		path: '/editor',
		component: loadAsyncEditorView,
				// component: EditorView,

		children: [
			{
				path: '',
				name: 'editor', // these need to be GLOABALLY SPECIFIC! (once we have multiple pages -> "whiteboard:home")
				component: { template: '<div />' }, // hacky empty component
			},
			{
				path: 'info',
				name: 'editor:info',
				component: InfoDialog,
			},
			{
				path: 'feedback',
				name: 'editor:feedback',
				component: FeedbackDialog,
			},
		],
	},



	// future other paths!
	// {
	// 	path: '/store',
	// 	component: () => import('@/views/StorePage.vue'),
	// },
]
