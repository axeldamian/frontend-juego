## Descripción

Crear proyecto react
```
npx create-react-app <my-app-name>
```

Iniciar proyecto en github, en la carpeta raíz
```
git init
```
Vincular repo local con repo de github
```
git remote add origin <url del repo en github>
```
Luego subir los cambios
```
git add .
git commit -m "mensaje"
git push origin master
```
Github pages: es para subir frontends (javascript, html, css, react, etc...) sin servicios, salvo en la nube, como mongo atlas.
Para subir los cambios a github pages, además de subir todo a master, ejecutar:
```
npm run deploy
```

El scripts de package.json queda así:
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build"
  },
```

instalar 2 dependencias "react-scripts" y "gh-pages"


React-scripts
```
npm install react-scripts --save
```

Gh-pages
```
npm install gh-pages --save-dev
```

Cuando ejecutamos npm run deploy se crea un branch llamado gh-pages si no esta creado
y se muestran cambios en https://axeldamian.github.io/frontend-juego/
```
username.github.io/repositio-name
```

Localmente debemos ejecutar, para visualizar cambios localmente:
```
npm run start
```
se abre el navegador con localhost:3000 allí se ven los cambios
