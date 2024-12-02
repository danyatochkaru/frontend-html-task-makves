import React from 'react'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import {Route, Routes} from "react-router";
import {ThemeProvider} from "styled-components";

library.add(fas);

const routes = [
    {title: 'Home', icon: 'fas-solid fa-house', path: '/'},
    {title: 'Sales', icon: 'chart-line', path: '/sales'},
    {title: 'Costs', icon: 'chart-column', path: '/costs'},
    {title: 'Payments', icon: 'wallet', path: '/payments'},
    {title: 'Finances', icon: 'chart-pie', path: '/finances'},
    {title: 'Messages', icon: 'envelope', path: '/messages'},
];

const bottomRoutes = [
    {title: 'Settings', icon: 'sliders', path: '/settings'},
    {title: 'Support', icon: 'phone-volume', path: '/support'},
];

const themes = {
    light: {
        sidebar: {
            default: 'var(--color-sidebar-background-light-default)',
            hover: 'var(--color-sidebar-background-light-hover)',
            active: 'var(--color-sidebar-background-light-active)'
        },
        text: {
            logo: 'var(--color-text-logo-light-default)',
            default: 'var(--color-text-light-default)',
            hover: 'var(--color-text-light-hover)',
            active: 'var(--color-text-light-active)'
        },
        button_background: {
            default: 'var(--color-button-background-light-default)',
            active: 'var(--color-button-background-light-active)'
        }
    },
    dark: {
        sidebar: {
            default: 'var(--color-sidebar-background-dark-default)',
            hover: 'var(--color-sidebar-background-dark-hover)',
            active: 'var(--color-sidebar-background-dark-active)'
        },
        text: {
            logo: 'var(--color-text-logo-dark-default)',
            default: 'var(--color-text-dark-default)',
            hover: 'var(--color-text-dark-hover)',
            active: 'var(--color-text-dark-active)'
        },
        button_background: {
            default: 'var(--color-button-background-dark-default)',
            active: 'var(--color-button-background-dark-active)'
        }
    }
}

export default class App extends React.Component {
    render() {
        let themeScheme = 'light'

        return (
            <ThemeProvider theme={themes[themeScheme]}>
                <Routes>
                    <Route path="/"
                           element={<Sidebar color={themeScheme} routes={routes} bottomRoutes={bottomRoutes}/>}>
                        {[
                            ...routes,
                            ...bottomRoutes
                        ].map((r) => (
                            <Route key={r.title} path={r.path} element={<div><h2>{r.title} page</h2></div>}/>
                        ))}
                    </Route>
                </Routes>
            </ThemeProvider>
        )
    }
}
