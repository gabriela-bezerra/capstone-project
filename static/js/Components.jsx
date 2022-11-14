const { useState } = require("react");

function Homepage(props) {
    return (
        <div id="home-banner" className="row">
            <div className="col">
                <h1>Restaurants Finder</h1>
                <p className="lead">More than just a restaurant search.</p>
            </div>
        </div>
    );
}

function Navbar(props) {
    const { logo, brand } = props;

    return (
        <nav>
            <ReactRouterDOM.Link to="/" className="navbar-brand d-flex justify-content-start">
                <img src={logo} height="60" alt="logo" />
                <span>{brand}</span>
            </ReactRouterDOM.Link>

            <section className="d-flex justify-content-end">
                <ReactRouterDOM.NavLink
                    to="/"
                    activeClassName="navlink-active"
                    className="nav-link nav-item"
                >
                    Home
                </ReactRouterDOM.NavLink>

                <ReactRouterDOM.NavLink
                    to="/sign-up"
                    activeClassName="navlink-active"
                    className="nav-link nav-item"
                >
                    Sign up
                </ReactRouterDOM.NavLink>

                <ReactRouterDOM.NavLink
                    to="/login"
                    activeClassName="navlink-active"
                    className="nav-link nav-item"
                >
                    Login
                </ReactRouterDOM.NavLink>

                <ReactRouterDOM.NavLink
                    to="/add-restaurant"
                    activeClassName="navlink-active"
                    className="nav-link nav-item"
                >
                    Add Restaurant
                </ReactRouterDOM.NavLink>
            </section>
        </nav>
    );
}

function SearchBar(props) {
    const { data } = props;

    return (
        <section className="search-page">
            <div className="search">
                <div className="search-inputs">
                    <input type="text" placeholder="Enter a category" />
                    <div className="searchIcon"> </div>
                </div>

                <div className="dataResult"></div>
            </div>
        </section>
    )
}


function LoginForm(props) {

    // const { register, handleSubmit } = useForm();

    // const onFormSubmit = (data) => console.log(data);

    return (

        // <form className="login-page" onSubmit={handleSubmit(onFormSubmit)}>
        <form className="login-page">
            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                {/* <input type="text" placeholder="email" {...register("email")} />
                <input type="password" placeholder="password" {...register("password")} /> */}

                <input type="submit" className="login-btn" value="Login" />

                <p className="text">Or login using</p>

                <div className="alt-login">
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div>
            </div>
        </form>
    )
}