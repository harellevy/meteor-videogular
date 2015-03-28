Meteor.startup(function() {
    if (typeof(angularMeteor) !== 'undefined') {
        angularMeteor.requires.push('com.2fdevs.videogular');
    }
});

