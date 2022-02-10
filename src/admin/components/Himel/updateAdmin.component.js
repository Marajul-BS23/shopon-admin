import { Field, Form, Formik, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import updateAdminSchema from "./updateAdmin.schema";
const api_endPoint = "http://localhost:5000/api";

const UpdteAdmin = (props) => {
    const [user, setUser] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

    const [admin] = useState({
        email: "habiburrahman3089@gmail.com",
        password: "P@ssword123",
    });
    const removeNull = (value) => {
        if (value === null) return "";
        if (!value) return "";
        return value;
    };

    async function handleLogin(data) {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/login",
                data,
                { withCredentials: true }
            );
            localStorage.setItem("access_token", response.data.access_token);
            console.log(response);
            console.log("loged in ");
            setLoggedIn(true);
        } catch (error) {
            console.log(error);
            alert("Error happened");
        }
    }
    async function updateUserAdmin(data) {
        try {
            console.log("up date data : ", data);
            const updatedUser = {
                profile_id: 1,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
                role_id: data.role_id,
            };
            console.log("up dated user : ", updatedUser);
            const response = await axios.patch(
                `http://localhost:5000/api/users/${props.location.state.data}`,
                updatedUser,
                { withCredentials: true }
            );
            console.log(response);

            window.location.href = "/admin/himel";
        } catch (error) {
            console.log(error.response.data);
            console.log("shows error but updates ");
            props.history.push("/admin/himel");
            // window.location.href = "/admin/himel";
        }
    }

    async function getUser(user_id) {
        try {
            /** request to this api , then it will give response*/
            const response = await axios.get(
                `${api_endPoint}/users/${user_id}`,
                { withCredentials: true }
            );

            console.log("Response : ", response);
            console.log("Response.data : ", response.data);

            setUser(response.data);

            console.log("user state : ", user);

            console.log("Himel");
        } catch (error) {
            console.log("Eita error");
            console.log(error);
        }
    }
    useEffect(() => {
        if (!loggedIn) {
            handleLogin(admin);
            const _UserID = props.location.state.data;
            console.log("User ID : ", _UserID);
            getUser(_UserID);
        }
        // getUser();
    }, [user, loggedIn]);

    return (
        <>
            <button
                onClick={() => {
                    props.history.push("/admin/himel");
                }}
                style={{ margin: "20px", marginLeft: "90%" }}
            >
                Go Back
            </button>
            <br />
            update user {props.location.state?.data}
            {console.log("user state in render ", user)}
            <hr />
            {user ? (
                <div
                    className="card bg-light"
                    style={{ margin: "auto", maxWidth: "45rem" }}
                >
                    <Formik
                        initialValues={{
                            first_name: user.first_name,
                            last_name: user.last_name,
                            email: user.email,
                            password: removeNull(user.password),
                            confirm_password: removeNull(user.confirm_password),
                            role_id: removeNull(user.role_id),
                        }}
                        validationSchema={updateAdminSchema}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            console.log(values.first_name);
                            updateUserAdmin(values);
                            actions.setSubmitting(false);
                        }}
                    >
                        {(formikProps) => (
                            <Form
                                onSubmit={formikProps.handleSubmit}
                                className="px-4 py-3"
                            >
                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="first_name"
                                    >
                                        First Name
                                        <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                        className="form-control"
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                    />
                                    <div className="invalid-feedback d-block">
                                        <ErrorMessage name="first_name" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="last_name"
                                    >
                                        Last Name
                                        <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                        className="form-control"
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                    />
                                    <div className="invalid-feedback d-block">
                                        <ErrorMessage name="last_name" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="email"
                                    >
                                        Email
                                        <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        name="email"
                                    />
                                    <div className="invalid-feedback d-block">
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="password"
                                    >
                                        Password
                                        <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                        className="form-control"
                                        type="password"
                                        id="password"
                                        name="password"
                                    />
                                    <div className="invalid-feedback d-block">
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="confirm_password"
                                    >
                                        Confirm Password
                                        <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                        className="form-control"
                                        type="confirm_password"
                                        id="confirm_password"
                                        name="confirm_password"
                                    />
                                    <div className="invalid-feedback d-block">
                                        <ErrorMessage name="confirm_password" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="role_id"
                                    >
                                        Role ID
                                        <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                        className="form-control"
                                        type="text"
                                        id="role_id"
                                        name="role_id"
                                    />
                                    <div className="invalid-feedback d-block">
                                        <ErrorMessage name="role_id" />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning"
                                >
                                    Update
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            ) : (
                <>
                    <h1>There is no user of id {props.location.state?.data}</h1>
                </>
            )}
        </>
    );
};

export default UpdteAdmin;
