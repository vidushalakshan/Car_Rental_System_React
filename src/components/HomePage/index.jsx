import React, { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from '../HomePage/styles.css'

const slides = [
    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.realsimple.com%2Fhome-organizing%2Fgardening%2Foutdoor%2Fhydrangea-care&psig=AOvVaw275XSNKxEPmAUIIqHYtsyQ&ust=1668963424679000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiU4rHbuvsCFQAAAAAdAAAAABAF'></img>,
    'photo-1544572571-ab94fd872ce4',
    'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
    'photo-1540206395-68808572332f',
]

function Home() {

    const [index, set] = useState(0)
    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 3000 },
        onRest: (_a, _b, item) => {
            if (index === item) {
                set(state => (state + 1) % slides.length)
            }
        },
        exitBeforeEnter: true,
    })
    return (
        <div className="flex fill center">
            {transitions((style, i) => (
                <animated.div
                    className={styles.bg}
                    style={{
                        ...style,
                        backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
                    }}
                />
            ))}
        </div>
    )
}

export default Home;