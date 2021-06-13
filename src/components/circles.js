import { getSeededRandom } from '@visx/mock-data'

const radiusRandom = getSeededRandom(0.2)
const xRandom = getSeededRandom(0.3)
const yRandom = getSeededRandom(0.4)

export const getBubbles = (n, height, width) => {
    let circles = []
    for (let i = 0; i < n; i++) {
        let radius = 25 - radiusRandom() * 20
        circles.push({ id: i, text: `B-${i}`, r: radius, 
        x: Math.round(xRandom() * (width - radius * 2) + radius),
        y: Math.round(yRandom() * (height - radius * 2) + radius),
    })
    }
    return circles
}