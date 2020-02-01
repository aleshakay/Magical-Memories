import React from 'react';
import pictureData from '../../../helpers/data/pictureData';
import PicCarousel from '../../shared/PicCarousel/PicCarousel';
import pictureShape from '../../../helpers/propz/pictureShape';
import './Home.scss';

class Home extends React.Component {
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
      <div className="Home">
        <h1 className="homeTitle">Home</h1>
        <PicCarousel pictures={pictures} />
      </div>
    );
  }
}

export default Home;
