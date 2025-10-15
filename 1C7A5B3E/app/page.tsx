export default function Page() {
  return (
    <>
      <h1 style={{textAlign: "center"}}>Főoldal</h1>
      <p>Rövid leírás rólunk az odajutáshoz kattintson a Rólunk gombra.</p>
      <p>Növenyek adatait tároljuk Html táblázatban a Növenyek gombra kattintva lehet oda jutni.</p>
      <a href="/rolunk"><button style={{ backgroundColor: "rgba(0,136,169,1)", color: "white", borderRadius: "25px",  padding: "5px 15px" }}>Rólunk</button></a>
      <a href="/novenyek"><button style={{ backgroundColor: "rgba(0,136,169,1)", color: "white", borderRadius: "25px",  padding: "5px 15px" }}>Növények</button></a>
    </>
  );
}