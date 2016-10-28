'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import './assets/scss/index.scss';

import viewport from './pages/viewport/viewport.module';

angular.module('mue', [
    uirouter,
    viewport
]);