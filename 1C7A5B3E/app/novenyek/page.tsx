export default function NovenyekPage() {
  return (
    <>
      <h1 style={{textAlign: "center"}}>Növények listája</h1>
      <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Típus</th>
            <th>Utolsó Locsolás</th>
            <th>Locsolási Ciklus (nap)</th>
            <th>Szükséges Fény</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>Szobai Futóka</td>
            <td>Trópusi</td>
            <td>2025-10-14</td>
            <td>7</td>
            <td>Félárnyék</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Bambuszpálma</td>
            <td>Pálma</td>
            <td>2025-10-09</td>
            <td>10</td>
            <td>Világos, de nem közvetlen nap</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Elefántláb</td>
            <td>Pozsgás</td>
            <td>2025-10-01</td>
            <td>21</td>
            <td>Sok napfény</td>
        </tr>
        <tr>
            <td>104</td>
            <td>Kúszó Fikusz</td>
            <td>Virágzó</td>
            <td>2025-10-16</td>
            <td>5</td>
            <td>Világos, de árnyékos</td>
        </tr>
        <tr>
            <td>105</td>
            <td>Anyósnyelv</td>
            <td>Légtisztító</td>
            <td>2025-10-12</td>
            <td>14</td>
            <td>Közepes fény, jól tűri a sötétséget</td>
        </tr>
    </tbody>
</table>
    </>
  );
}