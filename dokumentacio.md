# 1C7A5B3E - Növény Napló - Kercsó Norbert

Növény Napló frontend projektmunkára.
***

## Projekt Téma
A Növény Napló rendszerezve jeleníti meg a látogatók számára a növények adatait (ID, Név, Locsolási ciklus, Fényigény). A weboldal átlátható módon biztosít gyors hozzáférés a növényekkel kapcsolatos adatokhoz.
***

## Oldalak
1.  **Főoldal:** A további oldalak összekötésére szolgál, informál mit merre találunk.
2.  **Növények Listája:** Az összes növény adatának megjelenítése.
3.  **Rólunk:** Egy rólunk oldal, ismerteti miért készült a feladat.
***

## Projekt struktúra
```
app/
├── page.tsx                    # Főoldal
├── novenyek/
│   └── page.tsx               # Növények Listája
├── rolunk/
│   └── page.tsx               # Rólunk
├── layout.tsx                 
└── globals.css                # Globális stílusok
```



## Használt Programok és Nyelvek
| Típus | Nyelv |
| --- | --- |
| **Keretrendszer** | Next.js (React) |
| **Nyelv** | JavaScript/TypeScript |
| **Környezet** | Node.js |
| **Kódszerkesztő** | Visual Studio Code |

## Mesterséges inteligencia:

**Kérés:** Generálj nekem növény adatokat amiket bele tehetek egy html táblázatba.

**Kapott válasz:**
Természetesen! Készítettem egy listát kitalált növények adataiból, amelyeket közvetlenül beilleszthetsz egy HTML táblázatba.

**Növény Adatok HTML Táblázathoz**
```html
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
```