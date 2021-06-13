import React from 'react'
import { Group } from '@visx/group'
import { getBubbles } from './circles'
import { createUseStyles } from 'react-jss'

const box = {
    height: 320,
    width: 710,
    margin: 16
}
const colorSacle  = [
    '#256D1B',
    '#93C48B',
    '#F3B700',
    '#F75C03',
    '#780116'
]

const circles = getBubbles(40, box.height, box.width)

const BubbleChart = () => {
    const classes = useStyles()
    return (
        <div className={classes.rect}>
            <svg width={box.width} height={box.height}>
            <rect width={box.width} height={box.height} rx={14} fill="#ffffff" />
            <Group top={10} left={12}>
            {circles.map((circle, i) => (
                <circle
                  key={`circle-${i}`}
                  r={circle.r}
                  cx={circle.x}
                  cy={circle.y}
                  fill={colorSacle[Math.floor(Math.random(i) * 5)]}
                />
              ))}
            </Group>
            </svg>
        </div>
    )
}

const useStyles = createUseStyles({
    rect: {
       border: '1px solid #999'
    },
})
export default BubbleChart