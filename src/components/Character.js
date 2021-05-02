import Info from './Info'
import styled from 'styled-components';
import ships from '../images/starwarspattern2.jpg'

const ContainerDiv = styled.div`
    border: 8px solid red;
    border-radius: 20px;
    background-image: url(${ships});
    background-size: contain;
    width: 230px;
    margin: 30px auto;
`

const SelectedInfoContainer = styled.div`
    width: 100%;
`

const CharName = styled.h3`
    font-size: 22px;
    margin: 25px 0px;
    color: ${props => props.select === true ? 'red' : 'white'};
    text-decoration: ${props => props.select === true ? 'underline' : 'initial'}
`

function Character(props) {

    const {charactersArray, selectedCharacter, setSelectedCharacter} = props;

    // SECOND ARGUMENT IS ELEMENT KEY, CORRESPONDS TO POSITION IN PARENT ARRAY
    // IF CLICKED ELEMENT IS ALREADY OPEN CLOSES INSTEAD
    const clickHandle = (e, i) => {
        e.target.textContent === selectedCharacter.name ? setSelectedCharacter({}) :
        setSelectedCharacter(charactersArray[i]);
    }

    const charactersList = charactersArray.map((char, i) => {
        if (selectedCharacter !== char) return <CharName key={i} select={false} onClick={e => clickHandle(e, i)} >{char.name}</CharName>
        return (
            <SelectedInfoContainer key={i}>
                <CharName select={true} onClick={e => clickHandle(e, i)} >{char.name}</CharName>
                <Info char={char} />
            </SelectedInfoContainer>
        )
    });

return (
    <ContainerDiv>
    {charactersList}
    </ContainerDiv>
)

}

export default Character;