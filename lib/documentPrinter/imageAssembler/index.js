const TwoDAssembler = require('gecko_2d_assembler').TwoDAssembler;
const CanvasFileWriter = require('gecko_2d_assembler').CanvasFileWriter;
const NodeCanvasFactory = require('gecko_2d_assembler').NodeCanvasFactory;

module.exports = function imageAssembler() {
  let canvasFactory = new NodeCanvasFactory();
  let assembler = new TwoDAssembler(canvasFactory);
  let canvas = assembler.testImage();
  let writer = new CanvasFileWriter(canvas);

  return writer.write();
};
