var path = require('path');

// Normalization
console.log("normalization: " + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log("join path: " + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve('2_path_module.js'));

// extName
console.log('ext name : ' + path.extname('2_path_module.js'));