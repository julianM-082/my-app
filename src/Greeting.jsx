export function Greeting({ title, name = "user" }) {
    return <h1>hola {name}</h1>;
}

export function UserCard({name, amount, address, married}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>${amount}</p>
            <p>{married ? "married" : "single"}</p>
            <ul>
                <li>CITY: {address.city}</li>
                <li>ADDRESS: {address.street}</li>
            </ul>
        </div>
    );
}
