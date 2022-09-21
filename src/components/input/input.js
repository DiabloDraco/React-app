import { forwardRef } from 'react'
import './input.scss'

let input = forwardRef((props , ref) => {
    return(
        <input ref={ref} {...props} className={"input form__input"} />
    )
})

export default input