import expect from 'expect';
import { extractMetadata } from '../src';

module.exports = () => {
  describe('extractMetadata', function () {
    it('should retrieve metadata from a video source', function () {
      return extractMetadata('./test/big_buck_bunny.mp4').then((metadata) => {
        expect(metadata).toIncludeKeys(['streams', 'format', 'chapters']);
      }).catch((err) => {
        throw new Error(err);
      });
    });
  });
};
