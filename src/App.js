import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Footer, SchoNav as Nav } from 'schofield-main-components';
import { Container } from 'schofield-common-components';
import Home from './features/pages/home/Home';
import './App.css';
import { ThemeProvider, themes } from 'schofield-themes';

const TITLE = 'Portfolio';

const App = () => {
  let [state, updateState] = useState({
    themeName: 'dark',
    theme: themes.dark
  })

  const handleThemeToggle = () => {
    const name = (state.themeName === 'light') ? 'dark' : 'light';
    updateState({ theme: themes[name], themeName: name });
  };

  return (
    <Router>
      <ThemeProvider theme={state.theme}>
        <Container data-testid="app-container">
          <Nav handleThemeToggle={handleThemeToggle} />

          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer text={TITLE} />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
