import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addTodoListItem from '../actions';

class HelloReact extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonText: 'Button',
    };

    this.addTodoListItem = this.addTodoListItem.bind(this);
  }

  addTodoListItem() {
    const { text, dispatch } = this.props;
    dispatch(addTodoListItem(text));
  }

  render() {
    const { buttonText } = this.state;
    const { text, todoList } = this.props;
    const list = [];
    todoList.forEach((ele) => {
      list.push(
        <li key={`${ele}`}>
          {ele}
        </li>,
      );
    });
    return (
      <div>
        <h1>
          {`Hello ${text}`}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ buttonText: 'I am a button' });
          }}
        >
          {buttonText}
        </button>
        <button
          type="button"
          onClick={this.addTodoListItem}
        >
          Add Item
        </button>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}

HelloReact.propTypes = {
  text: PropTypes.string,
  todoList: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func.isRequired,
};

HelloReact.defaultProps = {
  text: 'React',
  todoList: [],
};

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
  };
}

export default connect(mapStateToProps)(HelloReact);
