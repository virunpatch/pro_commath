import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'รูปแบบ email ไม่ถูกต้อง';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(`email : ${values.email}     password : ${values.password}`, null, 2);
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <br></br>
                        {errors.email && touched.email && errors.email}

                        <br></br>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <br></br>
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>

                            Submit
           </button>
                    </form>
                )}
        </Formik>
    </div>
);

export default Basic;