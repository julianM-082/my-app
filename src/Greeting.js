export function Greeting() {
    const user = {
        firstName: 'Carlos',
        lastName: 'Perez'
    }
    return (<div>
        <h1>{user.firstName}</h1>
        <h3>{user.lastName}</h3>
    </div>)
}

export function UserCard(){
    return <h1>User Card</h1>

}