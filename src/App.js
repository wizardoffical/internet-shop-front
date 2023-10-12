import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userApi';
import { Spinner } from 'react-bootstrap';
import Footer from './components/Footer/Footer';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [user]);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole) {
      user.setUser({ ...user.user, role: userRole });
    }
  }, [user]);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
  );
})

export default App;