import './task-styles.css';

export function Task({ ready }) {
    return (<div className="card">
        <h1>Mi primer tarea</h1>
        <span
            style={ready ? {background: 'green'} : {background : 'red'}}
        >{
                ready ? 'Tarea realizada' : 'Tarea pendiente'
            }</span>
    </div>)
}
