import PropTypes from 'prop-types';
const user = {
    uName: "5",
    anoNac: 1987,
    message: "Hola"
}

const saludar = (saludo, aQuien) => {
        if(aQuien.length < 1){
            return `${saludo} extraño/a!` ;
        } else{
            return `${saludo} ${aQuien}!`;
        }
    }

export const FirstApp = ({title, subtitulo}) =>   {
    return(
        <>
            <h1 data-testid="test-title"> {title} </h1>
            <h2>{saludar(user.message, user.uName)}</h2>
            {<code>{JSON.stringify({user})}</code>}
            <p>{subtitulo}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    subtitulo: 'hermoso día'
}