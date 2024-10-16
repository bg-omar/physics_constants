### Install dependencies using Yarn from NPM
| `npm i -g @angular/cli @ionic/cli @capacitor/cli` | Install globally the angular cli (used nvm version)                                     |
|--------------------------------------------------:|:----------------------------------------------------------------------------------------|
|                                 `corepack enable` | Install yarn                                                                            |
|         `yarn config set nodeLinker node-modules` | setup yarn to use node_modules folder                                                   |
|                         `yarn set version stable` | To upgrade yarn to latest version                                                       |
|                                            `yarn` | Install dependencies using yarn, does NOT MAKE `package-lock`, ONLY creates `JARN.lock` |
|         (not needed optional) -->  `yarn install` | Install dependencies and CREATE / EDIT `package-lock.json` & `JARN.lock`                |
|                                     `npm install` | before you push to github to update your package.lock.json                              |
|                  `yarn explain peer-requirements` | shows the peer dependencies errors                                                      |


# Angular 6 / Django Rest Framework / CSRF demo app

This is a demo app showing how to make API calls with Angular 6 and Django Rest Framework, including how to send CSRF headers so API calls will function when logged in.

## What this repo contains

The following files are interesting:

* angular_django_cors - The Django project and main settings file
* spaceships - An app within the project, containing the Django Rest Framework views and URL routing
* static/ng-demo - The Angular app source code lives here
* static/dist - The compiled Angular app is here

## Requirements

You need the following to run this app:

* Python 3.5 or higher (Python 2.x is not supported)
* Virtualenv installed globally
* Node v8.x or higher
* NPM v5.x or higher

## Setup

Linux or macOS:

Open a terminal at the repo root, and run the following:

```bash
virtualenv -p /usr/bin/python3 venv
source venv/bin/activate
pip install -r requirements.txt
cd static/ng-demo
npm install
ng build
cd ../..
python manage.py runserver
```

Your app will be available at http://127.0.0.1:8000.

Windows:
 
Most of the commands above should work the same on Windows. I have personally had no luck getting Virtualenv to work on Windows, so I've always had to install all the Python packages globally. Your mileage may vary.

## Database

This project uses a SQLite database, which lives in the file `db.sqlite3`. SQLite3 support should be available out of the box on most modern operating systems. 

## Questions?

If you spot an error when trying to run the demo app, please file a bug in the GitHub issue tracker.

Please do not create issues or email me asking for support for your own projects. I cannot provide support for your custom applications.