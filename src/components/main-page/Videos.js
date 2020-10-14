import React from 'react';

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playLeft: false,
      playRight: false
    };
    this.setLeftPlayer = this.setLeftPlayer.bind(this);
    this.setRightPlayer = this.setRightPlayer.bind(this);
  }

  setLeftPlayer() {
    this.setState({playLeft: true});
  }

  setRightPlayer() {
    this.setState({playRight: true});
  }

  render() {
    return (
      <div className="bg-dark">
        <div className="row pt-3">
          <div className="col-md-12 text-center">
            <h2 className={"h2 text-uppercase"}>
              <span className={"border-light border-bottom text-light"}>Táborozók munkái</span>
            </h2>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-1 text-center"></div>
          <div className="col-md-5 mt-3 text-center">
            {this.state.playLeft
              ? <iframe title={"Scratch tábor - 14. nap"} width="100%" height="315" src="https://www.youtube.com/embed/6fIkB2F8N38?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              : <div className={"video-player"} id={"video1"} onClick={this.setLeftPlayer}></div>
            }
          </div>
          <div className="col-md-5 mt-3 text-center">
            {this.state.playRight
              ? <iframe title="Scratch tábor - 3. nap" width="100%" height="315" src="https://www.youtube.com/embed/G0lYZFwBVyw?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              : <div className={"video-player"} id={"video2"} onClick={this.setRightPlayer}></div>
            }
          </div>
          <div className="col-md-1 text-center"></div>
        </div>
      </div>
    );
  }
}