import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }


.Collapsible {
    min-width: 100%;
    background-color: white;
  }
  
  
  .Collapsible__contentInner {
    padding: 10px;
    border: 1px solid lightGrey;
    border-top: 0;
  
    p {
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 20px;
  
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  .Collapsible__trigger {
    display: block;
    font-weight: 400;
    text-decoration: none;
    color: grey;
    position: relative;
    border: 1px solid white;
    padding: 10px;
    background: #138d93;
    color: white;
  
  
    &:after {
      font-family: 'FontAwesome';
      content: '\f107';
      position: absolute;
      right: 10px;
      top: 10px;
      display: block;
      transition: transform 300ms;
    }
  
    &.is-open {
      &:after {
        transform: rotateZ(180deg);
      }
    }
  
    &.is-disabled {
      opacity: 0.5;
      background-color: grey;
    }
  }
  
  .CustomTriggerCSS {
    background-color: lightcoral;
    transition: background-color 200ms ease;
    
    
  }
  
  .CustomTriggerCSS--open {
    background-color: darkslateblue;
  }
  
  .Collapsible__custom-sibling {
    padding: 5px;
    font-size: 18px;
    background-color: #116772;
    color: black;
  }   
`;
