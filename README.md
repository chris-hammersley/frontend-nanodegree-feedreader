# Access the Feedreader Here
http://chris-hammersley.github.io/frontend-nanodegree-feedreader/

# Resources & Research

## Jasmine
http://blog.bandzarewicz.com/blog/2012/03/08/jasmine-cheat-sheet/<br />
http://www.htmlgoodies.com/beyond/javascript/stips/using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html<br />
http://stackoverflow.com/questions/10527394/how-to-test-a-method-in-jasmine-if-the-code-in-beforeeach-is-asynchronous<br />
http://h30499.www3.hp.com/t5/HP-Software-Developers-Blog/What-goes-around-comes-around-Javascript-testing-with-Jasmine/ba-p/6089901#.VUVjkGTBzGc<br />

## Additional custom jasmine matchers
https://github.com/velesin/jasmine-jquery<br />
http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html<br />
http://bittersweetryan.github.io/jasmine-presentation/<br />
http://testdrivenwebsites.com/2010/08/04/custom-jquery-matchers-in-jasmine/<br />

## Javascript Koans & More Javascript Tutorials
https://github.com/mrdavidlaing/javascript-koans<br />
https://github.com/liammclennan/JavaScript-Koans<br />
http://javascript.didacto.net/tutorials<br />
https://medium.com/@davidmansy/what-really-happens-behind-javascript-koans-aboutinheritance-js-df423da152e7


# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


# How will I complete this project?

1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader). DONE
2. Review the functionality of the application within your browser. DONE
3. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works. DONE
4. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js* DONE
5. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application. DONE
6. Return the allFeeds variable to a passing state. DONE
7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty. DONE
8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty. DONE
9. Write a new test suite named "The menu". DONE
10. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element. DONE
11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again. DONE
12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function. DONE
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous. DONE
14. When complete - all of your tests should pass. DONE
