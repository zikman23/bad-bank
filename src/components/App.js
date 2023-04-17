import React from 'react';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';

import Home from './Home';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import { UserContext, getLoggedIn } from './Context';

export default function App() {
  const [pageHash, setPageHash] = React.useState(() => (window.location.hash === '' ? '#/' : window.location.hash));

  const menuOptions = [
    { hash: '#/', desc: 'Home', default: true },
    { hash: '#/create-account/', desc: 'Create Account' },
    { hash: '#/deposit/', desc: 'Deposit' },
    { hash: '#/withdraw/', desc: 'Withdraw' },
    { hash: '#/all-data/', desc: 'All Data' },
  ];

  const menuElements = menuOptions.map((o, i) => (
    <li key={i} className={`"nav-item" ${pageHash === o.hash ? 'active' : ''}`}>
      <Link to={o.hash.slice(1)} className={`nav-link ps-2`} onClick={() => setPageHash(o.hash)}>
        {o.desc}
      </Link>
    </li>
  ));

  return (
    <div id="content">
      <HashRouter>
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-2">
          <a className="navbar-brand ps-2" href="#/">
            Bad Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">{menuElements}</ul>
          </div>
        </nav>
        <div id="mainblock" className="my-2 mx-4 p-4">
          <UserContext.Provider value={{ user: getLoggedIn() }}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/create-account/" element={<CreateAccount />} />
              <Route path="/deposit/" element={<Deposit />} />
              <Route path="/withdraw/" element={<Withdraw />} />
              <Route path="/all-data/" element={<AllData />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </HashRouter>

      <footer>
        <div className="d-flex justify-content-between px-2 py-4 my-4 border-top fs-7">
          <p className="text-muted">
            <small>© 2023 Ahmad Karimi, MIT xPro</small>
          </p>
          {/* Project made by <a href="https://zikman23.github.io/">Ahmad</a> for MIT xPro MERN stack course, Fall 2022. */}
        </div>
      </footer>
    </div>
  );
}
