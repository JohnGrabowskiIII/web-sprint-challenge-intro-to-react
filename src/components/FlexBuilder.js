import styled from 'styled-components'
import metal from '../images/metaltexture.jpg'

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 0px 10px;
    background-image: url(${metal});
`

function FlexBuilder(props) {

    return (
        <FlexContainer>
            {props.children}
        </FlexContainer>
    )
}

export default FlexBuilder;