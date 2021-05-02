
function Info(props) {
    const {char} = props;

    return (
        <>
        <p>Born: {char.birth_year} </p>
        <p>Gender: {char.gender} </p>
        <p>Height: {char.height} </p>
        <p>Hair Color: {char.hair_color} </p>
        <p>Eye Color: {char.eye_color} </p>
        </>
    )
}

export default Info;