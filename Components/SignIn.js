import { Form, Formik,Field } from "formik";

const SignIn = () => {
    return (<div className="sHeader">
        <h1>Sign In</h1>
        <Formik
            initialValues={
                {
                    username:"",
                    password:""
                }
            }
            onSubmit={(data)=>{
                console.log(data);
            }}
        >
            <Form >
                <div className="formikField">
                    <label htmlFor="username">Username:</label>
                    <Field id="username" name="username" placeholder="Jane" />
                </div>
                <div className="formikField">
                    <label htmlFor="password">Password:</label>
                    <Field id="password" name="password" placeholder="***" type="password"/>
                </div>
                <div className="formikField">
                    <button type="submit">Submit</button>
                </div>

            </Form>
        </Formik>
    </div>);
}

export default SignIn;