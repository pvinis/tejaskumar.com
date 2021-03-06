import { css } from "@emotion/core";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    text-rendering: optimizeLegibility;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    overflow-x: hidden;
  }

  a:link,
  a:visited {
    color: #0076c5;
    font-weight: bold;
    text-decoration: underline;
  }

  a:hover {
    color: #e00028;
  }

  .twitter-tweet {
    margin: 64px auto !important;
  }

  p {
    line-height: 1.9;
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 0;
  }

  h3 {
    text-transform: uppercase;
    margin-top: 40px;
    margin-bottom: 8px;
  }

  h1,
  h2,
  h3 {
    font-family: "DM Sans";
  }

  li {
    margin: 16px auto;
    line-height: 1.6;
  }

  blockquote {
    font-family: "Gloria Hallelujah";
    border-left: 4px solid #ddd;
    padding-left: 32px;
    margin: 32px 0;
    font-style: italic;
    color: #914200;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background: #292f36;
      color: white;
    }
    blockquote {
      color: #ffa861;
    }
    a:link,
    a:visited {
      color: #8ec1ec;
    }
    a:hover {
      color: #f8a5b4;
    }
  }
`;
