import expect from 'expect';
import { getFPS } from '../src';

module.exports = () => {
  describe('getFPS', function () {
    it('should retrieve the FPS of a video source', function () {
      return getFPS('./test/big_buck_bunny.mp4').then((fps) => {
        expect(fps).toBe('288000/12019');
      }).catch((err) => {
        throw new Error(err);
      });
    });
  });
};
