import React from 'react';
import pictureData from '../../../helpers/data/pictureData';
import PicCarousel from '../../shared/PicCarousel/PicCarousel';
import './Home.scss';

class Home extends React.Component {
  state = {
    pictures: [],
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
    return (
      <div className="Home">
        <h1 className="homeTitle">Home</h1>
        <PicCarousel pictures={this.state.pictures} />
      </div>
    );
  }
}

export default Home;
