import ffmpeg from 'fluent-ffmpeg';

const ffprobeOptions = [];

const getDuration = (source) => {
  return new Promise((resolve, reject) => {
    return ffmpeg.ffprobe(source, ffprobeOptions, (err, metadata) => (
      err ? reject(err) : resolve(metadata.format.duration))
    );
  });
};

export default getDuration;
