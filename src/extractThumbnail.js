import ffmpeg from 'fluent-ffmpeg';
import imagemagick from 'imagemagick-native';
import fs from 'fs';

const extractThumbnail = (source, options) => {
  const outputOptions = ['-y', '-vframes 1', '-f image2'];
  let quality = 100;

  if (options && options.time) {
    outputOptions.push(`-ss ${options.time}`);
  }
  if (options && options.width) {
    outputOptions.push(`-vf scale=${options.width}:-1`);
  }
  if (options && options.quality) {
    quality = options.quality;
  }

  return new Promise((resolve, reject) => {
    const byteArray = [];
    return ffmpeg(source).outputOptions(outputOptions).on('error', (err) => {
      reject(err);
    }).pipe(imagemagick.streams.convert({
      quality,
    })).on('data', (chunk) => {
      byteArray.push(chunk);
    }).on('end', () => {
      if (options && options.destPath) {
        const buffer = Buffer.concat(byteArray);
        fs.writeFileSync(options.destPath, buffer);
      }
      resolve(byteArray);
    });
  });
};

export default extractThumbnail;
