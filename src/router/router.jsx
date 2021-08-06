import React from 'react'
import { Route } from 'react-router-dom'
import Index from '../component/authentication/Index'

function Router() {
    return (
        <div>
            <Route exact path="/">
                <Index />
            </Route>
        </div>
    )
}

export default Router
