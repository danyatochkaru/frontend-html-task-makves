import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styled from "styled-components";
import {NavLink} from "react-router";

const Link = styled(NavLink)`
    position: relative;

    height: 24px;
    padding: 10px;
    border-radius: 14px;

    display: inline-flex;
    flex-direction: row;
    column-gap: ${props => props.$compact ? '0' : '8px'};
    align-items: center;

    text-decoration: none;
    color: ${props => props.theme.text.default};
    background-color: ${props => props.theme.button_background.default};
    cursor: pointer;
    transition: all .3s;

    & > .text {
        font-weight: 600;

        overflow: hidden;
        transition: opacity .3s, left .4s ease-out;
        opacity: ${props => props.$compact ? '0' : '1'};
        visibility: ${props => props.$compact ? 'hidden' : 'visible'};

        ${props => props.$compact ? `
            background-color: ${props.theme.text.logo};
            position: absolute;
            left: 100%;
            color: white;
            padding: 4px 12px;
            border-radius: 14px;
        ` : ''}
    }

    > * {
        color: inherit;
    }

    &:hover {
        background-color: ${props => props.theme.sidebar.hover};
        color: ${props => props.theme.text.hover};

        > .text {
            ${props => props.$compact ? `
            opacity: 1;
            visibility: visible;
            left: calc(100% - 6px);
        ` : ''}
        }
    }

    &:active, &.active {
        background-color: ${props => props.theme.sidebar.active};
        color: ${props => props.theme.text.active};
    }
`

const NavItem = (props) => {
    const {path, icon, title, compact = false} = props;

    return (
        <Link to={path} $compact={compact}>
            <FontAwesomeIcon icon={icon} width={34}/>
            <span className={'text'}>{title}</span>
        </Link>
    )
}

NavItem.propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    compact: PropTypes.bool,
};

export default NavItem;