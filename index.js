const doc = require('./lib/createDocument')();
const writeStream = require('./lib/createWriteStream')('output/output.pdf');
const addCoverPage = require('./lib/addCoverPage');
const addBadgePage = require('./lib/addBadgePage');
const badgesData = require('./data/badges.json');

doc.pipe(writeStream);
addCoverPage(doc, ['Simon Adcock', '14 Waffle Road', 'Maple Park']);
addBadgePage(doc, badgesData);
doc.end();
