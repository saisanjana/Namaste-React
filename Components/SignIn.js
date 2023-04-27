import React,{useContext} from "react";
import { Form, Formik,Field } from "formik";
import UserContext from "../Contexts/UserContext";

const SignIn = () => {
    const user = useContext(UserContext);
    return (<div className="sHeader">
        <h1 className="flex items-center justify-center p-20">Sign In</h1>
        <Formik
            initialValues={
                {
                    username:"",
                    password:"",
                    email:""
                }
            }
            onSubmit={(data)=>{
                console.log(data);
                console.log(user);
                // console.log({...user, user:{email:data.username,name:data.email}})
                user.setUser({name:data.username, email:data.email});
                
            }}
        >
            <Form >
                <div className="flex items-center justify-center p-3">
                    <label htmlFor="username">Username:</label>
                    <Field id="username" name="username" placeholder="Jane" />
                </div>
                <div className="flex items-center justify-center p-3">
                    <label htmlFor="email">Email:</label>
                    <Field id="email" name="email" placeholder="Jane@j.com" />
                </div>
                <div className="flex items-center justify-center p-3">
                    <label htmlFor="password">Password:</label>
                    <Field id="password" name="password" placeholder="***" type="password"/>
                </div>
                <div className="flex items-center justify-center p-10">
                    <button type="submit">Submit</button>
                </div>

            </Form>
        </Formik>
    </div>);
}

export default SignIn;