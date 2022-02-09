import SignInSchema from "../../schema/admin.schema";
import { Formik, Field, Form } from "formik";

import axios from "axios";
import { useEffect } from "react";
const AddNewUser = () => {
    const ApiSubmit = async (values) => {
        const response = await axios.post("http://localhost:5000/api/users", {
            first_name: values.firstName,
            last_name: values.astName,
            email: values.email,
            password: values.password,
            confirm_password: values.confirmPassword,
            role_id: 5,
        });
        console.log(response);
    };
    useEffect(() => {});

    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    confirmPassword: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                    // alert(JSON.stringify(values, null, 2));
                    ApiSubmit(values);
                }}
                validationSchema={SignInSchema}
            >
                {({ errors }) => {
                    return (
                        <Form>
                            <div className="row g-3">
                                <div className="col">
                                    <label
                                        htmlFor="firstName"
                                        className="col-form-label"
                                    >
                                        First Name
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                    />
                                    {errors.firstName ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.firstName}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="lastName"
                                        className="col-form-label"
                                    >
                                        Last Name
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        name="lastName"
                                    />
                                    {errors.lastName ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.lastName}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col">
                                    <label
                                        htmlFor="email"
                                        className="col-form-label"
                                    >
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                    />
                                    {errors.email ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col">
                                    <label
                                        htmlFor="password"
                                        className="col-form-label"
                                    >
                                        Password
                                    </label>
                                    <Field
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                    />
                                    {errors.password ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.password}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="col-form-label"
                                    >
                                        Confirm Password
                                    </label>
                                    <Field
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                    />
                                    {errors.confirmPassword ? (
                                        <div className="invalid-feedback d-block">
                                            {errors.confirmPassword}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <button
                                className="btn btn-primary m-2"
                                type="submit"
                            >
                                Register
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default AddNewUser;
