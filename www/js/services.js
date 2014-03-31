angular.module('starter.services', [])

/**
 * Get the Users Information
 */
.factory('Me', function(Group) {

  // Some fake testing data
  var user = {
    name: 'Paul Pederson',
    username: 'paulcpederson',
    amount: -1,
    org: 'Esri PDX',
    photo: 'https://avatars3.githubusercontent.com/u/1031758?s=460'
  };

  return {
    fetch: function() {
      return user;
    }
  };

})

/**
 * Get all the users in the organization
 */
.factory('Group', function() {

  // Some fake testing data
  var users = [
    { id: 0, name: 'Paul Pederson', username: 'paulcpederson', photo: 'https://avatars3.githubusercontent.com/u/1031758?s=460'},
    { id: 1, name: 'Nate Goldman', username: 'ngoldman', photo: 'https://avatars1.githubusercontent.com/u/427322?s=460'},
    { id: 2, name: 'Nikolas Wise', username: 'nikolaswise', photo: 'https://avatars2.githubusercontent.com/u/1987772?s=460'},
    { id: 3, name: 'Patrick Arlt', username: 'patrickarlt', photo: 'https://avatars1.githubusercontent.com/u/378557?s=460'},
  ];

  return {
    all: function() {
      return users;
    },
    get: function(userId) {
      // Simple index lookup
      return users[userId];
    },
    getMinDebt: function () {
      return -10;
    },
    getMaxDebt: function () {
      return 30;
    }
  };
})

/**
 * Get all the activities related to the user
 */
.factory('Activity', function() {

  // Some fake testing data
  var activities = [
    { id: 0, user: { name: 'Paul Pederson', username: 'paulcpederson', photo: 'https://avatars3.githubusercontent.com/u/1031758?s=460'}, amount: 2, date: '2014-03-27T18:00:00-0800', message: 'Hey man, cool stuff', latlng: [-122.6764, 45.5165]  },
    { id: 1, user: { name: 'Nate Goldman', username: 'ngoldman', photo: 'https://avatars1.githubusercontent.com/u/427322?s=460'}, amount: -2, date: '2014-02-27T18:30:12-0800', message: 'better pay me back, yo', latlng: [-122.6764, 45.5165]  },
    { id: 2, user: { name: 'Nikolas Wise', username: 'nikolaswise', photo: 'https://avatars2.githubusercontent.com/u/1987772?s=460'}, amount: 1, date: '2014-01-27T18:04:00-0800', message: 'thanks for the coffee', latlng: [-122.6764, 45.5165]  },
    { id: 3, user: { name: 'Patrick Arlt', username: 'patrickarlt', photo: 'https://avatars1.githubusercontent.com/u/378557?s=460'}, amount: 2, date: '2013-12-14T14:00:00-0800', message: '', latlng: [-122.6764, 45.5165]  },
  ];

  return {
    all: function() {
      return activities;
    },
    get: function(activityId) {
      // Simple index lookup
      return activities[activityId];
    }
  };

});
