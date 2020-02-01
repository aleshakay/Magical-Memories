import React from 'react';
import PicCarousel from '../../shared/PicCarousel/PicCarousel';
import pictureShape from '../../../helpers/propz/pictureShape';
import pictureData from '../../../helpers/data/pictureData';

import './SinglePicture.scss';

class SinglePicture extends React.Component {
  state = {
    pictures: [],
  }

  static propTypes = {
    picture: pictureShape.pictureShape,
  }

  getPictures = () => {
    pictureData.getPicturesByEventId()
      .then((pictures) => this.setState({ pictures }))
      .catch((err) => console.error('error from get picture', err));
  }

  componentDidMount() {
    this.getPictures();
  }

  render() {
    const { pictures } = this.state;
    return (
      <div>
        <div>
          <h1 className="singlePictureTitle">Pictures...</h1>
        </div>
        <div className="picCarousel">
          <PicCarousel pictures={pictures} />
        </div>
      </div>
    );
  }
}

export default SinglePicture;
