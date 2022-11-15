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

    // const { register, handleSubmit } = React.useForm();

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
        </form >
    )
}

function SignUpForm(props) {



    return (
        <form className="sign-up-page">
            <div className="cover">
                <h1>Sign up</h1>
                First Name <input type="text" name="first-name" />
                Last Name <input type="text" name="last-name" />
                Email<input type="text" name="email" />
                Password<input type="password" name="password" />

                <input type="submit" className="submit-btn" value="Submit" />

            </div>
        </form >
    )
}

function AddNewRestaurant(props) {

    return (
        <form className="add-restaurant-page">
            <div className="cover-add">
                <h3>Add A New Restaurant</h3>
                Name <input type="text" name="name" />
                Address <input type="text" name="address" />
                City <input type="text" name="city" />
                State <input type="text" name="state" />
                Zipcode <input type="text" name="zipcode" />
                Latitude<input type="text" name="latitude" />
                Longitude <input type="text" name="longitude" />


                <input type="submit" className="submit-btn" value="Submit" />

            </div>
        </form >
    )
}

function SearchResult(props) {

    return (
        <h1>Search results</h1>


    )
}

function RestaurantDetails(props) {

    return (
        <h1>Restaurant Details</h1>


    )
}

function UserProfile(props) {

    return (
        <h1>User Profile</h1>


    )
}