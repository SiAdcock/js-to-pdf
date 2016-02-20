const doc = require('./lib/createDocument')();
const writeStream = require('./lib/createWriteStream')('output/output.pdf');
const addCoverInfo = require('./lib/addCoverInfo');
const drawBadges = require('./lib/badges/drawBadges');
const badgesData = require('./data/badges.json');

//set output stream
doc.pipe(writeStream);

//draw cover info on implicitly added page
addCoverInfo(doc, ['Simon Adcock', '14 Waffle Road', 'Maple Park']);

//add pages, draw badges
drawBadges(doc, badgesData);

//write PDF file
doc.end();
