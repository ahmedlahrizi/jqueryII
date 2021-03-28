function WelcomeFunc({ name, children }) {
    // You can use props to get an object or
    // directly an object {} with the attribute that you need
    return (
        <React.Fragment>
            <h1>Bonsoir {name} !!</h1>

            <p>{children}</p>
        </React.Fragment>
    );
}

class Welcome extends React.Component {



    render() {
        console.log(this.props)
        return (
        <React.Fragment>
            <h1>Bonjour {this.props.name} !!</h1>
            <p>{this.props.children}</p>
        </React.Fragment>
        );
    }
}

ReactDOM.render(
    <Welcome name="John Cena">Ceci est un children</Welcome>,
    document.getElementById("app")
);
