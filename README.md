# ITE130 – Vibe Coding & Webbutveckling (MDU)

Välkommen till projektet för kursen **ITE130** vid **Mälardalens universitet (MDU)**! Denna uppgift går ut på att utforska *vibe coding* med hjälp av AI-verktyg (som GitHub Copilot) för att snabbt bygga, styla och strukturera en modern webbsida anpassad för studenter.

## 🎯 Uppgiftsbeskrivning & Steg

Följ stegen nedan för att genomföra laborationen/uppgiften:

### 1. Grundläggande webbsida med Vibe Coding

* Skapa en första prototyp av en webbsida riktad till studenter som läser kursen **ITE130** på MDU.

* Använd AI-prompter (*vibe coding*) för att generera grundstrukturen i HTML.

### 2. Integrera Bootstrap 4.6

* Utöka webbsidan med stöd för ramverket **Bootstrap 4.6** (via CDN för CSS och JS).

* Använd Bootstraps komponenter (t.ex. navbar, jumbotron/hero-sektion, kort och knappar) för att ge sidan en stabil layout.

### 3. Responsiv design

* Säkerställ att webbsidan är fullt **responsiv** och fungerar lika bra på mobilen som på en datorskärm.

* Använd Bootstraps gridsystem (`container`, `row`, `col-*`) samt rätt `viewport`-metatagg.

### 4. AI-genererat innehåll: "En student berättar"

* Låt GitHub Copilot (eller liknande AI-assistent) generera en inspirerande sektion eller ett citatblock under rubriken **"En student berättar"**.

* Texten ska spegla hur det är att plugga på MDU och läsa ITE130.

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