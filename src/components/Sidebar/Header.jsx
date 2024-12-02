import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Logo} from "../Logo";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: ${props => props.$compact ? '0' : '6px'};

    position: relative;
    transition: all .3s;

    & > .title {
        overflow: hidden;
        transition: all .3s;
        opacity: ${props => props.$compact ? '0' : '1'};
        visibility: ${props => props.$compact ? 'hidden' : 'visible'};
    }
`


const ToggleButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.button_background[props.$compact ? 'default' : 'active']};
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.text.default}
    font-weight: bold;
    font-size: 16px;

    position: absolute;
    left: calc(100% + ${props => props.$compact ? '20px' : '-6px'});

    transition: all .3s;

    &:active {
        background-color: ${props => props.theme.button_background[props.$compact ? 'active' : 'default']}
    }
`

const Header = (props) => {
    const {isOpened, toggleSidebar} = props;

    return (
        <HeaderWrapper $compact={!isOpened}>
            <Logo/>
            <ToggleButton $compact={!isOpened} onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'}/>
            </ToggleButton>
        </HeaderWrapper>
    )
}

Header.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
}

export default Header;