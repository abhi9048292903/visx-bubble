import React from 'react'
import { Group } from '@visx/group'
const box = {
    height: 320,
    width: 720,
    margin: 16
}
const circles = [{r: 10, x: 12, y: 12}, {r: 13, x: 44, y: 12}]

const BubbleChart = () => {
    return (
        <div>
            <svg width={box.width} height={box.height}>
            <rect width={box.width} height={box.height} rx={14} fill="#ffffff" />
            <Group top={10} left={12}>
            {circles.map((circle, i) => (
                <circle
                  key={`circle-${i}`}
                  r={circle.r}
                  cx={circle.x}
                  cy={circle.y}
                  fill={'#999'}
                />
              ))}
            </Group>
            </svg>
        </div>
    )
}

export default BubbleChart