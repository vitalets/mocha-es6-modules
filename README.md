# Mocha ES6 modules example
An example of running [Mocha](https://mochajs.org/) tests as a native [ES6 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) in a browser.

* If browser supports ES6 modules — the are used. 
* If browser does not support ES6 modules — the page fallbacks to bundled script.

You can [check it online](https://vitalets.github.io/mocha-es6-modules/) in your browser.

#### With ES modules (Chrome >= 62):
![Mocha tests With ES modules](https://user-images.githubusercontent.com/1473072/33773729-e7208d38-dc49-11e7-9748-f2139bc55e39.png)

#### Without ES modules (Firefox 57):
![Mocha tests Without ES modules](https://user-images.githubusercontent.com/1473072/33773726-e4ff96a2-dc49-11e7-8a69-45d44c424e15.png)

## Run locally
1. Clone the repo:
    ```bash
    git clone https://github.com/vitalets/mocha-es6-modules.git
    cd mocha-es6-modules
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Build non-es6 version:
    ```bash
    npm run build
    ```
4. Start local http server:
    ```bash
    npm run server
    ```
5. Open http://localhost:8000 in browser.
