import styled from 'styled-components';

import FlexBuilder from './FlexBuilder'

const BoldP = styled.p`
    font-weight: bold;

    * {
        font-weight: normal;
    }
`

function Info(props) {

    const {char} = props;

    return (
        <>
            <FlexBuilder>
                <BoldP>Born:</BoldP>
                <p>{char.birth_year}</p>
            </FlexBuilder>
            <FlexBuilder>
                <BoldP>Gender:</BoldP>
                <p>{char.gender}</p>
            </FlexBuilder>
            <FlexBuilder>
                <BoldP>Height:</BoldP>
                <p>{char.height}</p>
            </FlexBuilder>
            <FlexBuilder>
                <BoldP>Hair Color:</BoldP>
                <p>{char.hair_color}</p>
            </FlexBuilder>
            <FlexBuilder>
                <BoldP>Eye Color:</BoldP>
                <p>{char.eye_color}</p>
            </FlexBuilder>
        </>
    )
}

export default Info;