# CI-Base-Project



## Comenzando

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Ejecutar el lint:

   ```bash
   npm run lint
   ```

3. Ejecutar pruebas:

   ```bash
   npm test
   ```

4. Compilar el proyecto:

   ```bash
   npm run build
   ```

## Estructura del proyecto

- `src/` - código fuente de la aplicación
- `tests/` - pruebas unitarias
- `.github/workflows/ci.yml` - configuración del flujo de CI
- `jest.config.cjs` - configuración de Jest
- `tsconfig.json` - configuración del compilador TypeScript
- `eslint.config.mjs` - configuración de ESLint

## Git Ignore

El repositorio ignora:

- `node_modules/`
- `coverage/`
- `dist/`
- `.env`


