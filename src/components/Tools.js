import React from 'react'
import { boardState } from '../utils/boardState'

const Tools = () => {
    const clearHandler = () => {
        const { context, elements, width, height } = boardState
        context.clearRect(0, 0, width, height)
        elements.length = 0
    }

    return (
        <div className='toolsContaier'>
            <button onClick={clearHandler}>Clear</button>

            <input
                type="color"
                onClick={(event) => (boardState.color = event.target.value)}
            />

            <input
                type="range"
                min={1}
                max={32}
                defaultValue={2}
                onClick={(event) => (boardState.size = event.target.value)}
            />
        </div>
    )
}

export default Tools
