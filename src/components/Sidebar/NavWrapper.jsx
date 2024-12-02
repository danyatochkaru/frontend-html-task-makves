import PropTypes from "prop-types";
import styled from "styled-components";

const NavList = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    row-gap: 8px;

    flex: 1;

    &:nth-last-of-type(1) {
        flex: 0;
    }
`

const NavWrapper = (props) => {
    const {children} = props;

    return (
        <NavList>{children}</NavList>
    )
}

NavWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default NavWrapper;