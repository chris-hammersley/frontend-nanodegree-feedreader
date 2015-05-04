/* feedreader.js */

$(function() {
    // Test Suite 1 - the feeds
    describe('RSS Feeds', function() {
        
        // Test Case 1A - are feeds defined?
        it('are defined', function() {
            // Checks that all feeds are defined and length is not zero
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test Case 1B - are feed urls defined?
        it('have a defined URL', function () {
            // Loops through all feeds
            allFeeds.forEach(function(feed) {
                // Checks that all feed urls are defined
                expect(feed.url).toBeDefined();
            });
         });

        // Test Case 1C - do feed urls have a value?
        it('have a URL that\'s not empty', function () {
            // Loop through all feeds
            allFeeds.forEach(function(feed) {
                // Checks that all feed urls are not null or length zero
                expect(feed.url).not.toBe(null);
                expect(feed.url.length).not.toBe(0);                
            });
         });

        // Test Case 1D - do feeds have a defined name?
        it('have a defined name', function () {
            // Loop through all feeds
            allFeeds.forEach(function(feed) {
                // Checks that all feed names are defined
                expect(feed.name).toBeDefined();
            });
         });

        // Test Case 1E - do feed names have a value?
        it('have a name that\'s not empty', function () {
            // Loop through all feeds
            allFeeds.forEach(function(feed) {
                // Checks that all feed names aren't null or length zero
                expect(feed.name).not.toBe(null);
                expect(feed.name.length).not.toBe(0);
            });
         });
    });

    // Test Suite 2 - the menu
    describe('The Menu', function() {
        
        // Variables that look at DOM class names using jquery-jasmine matchers
        var myMenu = $('.menu hidden');
        var theBody = $('.menu-hidden');
        var menuIcon = $('.menu-icon-link');
        var spyEvent = spyOnEvent(menuIcon, 'click');
        
        // Test Case 2A - is the menu hidden on page load?
        it('is hidden by default', function() {
            // Checks that menu class can't be seen
            expect($(myMenu)).not.toBeVisible();
        });

        // Test Case 2B - does the menu open when clicked?
        it('displays when first clicked', function() {
            // When menu icon is clicked
            $(menuIcon).click();
            // Checks for click, spyevent & removal of menu-hidden class
            expect('click').toHaveBeenTriggeredOn(menuIcon);
            expect(spyEvent).toHaveBeenTriggered();
            expect($(theBody)).not.toHaveClass("menu-hidden");
        });

        // Test Case 2C - does the menu close when clicked again?
        it('is hidden on second click', function() {
            // When menu icon is clicked
            $(menuIcon).click();
            // Checks for click & spyevent
            expect('click').toHaveBeenTriggeredOn(menuIcon);
            expect(spyEvent).toHaveBeenTriggered();         
        });
    });

    // Test Suite 3 - the feed entries
    describe('Initial Entries', function() {

         // Load async content
         beforeEach(function(done) {
            // Load initial feed
            loadFeed(0, function() {
                // Finish async load
                done();
            });
         });

        // Test Case 3A - does each feed have at least one entry?
        it('all contain at least 1 feed', function() {
            // Checks the length of each feed entry
            var feedEntry = $('.entry').length;
            // If there is a feed entry, the length will be greater than zero
            expect(feedEntry).toBeGreaterThan(0);
         });
    });

    // Test Suite 4 - the feed results
    describe('New Feed Selection', function() {

        // Set a variable to hold initial feed content
        var initialFeedResults;

        // Load async content
        beforeEach(function(done) {
            // Load initial feed
            loadFeed(0, function() {
                // Assign initial feed's HTML content to variable
                initialFeedResults = $('.feed').html();
                // Finish async load
                done();
            });
        });

        // Test Case 4A - after loading a new feed, are the HTML feed results different from the initial feed content?
        it('changes the feed content displayed on the page', function(done) {
            // Load a different feed's content
            loadFeed(1, function() {
                // Assign new feed HTML content to new variable
                var newFeedResults = $('.feed').html();
                // Checks to make sure the HTML contents aren't identical
                expect(initialFeedResults).not.toEqual(newFeedResults);
                done();
            });
        });
    });
}());
