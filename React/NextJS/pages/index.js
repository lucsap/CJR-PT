import appConfig from "../config.json";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

function Título(props) {
  console.log(props.children);
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['400']};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

// Componentes React
function HomePage() {
  // JSX
  return (
    <div>
      <GlobalStyle />
      <Título tag="h2">Boas vindas de volta!</Título>
      <h2>Discord - Alura Matrix</h2>
    </div>
  );
}

export default HomePage;
