function App() {
    // const [categories, setCategories] = useState({});

    // React.useEffect(() => {
    //     fetch('/api/categories')
    //         .then((response) => response.json())
    //         .then((categoryData) => setCategories(categoryData));
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


            </div>
        </ReactRouterDOM.BrowserRouter>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
