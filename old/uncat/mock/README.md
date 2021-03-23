# static server template

Static server using nodejs.

> Place static files into ./dist/  
> During development the browser will auto reload


Start server for development

```sh
    npm run start
```

Start server in deployment

```sh
    npm run serve
```

Build styles.css
```
    npm run build
```

When deploying, set NODE_ENV to production to purge unused CSS classes
```
    export NODE_ENV=production
    npm run build
    npm run serve
```
