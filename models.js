/**
 * Created by Merlin on 6/11/14.
 */
var Person = Backbone.Model.extend({

    // We can pass it default values.
    defaults : {
        name : 'John Snoe',
        faction : 'Unknown',
        position: 'Unknown',
        living : true,
        traits: [],
        residence 'Winterfell:

    },

    url : function() {
        // Important! It's got to know where to send its REST calls.
        // In this case, POST to '/donuts' and PUT to '/donuts/:id'
        return this.id ? '/people/' + this.id : '/people';
    }

});

var jonSnow = new Person({ // attributes passed to the Donut constructor will override the defaults
    name : "Jon Snow",
    living : true,
    traits : ['has white wolf'],
    hasBeard: true
});

var theKing = new Person ({
    name: "The King",
    living: true,
    hasBeard: true
})

