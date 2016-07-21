<a name="module_video-services"></a>

## video-services
Bunch of convenient services to extract video info.
</br>Behind the scenes it mainly uses [ffmpeg](https://ffmpeg.org/) and [imagemagick](http://www.imagemagick.org/script/index.php).


* [video-services](#module_video-services)
    * [.extractMetadata](#module_video-services.extractMetadata) ⇒ <code>promise</code>
    * [.extractThumbnail](#module_video-services.extractThumbnail) ⇒ <code>promise</code>

<a name="module_video-services.extractMetadata"></a>

### video-services.extractMetadata ⇒ <code>promise</code>
Extracts metadata from a video source.

It wraps the `fluent-ffmpeg` <a href="https://github.com/fluent-ffmpeg/node-fluent-ffmpeg/blob/master/README.md#reading-video-metadata">ffprobe method</a>
and returns information about the container (as a `format` key) and an array of streams (as a `stream` key).

The format object and each stream object also contains metadata tags, depending on the format:

<pre><code>
{ streams:
  [ { index: 0,
      codec_name: 'aac',
      codec_long_name: 'AAC (Advanced Audio Coding)',
      profile: 'LC',
      codec_type: 'audio',
      codec_time_base: '1/22050',
      codec_tag_string: 'mp4a',
      codec_tag: '0x6134706d',
      sample_fmt: 'fltp',
      sample_rate: 22050,
      channels: 2,
      channel_layout: 'stereo',
      bits_per_sample: 0,
      id: 'N/A',
      r_frame_rate: '0/0',
      avg_frame_rate: '0/0',
      time_base: '1/22050',
      start_pts: 0,
      start_time: 0,
      duration_ts: 1326080,
      duration: 60.139683,
      bit_rate: 65075,
      max_bit_rate: 'N/A',
      bits_per_raw_sample: 'N/A',
      nb_frames: 1295,
      nb_read_frames: 'N/A',
      nb_read_packets: 'N/A',
      tags: [Object],
      disposition: [Object] },
    { index: 1,
      codec_name: 'h264',
      codec_long_name: 'H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10',
      profile: 'Constrained Baseline',
      codec_type: 'video',
      codec_time_base: '12019/576000',
      codec_tag_string: 'avc1',
      codec_tag: '0x31637661',
      width: 640,
      height: 360,
      coded_width: 640,
      coded_height: 360,
      has_b_frames: 0,
      sample_aspect_ratio: '0:1',
      display_aspect_ratio: '0:1',
      pix_fmt: 'yuv420p',
      level: 30,
      color_range: 'tv',
      color_space: 'smpte170m',
      color_transfer: 'bt709',
      color_primaries: 'smpte170m',
      chroma_location: 'topleft',
      timecode: 'N/A',
      refs: 1,
      is_avc: 'true',
      nal_length_size: 4,
      id: 'N/A',
      r_frame_rate: '24/1',
      avg_frame_rate: '288000/12019',
      time_base: '1/600',
      start_pts: 0,
      start_time: 0,
      duration_ts: 36057,
      duration: 60.095,
      bit_rate: 612177,
      max_bit_rate: 'N/A',
      bits_per_raw_sample: 8,
      nb_frames: 1440,
      nb_read_frames: 'N/A',
      nb_read_packets: 'N/A',
      tags: [Object],
      disposition: [Object] },
    { index: 2,
      codec_name: 'unknown',
      codec_long_name: 'unknown',
      profile: 'unknown',
      codec_type: 'data',
      codec_tag_string: 'rtp ',
      codec_tag: '0x20707472',
      id: 'N/A',
      r_frame_rate: '0/0',
      avg_frame_rate: '0/0',
      time_base: '1/90000',
      start_pts: 0,
      start_time: 0,
      duration_ts: 5408550,
      duration: 60.095,
      bit_rate: 45858,
      max_bit_rate: 'N/A',
      bits_per_raw_sample: 'N/A',
      nb_frames: 1440,
      nb_read_frames: 'N/A',
      nb_read_packets: 'N/A',
      tags: [Object],
      disposition: [Object] },
    { index: 3,
      codec_name: 'unknown',
      codec_long_name: 'unknown',
      profile: 'unknown',
      codec_type: 'data',
      codec_tag_string: 'rtp ',
      codec_tag: '0x20707472',
      id: 'N/A',
      r_frame_rate: '0/0',
      avg_frame_rate: '0/0',
      time_base: '1/22050',
      start_pts: 0,
      start_time: 0,
      duration_ts: 1325095,
      duration: 60.095011,
      bit_rate: 5514,
      max_bit_rate: 'N/A',
      bits_per_raw_sample: 'N/A',
      nb_frames: 648,
      nb_read_frames: 'N/A',
      nb_read_packets: 'N/A',
      tags: [Object],
      disposition: [Object] } ],
 format:
  { filename: './test/big_buck_bunny.mp4',
    nb_streams: 4,
    nb_programs: 0,
    format_name: 'mov,mp4,m4a,3gp,3g2,mj2',
    format_long_name: 'QuickTime / MOV',
    start_time: 0,
    duration: 60.095,
    size: 5510872,
    bit_rate: 733621,
    probe_score: 100,
    tags:
     { major_brand: 'mp42',
       minor_version: '1',
       compatible_brands: 'mp42avc1',
       creation_time: '2010-02-09 01:55:39' } },
 chapters: [] }
</code></pre>

**Kind**: static constant of <code>[video-services](#module_video-services)</code>  
**Returns**: <code>promise</code> - Once resolved, it gives access to the metadata object.  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | The source (url or local path) of the video. |

**Example**  
```js
extractMetadata('/path/to/source.mp4').then((metadata) => {
  console.log(metadata);
}).catch((err) => {
  throw new Error(err);
});
```
<a name="module_video-services.extractThumbnail"></a>

### video-services.extractThumbnail ⇒ <code>promise</code>
Extracts a thumbnail from a video source.

**Kind**: static constant of <code>[video-services](#module_video-services)</code>  
**Returns**: <code>promise</code> - Once resolved it gives access to the thumbnail as an array of bytes.  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | The source (url or local path) of the video. |
| options | <code>object</code> | * time * : Video time where the thumbnail will be extrated.</br></br>                           * width * : Thumbnail width, the height will be calculated according to the aspect ratio of the input image.</br></br>                           * quality * : the quality of the thumbnail from 1 to 100 (best).</br></br>                           * destPath * : If this option exists then the resulting thumbnail will be saved on the filesystem. |

**Example**  
```js
extractThumbnail('/path/to/source.mp4', {
  time: '40.2',
  width: '150',
  quality: '50',
  destPath: 'path/to/save/thumbnail.jpg',
}).then((byteArray) => {
  console.log('Thumbnail saved !', byteArray);
})
```

