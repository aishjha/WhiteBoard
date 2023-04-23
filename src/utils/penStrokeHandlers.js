import { boardState } from './boardState'

let path = []
export const start = (event) => {
    event.preventDefault()
    const { context } = boardState
    const { pageX, pageY } = event
    context.beginPath()
    context.moveTo(pageX, pageY)
    path.push({ x: pageX, y: pageY })
    boardState.drawing = true
}

export const draw = (event) => {
    event.preventDefault()
    const { context, color, size } = boardState
    const { pageX, pageY } = event

    if (!boardState.drawing) return
    
    context.strokeStyle = color
    context.lineWidth = size
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.lineTo(pageX, pageY)
    path.push({ x: pageX, y: pageY })
    context.stroke()
}

export const stop = (event) => {
    event.preventDefault()
    const { context } = boardState

    if (!boardState.drawing) return

    context.closePath()
    boardState.drawing = false
}
