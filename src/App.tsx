import React, {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';

import { CreateCharacterForm } from './components/admin/CreateCharacterForm';
import { CreateItemForm } from './components/admin/CreateItemForm';
import { Navigation } from './feature/Navigation';
import { AuthContext } from './context/AuthContext';

import { AboutPage } from './pages/AboutPage';
import { AdminPage } from './pages/AdminPage';
import { AuthPage } from './pages/AuthPage';
import { CharactersPage } from './pages/CharactersPage';
import { GuidesPage } from './pages/GuidesPage';
import { HomePage } from './pages/HomePage';
import { ItemsPage } from './pages/ItemsPage';
import { LorePage } from './pages/LorePage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  const {isAuth} = useContext(AuthContext)

  function privateRoute(component: JSX.Element) {
      if(!isAuth) return <NotFoundPage />
      return component 
  }

  return (
    <>
      <div className='top-0 left-0 right-0
        h-[42px]
        sm:text-xl
        md:text-xl sm:h-[60px]
        '></div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/items" element={<ItemsPage/>}/>
        <Route path="/guides" element={<GuidesPage/>}/>
        <Route path="/lore" element={<LorePage/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/admin" element={privateRoute(<AdminPage />)}>
          <Route path='character' element={<CreateCharacterForm/>}/>
          <Route path='item' element={<CreateItemForm/>}/>
        </Route>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
