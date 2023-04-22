import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'

const initialValues = {
    fname: '',
    lname: '' 
}

const onSubmit = {
    
}

const validate = values => {
    let errors= {}

    if(!values.fname){
        errors.fname = 'Required'
    }
    if(!values.lname){
        errors.lname = 'Required'
    }
    return errors
}

const validationSchema = yup.object({
    fname: yup.string().required('Required!'),
    lname: yup.string().required('Required!')
})

function RegForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate
    })

    console.log('Visited', formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}/>
            <div className='form-control'>
                <label htmlFor='fname'>First Name</label>
                <input 
                    type='text' 
                    id='fname' 
                    name='fname' 
                    {...formik.getFieldProps('fname')}/>
                {formik.touched.fname && formik.errors.fname? (
                <div className='error'>{formik.errors.fname}
                </div>): null}
            </div>

            <div className='form-control'>
                <label htmlFor='lname'>Last Name</label>
                <input 
                    type='text' 
                    id='lname' 
                    name='lname' 
                    {...formik.getFieldProps('lname')}/>
                {formik.touched.lname && formik.errors.lname? (
                <div className='error'>{formik.errors.lname}
                </div>): null}
            </div>

                <button type='submit'>Submit</button>
        </div>
    )
}

export default RegForm;  