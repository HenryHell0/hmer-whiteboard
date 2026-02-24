export interface Position {
	x: number
	y: number
}

export interface Path {
	d: string
	id: string
}

export type Action = PathAction

export interface PathAction {
  type: 'add' | 'remove'
  path: Path
}
