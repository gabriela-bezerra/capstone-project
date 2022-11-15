function App() {
    // const [categories, setCategories] = React.useState([]);

    // React.useEffect(() => {
    //     fetch('/api/categories')
    //         .then((response) => response.json())
    //         .then((categoryData) => setCategories(categoryData));
    // }, []);

    // const [user, setUser] = React.useState({});

    // React.useEffect(() => {
    //     fetch('/api/login')
    //         .then((response) => response.json())
    //         .then((userData) => setUser(userData));
    // }, []);

    return (
        <ReactRouterDOM.BrowserRouter>
            <Navbar logo="/static/img/logo.png" brand="Restaurant Finder" />
            <div className="container-fluid">
                <ReactRouterDOM.Route exact path="/">
                    <Homepage />
                    <SearchBar />
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/login">
                    <LoginForm />
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/sign-up">
                    <SignUpForm />
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/add-restaurant">
                    <AddNewRestaurant />
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/search-results">
                    <SearchResult />
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/restaurant-details">
                    <RestaurantDetails />
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route exact path="/user-profile">
                    <UserProfile />
                </ReactRouterDOM.Route>
            </div>
        </ReactRouterDOM.BrowserRouter>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
