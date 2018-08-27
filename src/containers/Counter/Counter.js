import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" value={1} clicked={this.props.onIncrementBy} />
                <CounterControl label="Decrement" value={1} clicked={this.props.onDecrementBy} />
                <CounterControl label="Add 5" value={5} clicked={this.props.onIncrementBy} />
                <CounterControl label="Subtract 5" value={5} clicked={this.props.onDecrementBy} />
                <hr />
                <button onClick={() => this.props.onSaveResult(this.props.counter)}>Save</button>
                <ul>
                    {this.props.results.map((result) => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result)}>
                            {result.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        counter: state.counter,
        results: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementBy: (value) => dispatch({
            type: 'ADD',
            payload: {
                value: value
            }
        }),
        onDecrementBy: (value) => dispatch({
            type: 'SUBTRACT',
            payload: {
                value: value
            }
        }),
        onSaveResult: (value) => dispatch({
            type: 'SAVE',
            payload: {
                value: value
            }
        }),
        onDeleteResult: (result) => dispatch({
            type: 'DELETE',
            payload: {
                id: result.id,
                value: result.value
            }
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);