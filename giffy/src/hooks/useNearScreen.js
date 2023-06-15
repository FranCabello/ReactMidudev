import {useEffect, useState, useRef} from 'react'

export default function useNearScreen({ distance = '100px', externalRef} = {}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(function({ distance = '100px'}) {
        let observer

        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver != 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => { 
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })

            observer.observe(fromRef.current)
        })

        return () => observer && observer.disconnect()
    })

    return {isNearScreen, fromRef}
}