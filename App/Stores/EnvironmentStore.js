var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var EnvironmentManager = require('react-native').NativeModules.EnvironmentManager;

var Environment    = require('../Models/Environment');
var Dispatcher     = require('../AppDispatcher');
var AppConstants   = require('../Constants/AppConstants');

var CHANGE_EVENT   = 'change';

// null so we know to initialize on app launch
var _singleton = null;

function setSingleton(storedProps) {
  _singleton = new Environment(storedProps);
}

var SingletonStore = assign({}, EventEmitter.prototype, {
  get: function() {
    return _singleton;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
Dispatcher.register(function(action) {
  switch(action.actionType) {
    case AppConstants.APP_LAUNCHED:
      EnvironmentManager.get(function(attributes) {
        console.log("Environment: " + attributes.name);
        setSingleton(attributes);
        SingletonStore.emitChange();
      });
      break;
    default:
      // no op
  }
});

module.exports = SingletonStore;
