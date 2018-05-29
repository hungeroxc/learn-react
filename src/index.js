import React, {Component} from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import getRouter from './router'
import store from './redux/store'

renderWithHotReload(getRouter())

if (module.hot) {
    module.hot.accept('./router/index.js', () => {
        const getRouter = require('./router/index.js').default
        renderWithHotReload(getRouter())
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}

