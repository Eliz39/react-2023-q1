import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Form from './pages/FormPage';
import { URLS } from './utils/urls';

class App extends Component {
  render() {
    return (
      <Routes>
        {/*eslint-disable-next-line*/}
        {/* @ts-ignore */}
        <Route path={URLS.layout} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={URLS.about} element={<About />} />
          <Route path={URLS.form} element={<Form />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

class WrappedApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default WrappedApp;
