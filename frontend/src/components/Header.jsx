import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/logo.json';
import { useState } from 'react';

function Header() {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="w-full p-2 bg-white border-b shadow-md fixed top-0 left-0 z-50 flex items-center">
      <Link
        to="/"
        className="flex items-center space-x-2"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="w-20 h-20 hover:cursor-pointer">
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay={false}
            play={hovered}
          />
        </div>
        <span className="text-lg font-semibold text-primary">Greeting Generator</span>
      </Link>
    </header>
  );
}

export default Header;
