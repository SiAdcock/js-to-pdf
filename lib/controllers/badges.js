const doc = require('./lib/pdfWriter/createDocument')();
const writeStream = require('./lib/pdfWriter/createWriteStream')('output/output.pdf');
const addCoverInfo = require('./lib/pdfWriter/addCoverInfo');
const drawBadges = require('./lib/pdfWriter/badges/drawBadges');
const badgesData = require('./data/badges.json');

//set output stream
doc.pipe(writeStream);

//draw cover info on implicitly added page
addCoverInfo(doc, ['Simon Adcock', '14 Waffle Road', 'Maple Park']);

//add pages, draw badges
drawBadges(doc, badgesData);

//write PDF file
doc.end();
