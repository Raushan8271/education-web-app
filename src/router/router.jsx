import React from 'react'
import { Route } from 'react-router-dom'
import Index from '../component/authentication/Index'
import Text from '../component/Vedio_To_Text/Text'

function Router() {
    return (
        <div>
            <Route exact path="/">
                <Index />
            </Route>
            <Route exact path="/home">
                <Text />
            </Route>
        </div>
    )
}

export default Router
