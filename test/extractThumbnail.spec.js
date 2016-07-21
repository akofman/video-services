import expect from 'expect';
import { extractThumbnail } from '../src';
import fs from 'fs';
import rimraf from 'rimraf';

module.exports = () => {
  describe('extractThumbnail', function () {
    it('should extract a thumbnail and save it on the file system', function () {
      let isFileCreated;
      const options = {
        time: '40.2',
        quality: 50,
        width: 80,
        destPath: 'test/temp.jpg',
      };

      return extractThumbnail('./test/big_buck_bunny.mp4', options).then((bytesArray) => {
        expect(bytesArray.length !== 0).toBe(true);

        try {
          fs.accessSync('test/temp.jpg', fs.F_OK);
          isFileCreated = true;
        } catch (e) {
          isFileCreated = false;
        }

        expect(isFileCreated).toBe(true);
        rimraf.sync('test/temp.jpg');
      }).catch((err) => {
        throw new Error(err);
      });
    });

    it('should extract a thumbnail and return a bytes array', function () {
      return extractThumbnail('./test/big_buck_bunny.mp4').then((bytesArray) => {
        expect(bytesArray.length !== 0).toBe(true);
      }).catch((err) => {
        throw new Error(err);
      });
    });
  });
};
