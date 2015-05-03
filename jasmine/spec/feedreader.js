/* feedreader.js */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have a defined URL', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
            });
         });

        it('have a URL that\'s not empty', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.url).not.toBe(null);
                expect(feed.url.length).not.toBe(0);                
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a defined name', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
            });
         });

        it('have a name that\'s not empty', function () {
            allFeeds.forEach(function(feed) {
                expect(feed.name).not.toBe(null);
                expect(feed.name.length).not.toBe(0);
            });
         });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
        // Define the variables used in the tests covered by this test suite
        var myMenu = $('.menu hidden');
        var theBody = $('.menu-hidden');
        var menuIcon = $('.menu-icon-link');
        var spyEvent = spyOnEvent(menuIcon, 'click');
        
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect($(myMenu)).not.toBeVisible();
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('displays when first clicked', function() {
            $(menuIcon).click();
            expect('click').toHaveBeenTriggeredOn(menuIcon);
            expect(spyEvent).toHaveBeenTriggered();
            expect($(theBody)).not.toHaveClass("menu-hidden");
        });

        it('is hidden on second click', function() {
            $(menuIcon).click();
            expect('click').toHaveBeenTriggeredOn(menuIcon);
            expect(spyEvent).toHaveBeenTriggered();         
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         // Ensure each feed has finished loading before running the test case
         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });

        // Check for at least 1 entry in feed
        it('all contain at least 1 feed', function() {
            var feedEntry = $('.entry').length;
            expect(feedEntry).toBeGreaterThan(0);
         });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var initialFeedResults = $('.feed').html();
        var newFeedResults;

        // Ensure that the second and third feeds have finished loading
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });
 /*        beforeEach(function(done) {
            loadFeed([i], function() {
                initialFeedResults = $('.feed').html();
                loadFeed([i], function() {
                    done();
                });
            });
         }); */

         // Reload the initial feed
         afterEach(function() {
//            loadFeed(0);
            newFeedResults = initialFeedResults;
         });

         // Check that new feed has loaded with new content that is different from previous feed
         it('changes the feed content displayed on the page', function() {
            allFeeds.forEach(function(feed) {
                newFeedResults = $('.feed').html();
                expect(initialFeedResults).not.toEqual(newFeedResults);
            });
/*            expect(initialFeedResults).toBeDefined();
            expect(initialFeedResults.length).not.toBe(0);
            newFeedResults = $('.feed').html();
            expect(newFeedResults).toBeDefined();
            expect(newFeedResults.length).not.toBe(0);
            expect(initialFeedResults).not.toEqual(newFeedResults); */
         });
    });

}());
