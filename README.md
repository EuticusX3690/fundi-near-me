# Fundi Near Me: how to put it online and make the APK

## Part 1: Put it on GitHub (free)
1. Sign in at github.com and tap **New repository**. Name it `fundi-near-me`. Make it **Public**.
2. Upload ALL files and the `icons` folder (keep the same names):
   index.html, fundis.json, manifest.json, sw.js, icons/
3. Go to **Settings > Pages**. Under "Branch" choose **main** and **/ (root)**, then **Save**.
4. Wait 1 to 2 minutes. Your app is live at:
   https://YOUR-USERNAME.github.io/fundi-near-me/

## Part 2: Add or change fundis
Open `fundis.json` on GitHub, tap the pencil, edit, and **Commit**. Copy this format:

{
  "name": "John",
  "trade": "Plumber",
  "area": "Kabale",
  "phone": "2567XXXXXXXX",
  "price": 20000,
  "pay": ["Cash", "MTN MoMo", "Airtel Money"],
  "services": ["Pipe fitting", "Leak repair"],
  "photos": ["work/john1.jpg", "work/john2.jpg"],
  "about": "Short line about the fundi.",
  "verified": true
}

- Put a comma between fundis, and no comma after the last one.
- `trade` must be one of: Plumber, Electrician, Phone repair, Computer repair, Mechanic, Welder, Handyman, Cleaning, Fumigation, Delivery.
- Photos: make a folder called `work` in the repo, upload the pictures, and write their paths in "photos".
- Set "verified": true only after the fundi has paid.

## Part 3: Make the APK
1. Go to **pwabuilder.com** and paste your app link (from Part 1, step 4). Tap **Start**.
2. Tap **Package for stores**, then **Android**.
3. Fill the form (app name Fundi Near Me, a package ID like `com.euticus.fundinearme`), then **Generate**.
4. Download the zip. It has an `.apk` file you can install on your phone and share.
5. Keep the signing key file and its password safe. You need them for every future update.

## Icons
- `icons/app-512.png` and `app-192.png` are the app icon.
- The 10 trade icons are in `icons/` (plumber.png, electrician.png, ...).
