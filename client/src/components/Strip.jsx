import React from 'react';
import '../index.css'; // Import the CSS file where your styles are defined

// VerticalMovingText (Strip) component
const VerticalMovingText = () => {
    return (
      // Adjust classes for absolute positioning
      <div className="absolute right-0 top-0 bottom-0 vertical-strip bg-gray-200">
        <div className="moving-text flex gap-6 ">
          <span className='min-w-fit text-nowrap'>
            ~ Empowering Your Voices wherever you are ~
          </span>
          <span className='min-w-fit text-nowrap'>
            ~ Empowering Your Voices wherever you are ~
          </span>
          <span className='min-w-fit text-nowrap'>
            ~ Empowering Your Voices wherever you are ~
          </span>
        </div>
      </div>
    );
  };
  
  export default VerticalMovingText;
  