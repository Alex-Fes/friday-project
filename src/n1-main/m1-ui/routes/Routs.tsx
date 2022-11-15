import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoginContainer from "../../../n2-features/f1-auth/a1-login/LoginContainer";
import RegistrationContainer from "../../../n2-features/f1-auth/a2-registration/RegistrationContainer";
import ProfileContainer from "../o2-profile/ProfileContainer";
import ErrorContainer from "../o3-error404/ErrorContainer";
import PasswordContainer from "../o4-password/PasswordContainer";
import Test from "../o5-test/Test";
import styles from "../common/styles/container.module.scss"

const login = '/login';
const registration = '/registration';
const password = '/password';
const profile = '/profile';
const error = '/error';
const test = '/test';

const Routs = () => {
    return <>
        <div className={styles.container}>
            <Routes>
                <Route path={login} element={<LoginContainer/>}></Route>
                <Route path={registration} element={<RegistrationContainer/>}></Route>
                <Route path={password} element={<PasswordContainer/>}></Route>
                <Route path={profile} element={<ProfileContainer/>}></Route>
                <Route path={error} element={<ErrorContainer/>}></Route>
                <Route path={test} element={<Test/>}></Route>
            </Routes>
        </div>
    </>
}
export default Routs;