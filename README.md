## DataBase Test Automation Framework

This repository contains a collection of sample scripts and utilities designed to perform end to end test automation on any RDBMS whether it is Oracle, MysQL, TeraData, Vertica etc. It can connect to multiple databases simultaneously and uses callback mechanism to resolve connections. It uses Mocha BDD framework as a test runner and support ES6 (via babel-register) and generate Spec, JUNIT, JSON reporters as well. In addition to above features it also offers parallel execution of your all database test scripts/testcases together.

## Installation

This framework is tested on ***Node@6.10.0*** and up.  While earlier versions of node may be compatible, they have not been tested or verified.

Install JDK 1.8. All the tests work out of the box on a 1.8+ JVM. JDK is require just as a bridge between Node.JS and your RDBMS. Install if your machine does not have JDK 1.8+.

Install Node.JS from [here](https://nodejs.org/en/) , take the LTS version based on your Operating system. Please make sure you install NodeJS globally. Recommended version is 6.10.0. and above Or  if you have nvm installed globally, you run `nvm install` to get the latest version of node specified in the`.nvmrc` file [here](/.nvmrc).  If you don't use nvm, be sure that you are using a compatible version. Further details on nvm can be found on the official [github page](https://github.com/creationix/nvm). MAC OSX users are best suited to install nvm with homebrew `brew install nvm`.

Xcode: MAC users, ensure you have Xcode installed. This is required for compiling native addon modules for Node.js.

#### Windows Build tool. (follow below step if your target OS is Windows)

Although it is not necessary, but before you install the windows specific build tools, make sure you uninstall other `microsoft visual c++ 2005 redistributable` software from the machine. You can install it afterwards if require a specific version for other purpose.

💡 [Windows Vista / 7 only] requires .NET Framework 4.5.1 (Currently not installed automatically by this package) Download and install it from [here](https://www.microsoft.com/en-us/download/details.aspx?id=40773)

Install all the required tools and configurations using Microsoft's windows-build-tools from an elevated PowerShell or CMD.exe (run as Administrator). if you are behind a specific corporate proxy. Then you need to set some environment variables: `setx NODE_TLS_REJECT_UNAUTHORIZED 0`

```
npm install -g node-gyp

npm install -g --add-python-to-path --production windows-build-tools

```
Wait for build tool to be installed and once done exit from that shell, launch another elevated PowerShell or CMD.exe (run as Administrator)

`npm config set msvs_version 2015`

## Framework Installation

Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.

Post Installation: MAC users, there should not be any issues in installing all the dependent modules particularly `jdbc` modules. If jdbc module has not installed under the `node_modules` folder then you may require to install build tool node-gyp  which can be found [here](https://www.npmjs.com/package/node-gyp) and follow the above step again.

Post Installation: Windows users, if the Microsoft's windows-build-tools are installed properly then you may see `jdbc` module under the `node_modules` folder. If jdbc module is not available after installation then there might be some problem with the Microsoft's windows-build-tool. Check the console log for the specific error. Follow the steps again or refer to the document [here](https://github.com/felixrieseberg/windows-build-tools) and [also here](https://www.npmjs.com/package/node-gyp) to install it manually if require.

## Run Some Sample Tests

To execute the entire test suite in local development, `npm run tests`

## Config / opts File

Database config related information can be found at ./test/config. As a best practice keep required jdbc .jar under `drivers` directory and database connection strings in ./test/config/db.js.

Mocha opts file can be found in the ./test directory end with mocha.opts. Options mentioned in the .opts files is common to all test types.

## Writing Automated Tests

Automated tests are written using Mocha framework. More about Mocha framework can be found [here](https://mochajs.org/). To connect to any database and execute any sort of SQL statement use the below method. For sample testcase please refer to the ./specs  and refer to common utilities methods at ./utilities.

```
 db_execute(config, sqlQuery, callback)

 execute a SQL statement / queries on any RDBMS and gives query results
 @param {*} config - db connection strings
 @param {*} sqlQuery - sql queries to execute
 @param {callback} callback function that contains query results and gets called when the command finishes

```

## Working on test data

For simplicity you can keep your test case related test data in JSON object. Please refer to the samples under ./test/test-data/run-time.js  OR you can also keep your test data in .xlsx file. The common excel utilities provides many ways to access excel data. Please refer to the sample files in ./util-examples.

## Reporters

By default framework generates below standard reports. to generate reports execute command `npm run report`

##### Spec

Test reporter, that prints detailed results to console.

##### junit/xunit

The JUnit reporter helps you to create xml reports for your CI server. Add it to the reports array in the config file and define the directory where the xml files should get stored.

##### JSON

The JSON reporter is especially versatile. Since it produces a literal in a key : value pair, help to read, translate execution results to any custom reporter / it can be used to transport reporter events to another process and format them there, or to store the execution results back to any standard RDBMS or to NoSQL like mongodb with very minimal effort.

## Common Utilities

Refer to the common Javascript functions that provides clean, performant methods for manipulating objects, collections, MS-Excel utilities, DataBase utilities etc. Few sample code can be found in ./util-examples/

Use [Underscore.js](http://underscorejs.org/) already bundled inside the framework which provides over 100 functions that support both your favorite workaday functional helpers: map, filter, invoke — as well as more specialized goodies: function binding, javascript templating, creating quick indexes, deep equality testing, and so on.

## Contribution

Create a fork of the project into your own repository. Make all your necessary changes and create a pull request with a description on what was added or removed and details explaining the changes in lines of code. If approved, project owners will merge it.

## Conclusion

Given all of the features this framework provides along with Mocha JavaScript BDD framework, it can act as a great starting point for automating anything on your targeted database.

## Licensing

MIT
