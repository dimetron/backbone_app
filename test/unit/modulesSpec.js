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
            
            var list = [[0, 1], [2, 3], [4, 5]];
            var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
            
            expect([4,5,2,3,0,1]).toEqual(flat);
        });

        it('test modules', function() {
            expect(Utils).not.toBe(null);
            expect(new Utils().getCount).toBeDefined();
            expect(2).toBe(new Utils().getCount());
        });
    });
});