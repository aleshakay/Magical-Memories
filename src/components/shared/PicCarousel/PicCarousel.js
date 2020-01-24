import React from 'react';
import pictureShape from '../../../helpers/propz/pictureShape';
import './PicCarousel.scss';

class PicCarousel extends React.Component {
  static propTypes = {
    picture: pictureShape.pictureShape,
  }

  render() {
    const { pictures } = this.props;
    const makeItem = (pic) => (
      <div className={pic.id === 'picture1' ? 'carousel-item active' : 'carousel-item'}>
        <img className="d-block w-100" src={pic.pictureUrl}/>
      </div>
    );

    return (
      <div className="PicCarousel">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {pictures.map((pic) => makeItem(pic))}
          </div>
        </div>
      </div>
    );
  }
}

export default PicCarousel;
