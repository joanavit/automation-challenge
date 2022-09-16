# Mercedes JV Automation Testing Challenge

The following project was made in order to comply with the Mercedes-Benz.io automation challenge.

The automation tool chosen was WebdriverIO.

Please refer to this [WebdriverIO "Get started" section](https://webdriver.io/docs/gettingstarted#system-requirements) to get more info about WebdriverIO.
_________________________________
# Dependencies

To install all the necessary dependencies, go to the automation project's folder and run the command:
~~~
npm install
~~~

## JAVA
To run the test on both browsers, selenium-standalone requires JAVA-SDK. If needed,  
[Install JAVA](https://www.java.com/en/).

## Browsers
This test will run on [Chrome](https://www.google.com/intl/pt-PT/chrome/) and [Firefox](https://www.mozilla.org/en-US/firefox/new/). Please check if you have them installed before running.
__________________________________
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
# Note
There is an open [bug](https://github.com/webdriverio/webdriverio/issues/8735) do to the port 4444 error message in windows. As a workaround, I opened a new terminal everytime I wanted to run the test.
__________________________________

# Time for personal notes?
## Peformance
Flaky results are never good. This test runs on Chrome with a 8/10 success rate and on Firefox it has the modest 7/10 ... failure rate (2 of them which produced a screenshot and a file despite not being able to find a selector).
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

