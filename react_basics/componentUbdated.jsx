const people = [
    "John Scena",
    "Dorothé claude",
    "Christophe Colomb",
    "La terre est plate",
    "",
];

function WelcomeFunc({ name, children }) {
    // You can use props to get an object or
    // directly an object {} with the attribute that you need
    return (
        <React.Fragment>
            <h1>Bonsoir {name} !!</h1>
        </React.Fragment>
    );
}

class Welcome extends React.Component {
    render() {
        const Welcomes = people.map((item, key) => (
            <h1 key={key}>Bonsoir {item} !!</h1>
        ));

        console.log(Welcomes, "Les H1");
        console.log(this.props, "Les propriétés");

        return <React.Fragment>{Welcomes}</React.Fragment>;
    }
}

function Home() {
    return (
        <React.Fragment>
            <Welcome name={people} />
            <Clock />
            <Incrementer start={10} step={10} />
            {/* <Incrementer_with_button /> */}
        </React.Fragment>
    );
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // getSnapshotBeforeUpdate() {
    //     const yes = this;
    //     console.log(yes)
    //     return yes;
    // }

    // shouldComponentUpdate() {
    //     return false;
    // }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <React.Fragment>
                <h2>
                    On est le
                    {" " + this.state.date.toLocaleString()}
                </h2>
            </React.Fragment>
        );
    }
}

// class Incrementer extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             number : this.props.start
//         };
//         this.timer = null;
//     }

//     componentDidMount() {
//         this.timer = setInterval(
//             this.tick.bind(this),
//             1000
//         )
//     }

//     componentWillUnmount() {
//         ClearInterval(this.timer)
//     }

//     shouldComponentUpdate() {
//         return this.state.number <= 15 ? true : false;
//     }

//     tick() {
//         this.setState(
//             {
//                 number : this.state.number + 1
//             })
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <h4>{this.state.number}</h4>
//             </React.Fragment>
//         );
//     }
// }

class Incrementer extends React.Component {
    static defaultProps = {
        start: 10,
        step: 30,
    };

    constructor(props) {
        super(props);
        this.state = {
            number: this.props.start,
            step: this.props.step,
            isPlaying: "Pause",
        };
        this.timer = null;
        this.pause = this.pause.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    shouldComponentUpdate() {
        return this.state.number < 500 ? true : false;
    }

    tick() {
        this.setState((state, props) => ({
            number: state.number + state.step,
        }));
    }

    pause() {
        if (this.timer === null) {
            this.timer = setInterval(this.tick.bind(this), 1000);
            this.setState(() => ({
                isPlaying: "Pause",
            }));
        } else {
            clearInterval(this.timer);
            this.timer = null;
            this.setState(() => ({
                isPlaying: "Play",
            }));
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log(this.timer);
    }

    componentDidUpdate() {
        console.log("updated")
    }

    reset() {
        clearInterval(this.timer);
        this.setState((state, props) => ({
            number: 0,
        }));
        this.timer = setInterval(this.tick.bind(this),
        1000)
    }

    render() {
        return (
            <React.Fragment>
                <h3>{this.state.number}</h3>
                <button onClick={this.pause}>
                    {this.state.isPlaying}
                </button>
                <button onClick={this.reset}>
                    Reset
                </button>
            </React.Fragment>
        );
    }
}

// class Incrementer_with_button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 0,
//         };
//     }

//     Increment(event) {
//         event.preventDefault();
//         this.setState((state, props) => ({
//             number: state.number + 1,
//         }));
//         console.log(event);
//     }

//     render() {
//         return (
//             <h3>
//                 <button onClick={this.Increment.bind(this)}>
//                     Value is 😋 {this.state.number}
//                 </button>
//             </h3>
//         );
//     }
// }

ReactDOM.render(<Home />, document.getElementById("app"));
