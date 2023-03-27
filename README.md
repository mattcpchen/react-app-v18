### All Packages used
* **React18** 
  * set up CSS; CSS-Module; and Styled-Components
  * fix importing svg/jpg/png issues
* **Webpack + Node** 
  * setup both server and client
* **Typescript**
  * allow mix of ts/tsx/js fuiles
* **Storybook**
  * fix css-module storybook issue
* **React Testing Library** 
  * fix jest css loading issues
  * fix jest image import issues
  * `@testing-library/react-hooks` not support v18
  

### Getting Started

* To run this app in develop: `npm run dev`
* To run this app in production: `npm run build && npm start`
* To run any specific test: 
  * `npm test` for all
  * `npm test src/components/component_01/Component_01.spec.js`
  * `npm test src/components/component_02/Component_02.spec.js`
* To see app; go to: `http://localhost:3000`



### All Setup Guides
* **React + Webpack + Express Babel** 
  ```
  https://levelup.gitconnected.com/how-to-setup-environment-using-react-webpack-express-babel-d5f1b572b678
  ```
* **Typescript** 
  ```
  https://jsramblings.com/create-a-react-and-typescript-app-with-webpack/
  ```
* **Storybook**
  * **add these 2 packages**
  ```storybook/react```
  ```storybook/addon-actions```
  * **add `.storybook` file in root**
  `** is a recursive wildcard which can only be used with paths`
* **Jest + React Testing Library**
  ```https://dev.to/ivadyhabimana/setup-jest-and-react-testing-library-in-a-react-project-a-step-by-step-guide-1mf0```  
<br />



### All Issues && Errors
##### 1: All Typescript issues
  * In `.babelrc` file, add `"@babel/typescript"`
  * In `webpack.config` file, remember to allow all extensions
    ```
    {
      ......
      resolve: {
        extensions: [".ts", ".tsx", ".js"],
      },
      ......
    }
    ```
##### 2: All CSS issues && errors
* CSS && CSS-Module errors for React
  In `webpack.config` file. Add these 2 rules
  ```
  {
    test: /\.css$/,
    use: [
        'style-loader',
        {
        loader: 'css-loader',
        options: {
            modules: true,
            importLoaders: 1,
        }
        },
    ],
    include: /\.module\.css$/,
  },
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
    exclude: /\.module\.css$/,
  }
  ```
* Css-Module issues for Typescript
  decalre in `custom.d.ts`
  ```
  declare module '*.module.css';
  ```

* CSS && CSS-Module error for Jest
    -- Install `identity-obj-proxy` package as a dev dependancy.
    -- Add `moduleNameMapper` to your jest config file. 
    ```
    module.exports = {
      ......
      moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
      }
    }
    ```

* CSS-Module issue for Storybook
  steps to fix it:
  -- import `storybook-css-modules`
  -- addons it to `.storybook` file
  ```
  {
    ......
    addons: [
      "storybook-css-modules", // 👈 allow css-module for storybook
    ],
    ......
  }
  ```

##### 3: All image issues && errors

* JPG|PNG|GIF|SVG issues for React
  -- Install `file-loader`
  -- In webpack.config file. Add rule for images
  ```
  {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    use: "file-loader",
  }
  ```

* JPG|PNG|GIF|SVG issues for Typescript
  Create a customer type file `custom.d.ts`. Decalre them
  ```
  declare module '*.svg';
  declare module "*.jpg";
  declare module "*.jpeg";
  declare module "*.png";
  declare module "*.gif";
  ```
  Add to `tsconfig.json` 
  ```
  {
    ......
    "include": [
        ...
        "custom.d.ts"
    ],
    ......
  }
  ```

* JPG|PNG|GIF|SVG issues for Jest
  -- Install `jest-transform-stub`.
  -- Update `moduleNameMapper` in your `jest,config` file. 
  ```
  module.exports = {
    ......
    moduleNameMapper: {
      '^.+\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',
    }
  }
  ```

* JPG|PNG|GIF|SVG issues issue for Storybook
  ``````