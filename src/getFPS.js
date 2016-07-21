import ffmpeg from 'fluent-ffmpeg';

const ffprobeOptions = [];

const getFPS = (source) => {
  return new Promise((resolve, reject) => {
    return ffmpeg.ffprobe(source, ffprobeOptions, (err, metadata) => {
      if (err) {
        reject(err);
      } else {
        const videoStream = metadata.streams.filter((stream) => stream.codec_type === 'video');
        resolve(videoStream[0].avg_frame_rate);
      }
    });
  });
};

export default getFPS;
