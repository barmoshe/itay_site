import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Use CSS instead of SCSS
import './index.scss'; // Import your custom SCSS file

const PREFIX_URL =
  'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

class MyVideoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideoUrl: null,
    };

    this.images = [
      {
        thumbnail: `https://i3.ytimg.com/vi/gzUxgKVc20c/hqdefault.jpg`,
        original: `https://i3.ytimg.com/vi/gzUxgKVc20c/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/gzUxgKVc20c?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i3.ytimg.com/vi/ESVjDTUqoKc/hqdefault.jpg`,
        original: `https://i3.ytimg.com/vi/ESVjDTUqoKc/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/ESVjDTUqoKc?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i3.ytimg.com/vi/Zuv7hTkB7uM/hqdefault.jpg`,
        original: `https://i3.ytimg.com/vi/Zuv7hTkB7uM/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/Zuv7hTkB7uM?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i3.ytimg.com/vi/KVvIM4u6aMQ/hqdefault.jpg`,
        original: `https://i3.ytimg.com/vi/KVvIM4u6aMQ/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/KVvIM4u6aMQ?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i3.ytimg.com/vi/g5y1OOrkBLg/hqdefault.jpg`,
        original: `https://i3.ytimg.com/vi/g5y1OOrkBLg/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/g5y1OOrkBLg?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this),
      },
     
      {
        thumbnail: `https://i3.ytimg.com/vi/eTOp1ZRYlVk/hqdefault.jpg`,
        original: `https://i3.ytimg.com/vi/eTOp1ZRYlVk/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/eTOp1ZRYlVk?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this),
      },
      { 
        thumbnail: `https://i3.ytimg.com/vi/V10IdnBmyCA/hqdefault.jpg`,
        original: `https://i3.ytimg.com/vi/V10IdnBmyCA/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/V10IdnBmyCA?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i3.ytimg.com/vi/M1GcOLKNi7g/hqdefault.jpg`,
        original: `https://i3.ytimg.com/vi/M1GcOLKNi7g/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/M1GcOLKNi7g?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i3.ytimg.com/vi/GsvSvY1fbAU/hqdefault.jpg`,
        original: `https://i3.ytimg.com/vi/GsvSvY1fbAU/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/GsvSvY1fbAU?autoplay=1&showinfo=0',
        renderItem: this._renderVideo.bind(this),
      },




      // Add your images here
    ];
  }

  _toggleShowVideo(url) {
    this.setState((prevState) => ({
      activeVideoUrl: prevState.activeVideoUrl === url ? null : url,
    }));
  }

  
  _renderVideo(item) {
    const isVideoActive = this.state.activeVideoUrl === item.embedUrl;

    return (
      <div>
        <div className={`media-wrapper ${isVideoActive ? 'video-shown' : ''}`}>
          {isVideoActive ? (
            <iframe
              title="Video"
              width="400"
              height="700"
              src={item.embedUrl}
              frameBorder="0"
              allowFullScreen
              style={{ borderRadius: '15px' }} // Rounded corners for the video player
            ></iframe>
          ) : (
            <a
              onClick={() => this._toggleShowVideo(item.embedUrl)}
              className="media-container"
              style={{ borderRadius: '15px' }} // Rounded corners for the thumbnail
            >
              <img src={item.original} alt="Thumbnail" style={{ borderRadius: '15px' }} />
              <div className="play-button"></div>
            </a>
          )}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="video-slider">
        <ImageGallery
          items={this.images}
          showPlayButton={false}
          showFullscreenButton={false}
          renderItem={this._renderVideo.bind(this)}
        />
      </div>
    );
  }
}

export default MyVideoSlider;
