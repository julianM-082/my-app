export function Post(){
    return <button onClick={()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data => console.log(data))
    }}>
        Taer Datos
    </button>
}