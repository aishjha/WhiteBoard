import React, { useEffect, useRef } from 'react'
import Tools from '../components/Tools'
import './css/HomeScreen.css'
import { draw, start, stop } from '../utils/penStrokeHandlers'
import { boardState } from '../utils/boardState'

const HomeScreen = () => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    useEffect(() => {
        const resizeHandler = () => {
            const canvas = canvasRef.current
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            boardState.width = canvasRef.current.width
            boardState.height = canvasRef.current.height
        }

        resizeHandler()
        window.addEventListener('resize', resizeHandler)
        contextRef.current = canvasRef.current.getContext('2d')
        boardState.context = contextRef.current
    }, [])

    return (
        <>
            <canvas
                ref={canvasRef}
                onMouseDown={start}
                onMouseMove={draw}
                onMouseUp={stop}
            ></canvas>
            <Tools />
        </>
    )
}

export default HomeScreen
