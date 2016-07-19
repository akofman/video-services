import ffmpeg from 'fluent-ffmpeg';

const ffprobeOptions = [];

const extractMetadata = (source) => {
  return new Promise((resolve, reject) => {
    return ffmpeg.ffprobe(source, ffprobeOptions, (err, metadata) => (
      err ? reject(err) : resolve(metadata))
    );
  });
};

export default extractMetadata;
