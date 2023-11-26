import React from 'react';

const Layout = ({ children }) => {
  return (
    <main className="h-screen flex items-center justify-center bg-dark-violet ">
      <div className="absolute w-32 h-32 bg-olive rounded-full animate-move1 filter blur-lg"
        style={{animationDelay: '0', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-light-violet rounded-full animate-move1 filter blur-lg"
        style={{animationDelay: '-6s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-metal rounded-full animate-move1 filter blur-lg"
        style={{animationDelay: '-12s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-olive rounded-full animate-move1 filter blur-lg"
        style={{animationDelay: '-18s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-light-violet rounded-full animate-move1 filter blur-lg"
        style={{animationDelay: '-24s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-metal rounded-full animate-move1 filter blur-lg"
        style={{animationDelay: '-30s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-olive rounded-full animate-move1 filter blur-lg"
        style={{animationDelay: '-36s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-light-violet rounded-full animate-move1 filter blur-lg"
        style={{animationDelay: '-42s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-metal rounded-full animate-move1 filter blur-lg"
        style={{animationDelay: '-50s', opacity: '0.5'}}>
      </div>

      <div className="absolute w-32 h-32 bg-olive rounded-full animate-move2 filter blur-lg"
        style={{animationDelay: '0', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-light-violet rounded-full animate-move2 filter blur-lg"
        style={{animationDelay: '-6s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-metal rounded-full animate-move2 filter blur-lg"
        style={{animationDelay: '-12s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-olive rounded-full animate-move2 filter blur-lg"
        style={{animationDelay: '-18s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-light-violet rounded-full animate-move2 filter blur-lg"
        style={{animationDelay: '-24s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-metal rounded-full animate-move2 filter blur-lg"
        style={{animationDelay: '-30s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-olive rounded-full animate-move2 filter blur-lg"
        style={{animationDelay: '-36s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-light-violet rounded-full animate-move2 filter blur-lg"
        style={{animationDelay: '-42s', opacity: '0.5'}}>
      </div>
      <div className="absolute w-32 h-32 bg-metal rounded-full animate-move2 filter blur-lg"
        style={{animationDelay: '-50s', opacity: '0.5'}}>
      </div>
        {children}

    </main>
  );
};

export default Layout;
