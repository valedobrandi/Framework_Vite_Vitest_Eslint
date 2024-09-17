# Vite + React + TypeScript + TailwindCSS + DaisyUI + Testing

This project is a minimal template to start a React project using Vite, TypeScript, and TailwindCSS. It includes configuration for ESLint with Airbnb rules and support for testing with Vitest.

## Project Structure

```plaintext
.eslintrc.json
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/
README.md
setupTests.ts
src/
    __tests__/
        App.test.tsx
    App.css
    App.tsx
    assets/
    index.css
    main.tsx
    vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the development server.

### `npm run build`

Builds the project for production.

### `npm run lint`

Runs ESLint to find and fix problems in the code.

### `npm run preview`

Previews the production build of the project.

### `npm run test`

Runs tests using Vitest.

### `npm run coverage`

Generates the test coverage report.

## ESLint Configuration

The project uses ESLint configuration with Airbnb rules, including support for TypeScript and React. The configuration can be found in the [`.eslintrc.json`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fbernardoalbuquerque%2FDocumentos%2Fprojetos%2FFramework_Vite_Vitest_Eslint%2Fvite-project%2F.eslintrc.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22.eslintrc.json%22%2C%226a5944ee-3a13-4583-b758-25df4dd1d90c%22%5D "/home/bernardoalbuquerque/Documentos/projetos/Framework_Vite_Vitest_Eslint/vite-project/.eslintrc.json") file.

## TypeScript Configuration

The project is configured to use TypeScript with options defined in the [`tsconfig.json`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fbernardoalbuquerque%2FDocumentos%2Fprojetos%2FFramework_Vite_Vitest_Eslint%2Fvite-project%2Ftsconfig.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22tsconfig.json%22%2C%226a5944ee-3a13-4583-b758-25df4dd1d90c%22%5D "/home/bernardoalbuquerque/Documentos/projetos/Framework_Vite_Vitest_Eslint/vite-project/tsconfig.json"), [`tsconfig.app.json`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fbernardoalbuquerque%2FDocumentos%2Fprojetos%2FFramework_Vite_Vitest_Eslint%2Fvite-project%2Ftsconfig.app.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22tsconfig.app.json%22%2C%226a5944ee-3a13-4583-b758-25df4dd1d90c%22%5D "/home/bernardoalbuquerque/Documentos/projetos/Framework_Vite_Vitest_Eslint/vite-project/tsconfig.app.json"), and [`tsconfig.node.json`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fbernardoalbuquerque%2FDocumentos%2Fprojetos%2FFramework_Vite_Vitest_Eslint%2Fvite-project%2Ftsconfig.node.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22tsconfig.node.json%22%2C%226a5944ee-3a13-4583-b758-25df4dd1d90c%22%5D "/home/bernardoalbuquerque/Documentos/projetos/Framework_Vite_Vitest_Eslint/vite-project/tsconfig.node.json") files.

## Vite Configuration

The Vite configuration is defined in the [`vite.config.ts`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fbernardoalbuquerque%2FDocumentos%2Fprojetos%2FFramework_Vite_Vitest_Eslint%2Fvite-project%2Fvite.config.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22vite.config.ts%22%2C%226a5944ee-3a13-4583-b758-25df4dd1d90c%22%5D "/home/bernardoalbuquerque/Documentos/projetos/Framework_Vite_Vitest_Eslint/vite-project/vite.config.ts") file. It includes support for React and configurations for testing with Vitest.

## TailwindCSS Configuration

The project uses TailwindCSS for styling. The configuration can be found in the [`tailwind.config.js`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fbernardoalbuquerque%2FDocumentos%2Fprojetos%2FFramework_Vite_Vitest_Eslint%2Fvite-project%2Ftailwind.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22tailwind.config.js%22%2C%226a5944ee-3a13-4583-b758-25df4dd1d90c%22%5D "/home/bernardoalbuquerque/Documentos/projetos/Framework_Vite_Vitest_Eslint/vite-project/tailwind.config.js") file.

## Testing

Tests are written using Testing Library and Vitest. The test configuration file is [`setupTests.ts`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fbernardoalbuquerque%2FDocumentos%2Fprojetos%2FFramework_Vite_Vitest_Eslint%2Fvite-project%2FsetupTests.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22setupTests.ts%22%2C%226a5944ee-3a13-4583-b758-25df4dd1d90c%22%5D "/home/bernardoalbuquerque/Documentos/projetos/Framework_Vite_Vitest_Eslint/vite-project/setupTests.ts").

## License

This project is licensed under the MIT License.
