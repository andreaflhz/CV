'use strict';
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = path.resolve(path.dirname(__filename).replace(' ', '\ '), '../src/assets');
    const destPath = path.resolve(path.dirname(__filename).replace(' ', '\ '), '../dist/.');
    
    sh.cp('-R', sourcePath, destPath)
};