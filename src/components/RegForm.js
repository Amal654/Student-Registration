import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import RegControl from './RegControl'
import TextError from './TextError'

function RegForm() {
    const dropdownOptions = [
        { key: 'Select a class', value: '' },
        { key: 'I', value: '1' },
        { key: 'II', value: '2' },
        { key: 'III', value: '3' },
        { key: 'IV', value: '4' },
        { key: 'V', value: '5' },
        { key: 'VI', value: '6' },
        { key: 'VII', value: '7' },
        { key: 'VIII', value: '8' },
        { key: 'IX', value: '9' },
        { key: 'X', value: '10' },
        { key: 'XI', value: '11' },
        { key: 'XII', value: '12' }
    ]

    const divOptions = [
        { key: 'Select the div', value: '' },
        { key: 'A', value: 'A' },
        { key: 'B', value: 'B' },
        { key: 'C', value: 'C' },
    ]

    const radioOption = [
        { key: 'Male', value: 'male' },
        { key: 'Female', value: 'female' },
        { key: 'Other', value: 'other' }
    ]

    const initialValues = {
        name: {
            fname: '',
            lname: ''
        },
        selectOption: '',
        dOption: '',
        birthDate: null,
        radioOption: ''
    }

    const validationSchema = Yup.object({
        name: Yup.object({
            fname: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only letters and spaces are allowed').required('Required!'),
            lname: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only letters and spaces are allowed').required('Required!')
        }),
        selectOption: Yup.string().required('Required!'),
        dOption: Yup.string().required('Required!'),
        birthDate: Yup.date().required('Required!'),
        radioOption: Yup.string().required('Required!')
    })

    const onSubmit = values => console.log('Form Data', values)

    return (

        <div class="container">
            <div class="form-container">
                <div class='heading'>Student Registration</div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {
                        formik => (
                            <Form>
                                <div className='form-control'>
                                    <label htmlFor='name.fname'>First name</label>
                                    <Field id='name.fname' name='name.fname' type='text' className='form-control' placeholder='Enter your first name' />
                                    <ErrorMessage name='name.fname' component={TextError} />
                                </div>

                                <div className='form-control'>
                                    <label htmlFor='name.lname'>Last name</label>
                                    <Field id='name.lname' name='name.lname' type='text' className='form-control' placeholder='Enter your last name' />
                                    <ErrorMessage name='name.lname' component={TextError} />
                                </div>

                                <RegControl control='date' label='DOB' name='birthDate' placeholderText='Enter your date of birth' />

                                <RegControl control='select' label='Class' name='selectOption' options={dropdownOptions} className='form-control' />
                                <RegControl control='select' label='Division' name='dOption' options={divOptions} className='form-control' />

                                <RegControl control='radio' label='Gender' name='radioOption' options={radioOption} className='radio-button' />

                                <div>
                                    <button type='reset' className='btn'>Reset</button>
                                    <button type='submit' className='btn'>Submit</button>
                                </div>
                            </Form>
                        )}
                </Formik>
            </div>



            <div class="table-container">
                <div><h1><center>Registration Details</center></h1></div>
            </div>
        </div>
    )
}

export default RegForm
