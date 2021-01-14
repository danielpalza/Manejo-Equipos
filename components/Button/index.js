import React, { useRef, useState } from 'react';


export default function ButtonWave(props) {
  const [state, setState] = useState('');
  const [rippleStyle, setRippleStyle] = useState({});
  let timerId;
  const ripple = useRef(null);
  const button = useRef(null);

  const onMouseDown = (e) => {
    setState('');
    clearTimeout(timerId);
    const size = button.current.offsetWidth;
    const pos = button.current.getBoundingClientRect();
    const x = e.pageX - pos.left - size;
    const y = e.pageY - pos.top - size;

    const newRippleStyle = {
      top: `${y}px`,
      left: `${x}px`,
      width: `${size * 2}px`,
      height: `${size * 2}px`,
    };

    setRippleStyle(newRippleStyle);

    setState('ripple-start ripple-active');
    timerId = setTimeout(() => {
      setState('');
    }, 500);
  };

  return (
    <button
      ref={button}
      className="MaterialRippleButton_container"
      onClick={props.funcion}
      onMouseDown={onMouseDown}
      
    >
      <span
        ref={ripple}
        style={rippleStyle}
        className={`ripple ${state}`}
      ></span>
      {props.message}
    </button>
  );
}
