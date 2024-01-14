import React from 'react'
import RouterAdress from './RouterAdress/RouterAdress'
import Servise from './Servise/Servise';

const Router = () => {
  return (
    <section className="nav">
      <div className="container">
              <RouterAdress></RouterAdress>
              <Servise></Servise>
      </div>
    </section>
  );
}

export default Router