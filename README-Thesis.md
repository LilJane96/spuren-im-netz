# README - Thesis Branch

Dieses Dokument beschreibt die Schritte zur Ausführung der Anwendung sowie der Tests im Branch `thesis-Liljana-Stefanelli`.

## Anwendung ausführen

1. **Projekt klonen**
2. **Auf den Branch wechseln**
   ```bash
   git checkout thesis-Liljana-Stefanelli
   ```
3. **Umgebungsvariablen setzen**
   - Die Datei `.env.example` in `.env` umbenennen.
   - Da es sich um eine Testphase handelt, sind die Umgebungsvariablen auf GitHub sichtbar.

4. **Abhängigkeiten installieren und Anwendung starten**
   ```bash
   cd my-app
   npm install
   npm run build
   npm start
   ```
5. **Anwendung im Browser öffnen**
   - Die Anwendung läuft auf: [http://localhost:3000](http://localhost:3000)
   - Beim Klick auf **"Spiel starten"** öffnet sich ein Popup zur Registrierung.
   - **Registrierung:**
     - Name und Klasse können frei gewählt werden.
     - `courseId`: **994spu31**
   - Nach der Registrierung öffnet sich das Launch-Fenster.
     - Entweder die Anwendung normal nutzen oder den Kurs über SCORM Cloud starten (Ergebnis im Dashboard bleibt gleich).

6. **Dashboard-Link**
   - Das Dashboard ist unter [http://localhost:3000/dashboard/](http://localhost:3000/dashboard/) erreichbar.
   - Die jeweiligen Ergebnisse einer **Unit** können durch Klicken auf die entsprechende Card geöffnet werden.

---

## Jest-Tests ausführen

1. Ein **zweites Terminal** öffnen (die Anwendung muss weiterhin auf `localhost:3000` laufen).
2. Ins Unterverzeichnis `my-app` navigieren:
   ```bash
   cd my-app
   ```
3. Tests ausführen:
   ```bash
   npm test  # Alle Tests ausführen
   ```
   oder einen spezifischen Test, z. B.:
   ```bash
   npx jest registration.test.js
   ```

---

## Cypress-Tests ausführen

⚠ **Hinweis:** Es gibt eine Begrenzung auf **10 Registrierungen**. Die Tests wurden deswegen auf **4 Registrierungen** begrenzt. Falls Tests fehlschlagen, könnte es daran liegen, dass keine weiteren Registrierungen möglich sind.

1. Ein **zweites Terminal** öffnen (die Anwendung muss weiterhin auf `localhost:3000` laufen).
2. Ins Unterverzeichnis `my-app` navigieren:
   ```bash
   cd my-app
   ```
3. Cypress starten:
   ```bash
   npx cypress open
   ```
4. Im geöffneten Fenster:
   - **E2E Testing** auswählen
   - Den gewünschten **Browser** wählen (z. B. Chrome)
   - Den Test `class_simulation.cy.js` ausführen
   
5. Während des Tests öffnet sich ein Fenster mit dem **SCORM Cloud Launch**. Dieses kann geschlossen werden, da es für den Test keine Relevanz hat.

