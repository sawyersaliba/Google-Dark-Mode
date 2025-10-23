# Google Dark Mode
A uniform set of Tampermonkey userscripts for dark mode on various Google websites.

**Currently Supported:**
- [Google Calendar](https://github.com/sawyersaliba/google-dark-mode/blob/main/userscripts/google_calendar_dark.js)
- [Google Classroom](https://github.com/sawyersaliba/google-dark-mode/blob/main/userscripts/google_classroom_dark.js)

## Installation & Requirements
You will need to have the Tampermonkey extension installed for these to work. If you don't already have it, you can install the extension for your browser at https://tampermonkey.net.

To install the userscripts, download and extract the repository, then navigate to the `Utilities` tab in the Tampermonkey UI. Select the `Import from file` option, and make sure to enable them in the `Installed Userscripts` tab.

## Usage
Once the userscript is installed, you can customize various aesthetic parameters. The accent variable will change the main accent color of the UI, with more advanced color options available for further customization.

Make sure to read each userscript's description for more information on that specific file.
You can find the variable to change the accent color near the top of the file, and the others below it. Advanced options may vary.

Change the accent color here:
```js
const accent = '#0090ff';
```

Advanced color options:
```js
const mainBackground = '#0e0e0e';
const secondaryBackground = '#131313';
const mainText = '#d7d7d7';
const secondaryText = '#a7a7a7';
```
