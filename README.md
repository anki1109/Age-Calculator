# Age-Calculator
Click on the date input to choose your birthday. The age is calculated based on the date.

This is a tiny static web page that calculates a person's age from the selected birthday.

Important notes
- You can open `index.html` directly in a browser — Node is not required to view the page.
- For development, you can optionally use Node / npm to run a tiny static server (convenient when testing locally).

Recent fix
- Fixed an issue where the page read the wrong attribute from the date input (was using `ariaValueMax` instead of `value`). That could produce invalid ages — the calculation now properly handles empty input, future dates, and same-day birthdays.

Run locally (optional)
1. Install Node.js and npm if you don't have them: https://nodejs.org/
2. In this repo, run:

```
npm install    # installs dev-dependencies (http-server + helper tools)
npm start      # starts a dev server and automatically opens your default browser at http://localhost:8080
```

Or just open `index.html` in your browser.

Command to run this locally - npx concurrently "npx http-server . -p 8080 -c-1" "npx wait-on http://localhost:8080 && npx open-cli http://localhost:8080"
