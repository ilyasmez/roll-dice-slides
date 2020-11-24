import React from 'react';
import '../styles/main.css';

export default class AnimatedDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animated: true,
      });
    }, 100);
  }

  render() {
    const diceClasses = `dice ${this.state.animated ? 'dice--animated' : ''}`;

    return <div className={diceClasses}>
    <div className="dice__dot dice__dot--bottom-left dice__dot--yellow"></div>
    <div className="dice__dot dice__dot--top-left"></div>
    <div className="dice__dot dice__dot--top-right"></div>
    <div className="dice__dot dice__dot--bottom-right"></div>
    <div className="dice__dot"></div>
  </div>;
  }
}
