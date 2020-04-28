import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
        yhden henkilön yritys <br /> YHY Oy
        </h1>
      </header>
      <div className="bottomText">
        <p>
          yhden henkilön yritys Oy on liikeyritys takana näiden verkkosivustojen
        </p>
        <div className="sitesList">
          <ul>
            <li><a href="https://link-in.bio/" alt="Link-In.bio/">link-in.bio</a></li>
            <li><a href="https://resumelink.me/" alt="ResumeLink.me/">resumelink.me</a></li>
            <li><a href="https://linkisin.bio/" alt="LinkIsIn.bio/">linkisin.bio</a></li>
            <li><a href="https://linkisinbio.com/" alt="LinkIsInBio.com/">linkisinbio.com</a></li>
            <li><a href="https://link-in-profile.co/" alt="Link-In-Profile.co/">link-in-profile.co</a></li>
            <li><a href="https://link-in-profile.com/" alt="Link-In-Profile.com/">link-in-profile.com</a></li>
          </ul>
        </div>
        <p>jös sulla on jotain sanoa, GDPR/DMCA toivomus, tai muuta, lähetä mulle viesti <a href='mailto:contact@yhy.fi' alt="mail">contact@yhy.fi</a></p>
      </div>
      <footer className="appFooter">
        <p>©2020 yhy.fi/</p>
      </footer>
    </div>
  );
}

export default App;
