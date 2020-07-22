import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>A fun, responsive, react app written with some amateur Javascript :)</p>
        </div>
      </header>
      <h3> Welcome to my website :)</h3>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <Personal />
    </article>
  </Main>
);

export default Index;
