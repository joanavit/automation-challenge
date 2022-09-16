# Mercedes JV Automation Testing Challenge

The following project was made in order to comply with the Mercedes-Benz.io automation challenge.

The automation tool chosen was WebdriverIO.

Please refer to this [WebdriverIO "Get started" section](https://webdriver.io/docs/gettingstarted#system-requirements) to get more info about WebdriverIO.


## System Requirements

In order to successfully run this project the Node.js version must be installed.
To quickly verify if you have Node.js or which version you have, simply run the command below:
```bash
node -v
```
Outcome example:
```bash
v14.19.0
```

# Dependencies
## Chai - Assertions
Check if [Chai](https://www.chaijs.com/) is installed
~~~~
npm chai -v
~~~~

Install Chai for CHAI assertions
~~~~
npm i chai
~~~~

## JAVA
To run the test on both browsers, selenium-standalone requires JAVA-SDK
- Check if JAVA is installed
~~~~
java -v
~~~~
- Install JAVA
~~~~
INSTALL java
~~~~

## Drivers
[Selenium Standalone Service](https://webdriver.io/docs/selenium-standalone-service/) is used to run both Chrome and Firefox browsers. 
Before starting make sure you have JDK installed.
To install selenium-standalone, run
~~~
npm install @wdio/selenium-standalone-service --save-dev
~~~~

## Allure Reporter
Install [Allure](https://webdriver.io/docs/allure-reporter) to generate a report after each Test Run:
~~~~
npm install -g allure-commandline --save-dev
~~~~

## BABEL Compiler
Install [Babel](https://webdriver.io/docs/babel/) to use the next-generation JavaScript features.
~~~
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
~~~

# USAGE
To run your tests, run the command below on the IDE's terminal:
~~~~
$ npx wdio run wdio.conf.js
~~~~

After each test run, run the command below to **Generate** an Allure report and open the report:
~~~
allure generate [allure_output_dir] && allure open
~~~
Run the command below to simply open the current report:
~~~~
allure open
~~~~



# More on WebdriverIO

To setup a project from scratch run, create an empty folder and run the command:
```
npm init wdio ./projectfoldername
```

Below are the configurations for the current project:
~~~~
=========================
WDIO Configuration Helper
=========================

? Where is your automation backend located? On my local machine
? Which framework do you want to use? mocha
? Do you want to use a compiler? Babel (https://babeljs.io/)
? Where are your test specs located? ./test/specs/**/*.js
? Do you want WebdriverIO to autogenerate some test files? No
? Which reporter do you want to use? spec, allure
? Do you want to add a plugin to your test setup? wait-for
? Do you want to add a service to your test setup? selenium-standalone
? What is the base url? http://localhost
? Do you want me to run `npm install` (Y/n) Y
~~~~


You should see this after selecting all the configurations above:
~~~~
Installing wdio packages:
- @wdio/local-runner@latest
- @wdio/mocha-framework@latest
- @wdio/allure-reporter@latest
- wdio-wait-for
- @wdio/selenium-standalone-service@latest
- @babel/register
- @babel/core
- @babel/preset-env
~~~~


# Time for personal notes?
## Peformance
Flaky results are never good. This test runs on Chrome with a 8/10 success rate and on Firefox it has the modest 7/10 ... failure rate (2 of them which produced a screenshot and a file despite no being able to find a selector).
## Experience before, after and during this challenge
- My experience with WebdriverIO is limited to the [course](https://www.udemy.com/course/webdriverio-tutorial-nodejs-javascript/) I took on Udemy. Currently, my project uses its own Test Tool which is based on Mocha and already has an extensive ammout of functions developed. I need to read them, copy them and change something if needed (which is rare).
- In all my previous brief automation experiences (mostly RobotFramework), XPATH was the selector used. CSS selectors were used very scarcely;

- After reading a little a bit about the shadow dom (grasping only that it was hard to use at first), I came across this [Deep Selectors](https://webdriver.io/docs/selectors/#deep-selectors) section and started to implement the test using these "funny" arrows, it was the first time the test actually was able to run a little;
~~~
>>>
~~~
- After awhile, I watched this [video](https://youtu.be/qBq1heK4L20) on how to write selectors for shadow DOM elements. I already had SelectorsHub installed after taking the Udemy's course so I decided to try this out;

- Speaking of steps, on my current project we use "[mocha-steps](https://www.npmjs.com/package/mocha-steps)" instead of the "it" block, so even though I also tried to use this in the beggining, due to time constraints, I went with the default "it" block;
- Finding all the selectors using shadow$ was very time consumming and I was just getting a hang of them but, despite my wish to have more dynamic selectors - when I tried to use the shadow$$ command, the results were never successfull. This is the main reason you'll find mixed selectors being used amid the teststeps;
- There a few selectors missing to ease the scrolling, thus "arrow" commands were used as a "WIP" resort.

- Inittialy, my intentions were to use "base" selectors functions that could take either text (strings) or any parameter like properties to then not have all the selectors in the test steps.

# Final note
There is certainly a lot of room for improvement on this project and on myself as a newbie automator. I personally want to say thank you for challenging me to create a project from scratch and on my own. I learned a lot and I am eager to continue learning.

> See you on the technical interview (?) ;)

