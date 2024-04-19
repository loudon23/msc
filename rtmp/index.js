const NodeMediaServer = require('node-media-server');

const config = {
  logType: 3, 
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 80,
    mediaroot: './media',
    allow_origin: '*'
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        vc: "copy",
        vcParam: [],
        ac: "aac",
        acParam: ['-ab', '128k', '-ac', '2', '-ar', '44100'],
        hls: true,
        hlsFlags: '[hls_time=1:hls_list_size=3:hls_flags=delete_segments]', 
        hlsKeep: false, // to prevent hls file delete after end the stream
        dash: true,  
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]',
        dashKeep: false // to prevent dash file delete after end the stream
      }
    ]
  }
};

var nms = new NodeMediaServer(config)
nms.run();