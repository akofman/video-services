import expect from 'expect';
import { getDuration } from '../src';

module.exports = () => {
  describe('getDuration', function () {
    it('should retrieve the duration of a video source', function () {
      return getDuration('./test/big_buck_bunny.mp4').then((duration) => {
        expect(duration).toBe(60.095);
      }).catch((err) => {
        throw new Error(err);
      });
    });
  });
};
