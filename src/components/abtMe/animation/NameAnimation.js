import React, { Component } from 'react';
import './NameAnimation.css';

// Arrays representing the letters of the two names
const array1 = ['A', 'l', 'e', 'j', 'a', 'n', 'd', 'r', 'o', ' ', 'B', 'a', 'r', 'b', 'a', 'c', 'i', 'l'];
const array2 = ['S', 'h', 'a', 'e', 'k', 'h', 'r', 'o', 'm'];

class TypingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',       // The text currently displayed in the animation
      currentArray: array1,  // Added to track the current array being used
    };
  }

  componentDidMount() {
    // Initiates the animation when the component is mounted
    this.startAnimation();
  }

  componentWillUnmount() {
    // Stops the animation and text clearing when the component is unmounted
    clearTimeout(this.animationTimeout);
    clearTimeout(this.clearTimeout);
    clearInterval(this.clearInterval);
  }

  startAnimation() {
    // Initiates the animation and restarts the loop
    this.typingAnimation(0);
  }

  typingAnimation(index) {
    // Uses setTimeout to simulate a typing animation
    this.animationTimeout = setTimeout(() => {
      if (index < this.state.currentArray.length) {
        // Adds the next letter to the currentText
        this.setState((prevState) => ({
          currentText: prevState.currentText + this.state.currentArray[index]
        }));

        // Calls the function recursively for the next index
        this.typingAnimation(index + 1);
      } else {
        // When the typing animation completes, waits for three seconds before clearing the text
        this.clearTimeout = setTimeout(() => {
          this.clearText();
        }, 3000); // Waits three seconds before clearing
      }
    }, 100); // Adjusts the typing animation speed as needed
  }

  clearText() {
    // Uses setInterval to gradually clear the displayed text
    let index = this.state.currentText.length - 1;
    this.clearInterval = setInterval(() => {
      if (index >= 0) {
        // Removes the last letter from the currentText
        this.setState({
          currentText: this.state.currentText.slice(0, -1)
        });
        index--;
      } else {
        // Clears the interval when the text is fully cleared and switches to the next array
        clearInterval(this.clearInterval);
        this.setState((prevState) => ({
          currentArray: prevState.currentArray === array1 ? array2 : array1,
        }));
        this.startAnimation();
      }
    }, 100); // Adjusts the clearing speed as needed
  }

  render() {
    const { currentText } = this.state;

    return (
      <div className='container'>
        <p className='text'>{'<<' + currentText}</p>
        <span className='cursor'>{'|'}</span>
        <span className='text'>{'>>'}</span>
      </div>
    );
  }
}

export default TypingAnimation;
