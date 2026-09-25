# JavaScript Basics

A small JavaScript practice program containing `Variables.js`.

## Requirements

- Node.js LTS (includes npm)
- PowerShell, Command Prompt, or a terminal

This program currently has no external npm dependencies, so `npm install` is not required.

## Install Node.js

Install the Node.js LTS release from:

<https://nodejs.org>

On Windows, download and run the Windows Installer (`.msi`). Keep the default options, including the option to add Node.js to PATH.

After installation, restart VS Code and open a new terminal. Confirm the installation:

```powershell
node --version
npm --version
```

## Run the program

From the project root (`C:\JSAndReact`), run:

```powershell
node .\JSBasic\Variables.js
```

Or, from inside the `JSBasic` folder, run:

```powershell
Set-Location C:\JSAndReact\JSBasic
node .\Variables.js
```

The filename is `Variables.js` with an `s`.

## Adding packages later

If this project starts using npm packages in the future, initialize a package file from the project root:

```powershell
Set-Location C:\JSAndReact
npm init -y
```

Install a package with:

```powershell
npm install <package-name>
```

Then run the program again with:

```powershell
node .\JSBasic\Variables.js
```
