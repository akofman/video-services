import ffmpeg from 'fluent-ffmpeg';

const extractThumbnail = (source, options) => {
  const outputOptions = ['-y', '-vframes 1', '-f image2'];

  if (options && options.time) {
    outputOptions.push(`-ss ${options.time}`);
  }
  if (options && options.width) {
    outputOptions.push(`-vf scale=${options.width}:-1`);
  }

  return new Promise((resolve, reject) => {
    const byteArray = [];
    const command = ffmpeg(source).outputOptions(outputOptions).on('error', (err) => {
      reject(err);
    });

    if (options && options.destPath) {
      return command.on('end', () => {
        resolve();
      }).output(options.destPath).run();
    }

    return command.pipe().on('data', (chunk) => {
      byteArray.push(chunk);
    }).on('end', () => {
      resolve(byteArray);
    });
  });
};

export default extractThumbnail;
