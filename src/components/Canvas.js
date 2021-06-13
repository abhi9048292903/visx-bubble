import React from 'react'
import { createUseStyles } from 'react-jss'
import BubbleChart from './BubbleChart'
import Description from './Description'

const useStyles = createUseStyles({
    canvas: {
        width: '50%',
        padding: '16px 64px',
        margin: '8px auto',
    },
    title: {
        fontSize: '24px',
        padding: '8px 32px',
        textAlign: 'center',
    }
})

const Canvas = ({title}) => {
    const classes = useStyles()
    return (
        <div className={classes.canvas}>
            <div className={classes.title}>
                {title}
            </div>
            <BubbleChart />
            <Description />
        </div>
    )
}

export default Canvas