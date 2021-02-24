import React, { Component } from "react";
import './Error.css'

class ErrorPage extends Component
{
    render()
    {
        return (
            <section className="internal-page-wrapper top-100 bottom-100">
                <div className="container">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-12 error-text">
                            <h1>The page you’re looking for can NOT be found.</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default ErrorPage;
