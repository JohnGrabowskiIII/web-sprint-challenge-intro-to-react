import Info from './Info'

function Character(props) {

    const {charactersArray, selectedCharacter, setSelectedCharacter} = props;

    // SECOND ARGUMENT IS ELEMENT KEY, CORRESPONDS TO POSITION IN PARENT ARRAY
    // IF CLICKED ELEMENT IS ALREADY OPEN CLOSES INSTEAD
    const clickHandle = (e, i) => {
        e.target.textContent === selectedCharacter.name ? setSelectedCharacter({}) :
        setSelectedCharacter(charactersArray[i]);
    }

    const charactersList = charactersArray.map((char, i) => {
        if (selectedCharacter !== char) return <h3 key={i} onClick={e => clickHandle(e, i)} >{char.name}</h3>
        return (
            <div key={i}>
                <h3 onClick={e => clickHandle(e, i)} >{char.name}</h3>
                <Info char={char} />
            </div>
        )
    });

return (
    <>
    {charactersList}
    </>
)

}

export default Character;