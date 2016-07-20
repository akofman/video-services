describe('Test suite', function () {
  //this.timeout(50000);

  require('./extractMetadata.spec')();
  require('./extractThumbnail.spec')();
});
