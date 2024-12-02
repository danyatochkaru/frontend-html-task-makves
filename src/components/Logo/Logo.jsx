import styled from "styled-components";
import logo from '../../assets/logo.png';

const LogoImage = styled.img`
    width: 38px;
`

const Title = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.text.logo};
`

const Logo = () => {
    const title = 'TensorFlow';

    return (
        <>
            <LogoImage src={logo} alt={`${title}'s logo`}/>
            <Title className={'title'}>{title}</Title>
        </>
    )
}

export default Logo