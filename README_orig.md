# mapboxgljs-starter

This is a quick-start project for getting up and running with MapboxGLJS fast. Forked from [@dayjournal](https://github.com/dayjournal/mapboxgljs-starter), who did all of the actual hard work. See `README_orig.md` for his original notes.

These instructions assume you have no familiarity with coding. Skip to **Usage** for the startup commands.

## Open a console window

In windows, this is your Command Prompt or sometimes PowerShell. If you've never used a command prompt before, [this article](https://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything) can help you get started.

## Install Node

This app uses NodeJS, which provides some magic. Use the [links on the NodeJS website](https://nodejs.org/en/) to install. Either LTS or Current should work. (Another option is to use [NVM](https://github.com/creationix/nvm#installation).)

## Clone this repo

If you [install git first](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), use this command in the command line:

```
git clone https://github.com/ajzeigert/mapboxgljs-starter.git
```

If you don't have git, you can just download a Zip of this repo from the **Clone or download** button above.

## Usage

Change to the directory:

```
cd mapboxgljs-starter
```

Install packages:

```
npm install
```

Run the dev server. This will host a version of the project at `http://localhost:8080` that you can access via your browser. It will update automatically every time you make changes to your source code.

```
npm run dev
```

Build a production version. This will create a folder of HTML, javascript and other assets that can be hosted on any web server:

```
npm run build
```

## Development

Most of the action takes place in `_resource/js/script.js`. There you will find the code that gets MapboxGLJS up and running as well as some examples that you can experiment with. You might need to add some custom css in `_resource/css/style.css`, but only if you get fancy. You can use any code editor to edit these files. [Atom](https://atom.io/) is a nice free one.

MIT

Copyright (c) 2018 Yasunori Kirimoto
