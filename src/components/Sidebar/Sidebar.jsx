import {useState} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {NavItem, NavWrapper, SidebarHeader} from ".";
import {Outlet} from "react-router";
import styled from "styled-components";

const RootWrapper = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    background-color: ${props => props.theme.button_background.active};
    color: ${props => props.theme.text.default};
`;

const SidebarWrapper = styled.div`
    width: ${props => props.$compact ? '44px' : '200px'};
    height: calc(100dvh - 2 * 24px);

    display: flex;
    flex-direction: column;
    row-gap: 12px;
    border-radius: 14px;

    padding: 12px;
    margin: 12px ${props => props.$compact ? '44px' : '12px'} 12px 12px;

    transition: all .3s;

    background-color: ${props => props.theme.sidebar.default};
`


const Sidebar = (props) => {
    const {routes, bottomRoutes} = props;
    const [isOpened, setIsOpened] = useState(true);
    const containerClassnames = classnames('sidebar', {opened: isOpened});

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <RootWrapper>
            <SidebarWrapper className={containerClassnames} $compact={!isOpened}>
                <SidebarHeader
                    isOpened={isOpened}
                    toggleSidebar={toggleSidebar}
                />
                <NavWrapper>
                    {
                        routes.map(route => (
                            <NavItem
                                key={route.title}
                                path={route.path}
                                icon={route.icon}
                                title={route.title}
                                compact={!isOpened}
                            />
                        ))
                    }
                </NavWrapper>
                <NavWrapper>
                    {
                        bottomRoutes.map(route => (
                            <NavItem
                                key={route.title}
                                title={route.title}
                                path={route.path}
                                icon={route.icon}
                                compact={!isOpened}
                            />
                        ))
                    }
                </NavWrapper>
            </SidebarWrapper>
            <Outlet/>
        </RootWrapper>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
        icon: PropTypes.string
    })),
    bottomRoutes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
        icon: PropTypes.string
    }))
};

export default Sidebar;
