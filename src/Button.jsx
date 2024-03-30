import PropTypes from 'prop-types';

export function Button({text}) {
    return <button onClick={()=>{console.log("hola")}}>
        {text}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}