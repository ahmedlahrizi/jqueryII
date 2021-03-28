let n = 0;

function numberFormat(n) {
    return n.toString().padStart(2, "0");
}

function render() {
    const items = [
    "Manger",
    "Faire les courses",
    "Boire"
    ];

    const lis = items.map(
        (item, key) => <li key={key}>{item}</li>
    );

    const title = (
        <React.Fragment>

            <h1 className="title" id={"title" + n}>
                Bonjour les gens <span>{numberFormat(n)}</span>
            </h1>


            <ul>{lis}</ul>
        </React.Fragment>
    );

    // console.log(title);

    ReactDOM.render(title, document.getElementById("app"));
}

render();

setInterval(
    () => {
    n++;
    0;
    render();
    }
, 1000);
