import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
// add normalize to reset the css / html
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  max-width: 964px;
  margin: 0 auto;
  /* scales the margin top value up and down with a min and max value (clamp) */
  margin-top: clamp(1rem, 10vw, 12rem);
  background: #333;
  background-size: 1500px;
  /* we add padding values twice in case the browser does not read "clamp"*/
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

// styles the div on the layout. Use these if they're not repeated again. Use your own style.js if the style is applied more than once
const ContentStyles = styled.div`
  background: #333;
  padding: 2rem;
`;

// children passes props
export default function Layout({ children }) {
  return (
    /* If you use a div in this case so we can return multiple elements, another way to do this is the react: <> </> command instead of a div.
    /* prettierignore */
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
