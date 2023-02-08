const LIST_TYPES = {
	BACKLOG: 'backlog',
    READY: 'ready',
	IN_PROGRESS: 'inProgress',
	FINISHED: 'finished',
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
    [LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.FINISHED]: 'Finished',
}

// const LIST_COLORS = {
// 	[LIST_TYPES.BACKLOG]: '#b95959',
// 	[LIST_TYPES.IN_PROGRESS]: '#4b69b1',
//     [LIST_TYPES.READY]: "#FFA500",
// 	[LIST_TYPES.FINISHED]: '#a0b959',
// }

export { LIST_TYPES, LIST_COPY }