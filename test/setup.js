import 'babel-polyfill';
import { jsdom } from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';


global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
window.localStorage = window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    this[key] = undefined;
  },
};

chai.use(chaiImmutable);