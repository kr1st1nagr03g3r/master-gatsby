import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  background: #333;
  background-size: 150em;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: #333;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  .est {
    font-size: 1.5em;
    align-self: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
  }

  .slices {
    font-size: 3.2em;
    letter-spacing: 2em;
  }
  .slicks {
    transform: scale(1.4);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
  }
  .letter {
    margin-top: 1rem;
    font-size: 5em;
    color: white;
    ${'' /* --scale: 1; */}
    display: inline-block;
    line-height: 0.6;
    &.P {
    }
    &.B {
    }
    &.T {
    }
  }
  span.slices {
    font-size: 1.5rem;
    letter-spacing: 0.15em;
  }
  h1 {
    margin-top: -40px;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <h1>
          <span className="slicks">
            <span className="letter P">P</span>
            <span className="letter B">B</span>
            <span className="letter T">T</span>
          </span>
          <span className="slices">Pediatric Brain Tumours</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
