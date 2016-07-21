describe('Test suite', function () {
  //this.timeout(50000);

  require('./getMetadata.spec')();
  require('./getDuration.spec')();
  require('./getFPS.spec')();
  require('./extractThumbnail.spec')();
});
