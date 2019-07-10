var ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "演员",
        artist: '薛之谦',
        url: '  http://www.ytmp3.cn/down/57157.mp3',
        cover: 'http://img.ytmp3.cn/image/1.jpg',
      },
      {
        name: "那些年",
        artist: '胡夏',
        url: 'http://www.ytmp3.cn/down/59632.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
      }
    ]
});