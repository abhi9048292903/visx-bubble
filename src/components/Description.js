import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    description: {
        fontSize: '14px',
        lineHeight: '18px'
    },
    container: {
        padding: '25px'
    }
})

const Description = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <section className={classes.description}>
                Created based on visx library 
            </section>
        </div>
    )
}

export default Description