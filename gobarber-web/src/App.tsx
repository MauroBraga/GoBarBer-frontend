import React from 'react';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

import SignIn from './pages/SignIn/index';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Mauro' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
