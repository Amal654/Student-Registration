import React from 'react'
import Input from './Input'
import Select from './Select'
import DatePicker from './DatePicker'
import Radio from './Radio'

function RegControl(props) {
    const {control, ...rest} = props
    switch (control) {
        case 'input':
            return <Input {...rest}/>
        case 'date':
            return <DatePicker {...rest}/>
        case 'select': 
            return <Select {...rest}/>
        case 'radio':
            return <Radio {...rest}/>
        default: return null
    }
}

export default RegControl