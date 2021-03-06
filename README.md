<h1 align="center">
  Babel plugins made for webcamp zagreb talk
  <br>
</h1>

[![Prettier](https://img.shields.io/badge/Prettier-%5E1.19.1-red.svg)](https://prettier.io/)


## 💼 Requirements

- yarn or npm

## 💾 Installation

After confirming that your environment meets the above [requirements](#requirements), you can start this project by following the steps mentioned below:-

```bash
$ git clone https://github.com/vivek12345/webcamp-zagreb-demo.git
$ cd webcamp-zagreb-demo
```

When that's done, install the project dependencies. It is recommended that you use yarn.

```bash
$ cd babel-plugins
$ yarn  # Install project dependencies

```

## ▶️ Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

All our plugins are inside `plugins/` directory and the source code on which these plugins will run are inside `src/` directory.

To see the output of babel plugin transforming our code, the following command needs to be executed:

```bash

$ node run.js <file to run this plugin for>
```

For example

```bash
$ node run.js src/convertAlertToConsoleTest.js
```
