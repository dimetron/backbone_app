define(['app', 'app2', 'utils', 'jquery', 'underscore'], function(App, App2, Utils, $, _) {
    
    describe('just checking', function() {
        
        it('works for app', function() {
            var el = $('<div></div>');
            var app = new App(el);
            app.render();
            expect(el.text()).toEqual('require.js up and running');
        });
        
        it('works for app2', function() {
            var el = $('<div></div>');
            var app = new App2(el);
            app.render();
            expect(el.text()).toEqual('Backbone version:1.1.2');
        });
        
        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1, 2, 3])).toEqual(3);
        });

        it('test modules', function() {
            expect(Utils).not.toBe(null);
            expect(new Utils().getCount).toBeDefined();
            expect(new Utils().getCount()).toBe(1);
        });
    });
});