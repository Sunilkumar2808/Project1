import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from "../Compontents/Dashboard";
import App from "../Compontents/usereducer"
import ExampleComponent from "../Compontents/usecallback";
import ExampleComponents from "../Compontents/useMemo";
import FormExample from "../Compontents/Form";
import Form from "../Compontents/ReactForm/form";
const Rounter = () => {
    return (
        <div>
            <Router>
                {/* <Route exact path="/" component={Dashboard} /> */}
                <Dashboard />
                {/* < App /> */}
                {/* <ExampleComponent /> */}
                {/* <FormExample /> */}
                {/* <Form /> */}
                {/* <ExampleComponents /> */}
            </Router>
        </div>
    )
}
export default Rounter