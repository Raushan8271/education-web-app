import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../component/authentication/Index'
import Text from '../component/Vedio_To_Text/Text'
import TeacherDashboard from '../TeacherDashboard/TeacherDashboard';
import TeacherLogin from '../TeacherDashboard/TeacherLogin';
import { Redirect } from 'react-router';
import { AuthContext } from "../Context/TeacherAuthContext"
import { useContext } from "react";

function Router() {

    const {isAuth} = useContext(AuthContext);

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route exact path="/home">
                    <Text />
                </Route>
                <Route path="/login">
                    { (!isAuth) ? <TeacherLogin/>  :  <Redirect to={"/teacher"}/> }
                </Route>
                <Route exact path='/teacher'>
                    { (isAuth) ? <TeacherDashboard/> :  <Redirect to={"/login"}/> }
                </Route>
            </Switch>
        </div>
    )
}

export default Router;