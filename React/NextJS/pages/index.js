function GlobalStyle() {
  return <style jsx>{`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
  `}</style>;
}

function Título(props) {
  console.log(props.children);
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
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
      {/* <GlobalStyle /> */}
      <Título tag="h2">Boas vindas de volta!</Título>
      <h2>Discord - Alura Matrix</h2>
    </div>
  );
}

export default HomePage;
