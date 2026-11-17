# ITE130 – Interaktiva användargränssnitt (MDU)

Det här projektet innehåller en webbsida framtagen som en övning i *vibe coding* för kursen **ITE130** vid **Mälardalens universitet (MDU)**. Kursens officiella namn är **Interaktiva användargränssnitt**. Webbsidesuppgiften är ett sätt att öva på att skapa ett digitalt gränssnitt och ska inte ses som en fullständig beskrivning av kursens innehåll.

## Om kursen

Uppgifterna nedan om kursens omfattning, innehåll och examination sammanfattar MDU:s officiella kursplan. Kursplanen gäller från och med **höstterminen 2026**.

| Kursfakta | Information |
| :--- | :--- |
| **Kurskod och namn** | ITE130 – Interaktiva användargränssnitt |
| **Omfattning** | 15 hp |
| **Nivå** | Grundnivå, G1N |
| **Huvudområde** | Informationsdesign |
| **Institution** | Institutionen för hälsovetenskap, innovation och design |
| **Behörighet** | Grundläggande behörighet samt Engelska 6 och Samhällskunskap 1b eller 1a1+1a2. Alternativt Engelska nivå 2 och Samhällskunskap nivå 1b eller 1a2. |

Kursen behandlar digitala system och gränssnitt, interaktionsdesign samt hur gränssnitt och system relaterar till användare och sammanhang. Studenter arbetar med teorier, verktyg och metoder för att planera och skapa prototyper av interaktiva system, med visuella användargränssnitt i fokus. Även samspelet mellan mänskliga, tekniska och samhälleliga aspekter ingår.

Efter kursen ska studenten bland annat kunna redogöra för digitala systems uppbyggnad i relation till funktion, användare och kontext, beskriva funktioners logik och samband, utforma visuella gränssnitt med stöd av interaktionsdesignteori, använda praktiska verktyg inom interaktionsdesign och beskriva digitala systems samspel med mänskliga, tekniska och samhälleliga aspekter.

### Examination och betyg

| Moment | Omfattning | Betygsskala |
| :--- | :--- | :--- |
| Inlämningsuppgift (INL1) | 3 hp | U, G, VG |
| Inlämningsuppgift (INL2) | 4,5 hp | U, G, VG |
| Laboration (LAB1) | 4,5 hp | U, G |
| Projekt (PRO1) | 3 hp | U, G |

Kursens samlade betygsskala är **Underkänd (U), Godkänd (G) och Väl godkänd (VG)**. Kursen överlappar 7,5 hp med ITE200 Digitala system.

Läs hela [den officiella kursplanen på MDU:s webbplats](https://www.mdu.se/utbildning/kursplan?id=68f1a521-c9d1-11f0-a255-650837bd40cf) för fullständiga lärandemål, villkor och aktuell kurslitteratur.

## 🎯 Uppgiftsbeskrivning & Steg

Följ stegen nedan för att genomföra webbsidesövningen. Övningen använder vibe coding och webbutveckling som ett praktiskt sätt att utforska hur ett digitalt gränssnitt kan utformas.

### 1. Grundläggande webbsida med Vibe Coding

* Skapa en första prototyp av en webbsida riktad till studenter som läser **Interaktiva användargränssnitt (ITE130)** på MDU.

* Använd AI-prompter (*vibe coding*) för att generera grundstrukturen i HTML.

### 2. Integrera Bootstrap 4.6

* Utöka webbsidan med stöd för ramverket **Bootstrap 4.6** (via CDN för CSS och JS).

* Använd Bootstraps komponenter (t.ex. navbar, jumbotron/hero-sektion, kort och knappar) för att ge sidan en stabil layout.

### 3. Responsiv design

* Säkerställ att webbsidan är fullt **responsiv** och fungerar lika bra på mobilen som på en datorskärm.

* Använd Bootstraps gridsystem (`container`, `row`, `col-*`) samt rätt `viewport`-metatagg.

### 4. AI-genererat innehåll: "En student berättar"

* Låt GitHub Copilot (eller liknande AI-assistent) generera en inspirerande sektion eller ett citatblock under rubriken **"En student berättar"**.

* Texten ska vara ett fiktivt, AI-genererat exempel och spegla studentperspektiv på att utforska gränssnitt och interaktionsdesign i ITE130. Presentera det inte som ett verifierat studentomdöme.

### 5. MDU-färgtema

* Ge sidan en tydlig visuell identitet kopplad till **Mälardalens universitet**.

* Implementera en anpassad CSS-fil (t.ex. `style.css`) med MDU:s profilfärger enligt paletten nedan:

| Färgroll | Beskrivning | Hex-kod |
| :--- | :--- | :--- |
| **Primär bakgrund / Header** | Djup skogsgrön (MDU Grön) | `#003E2E` |
| **Sidbakgrund** | Varm beige / benvit | `#FAF5EE` |
| **Accentfärg / Knappar & Logotyp** | MDU Orange | `#EA5400` |
| **Primär textfärg** | Svart / Mörkgrå | `#1A1A1A` |
| **Text på mörk bakgrund** | Vit | `#FFFFFF` |

#### Exempel på CSS-variabler att lägga i `style.css`:
```css
:root {
  --mdu-green: #003E2E;
  --mdu-beige: #FAF5EE;
  --mdu-orange: #EA5400;
  --mdu-dark: #1A1A1A;
  --mdu-white: #FFFFFF;
}
```

### 6. Faktaruta om Git

* Skapa en tydlig och snygg **faktaruta** (t.ex. med hjälp av ett Bootstrap `card` eller `alert`) som förklarar grunderna i **Git** och versionshantering – ett oumbärligt verktyg för alla IT-studenter.

### 7. Kodkommentarer med Copilot

* Be Copilot gå igenom din HTML- och CSS-kod och lägga till tydliga, pedagogiska **kommentarer** som förklarar vad de olika sektionerna och klasserna gör, så att koden blir lättläst för andra.

### 8. Låt fantasin flöda! 🚀

* Nu är det dags att sätta din egen prägel på sidan! Lägg till egna funktioner, Easter eggs, en interaktiv kurskalkylator, ett schema, mörkt läge (dark mode) eller roliga animationer. Bara fantasin sätter gränser!

## 🛠️ Teknisk stack

* **HTML5**

* **CSS3** (Egen styling för MDU-tema)

* **Bootstrap 4.6**

* **AI-assistent:** GitHub Copilot

## 🚀 Kom igång

1. Klona detta repository till din lokala dator:

   ```bash
   git clone <din-repo-länk>
   ```

2. Öppna projektmappen i **Visual Studio Code**.

3. Se till att du har **GitHub Copilot** aktiverat.

4. Öppna `index.html` i din webbläsare (gärna via tillägget *Live Server*) och börja koda!

*Skapad för kursen ITE130 vid Mälardalens universitet.*