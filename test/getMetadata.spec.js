import expect from 'expect';
import { getMetadata } from '../src';

module.exports = () => {
  describe('getMetadata', function () {
    it('should retrieve metadata from a video source', function () {
      return getMetadata('./test/big_buck_bunny.mp4').then((metadata) => {
        expect(metadata).toIncludeKeys(['streams', 'format', 'chapters']);
      }).catch((err) => {
        throw new Error(err);
      });
    });
  });
};
