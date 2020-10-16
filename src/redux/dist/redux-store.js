"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var profile_reducer_1 = require("./profile-reducer");
var dialogs_reducer_1 = require("./dialogs-reducer");
var users_reducer_1 = require("./users-reducer");
var auth_reducer_1 = require("./auth-reducer");
var redux_thunk_1 = require("redux-thunk");
var redux_form_1 = require("redux-form");
var app_reducer_1 = require("./app-reducer");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var reducers = redux_1.combineReducers({
    profilePage: profile_reducer_1["default"],
    dialogsPage: dialogs_reducer_1["default"],
    usersPage: users_reducer_1["default"],
    auth: auth_reducer_1["default"],
    form: redux_form_1.reducer,
    app: app_reducer_1["default"]
});
var store = redux_1.createStore(reducers, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1["default"])));
// @ts-ignore
window.store = store;
exports["default"] = store;
