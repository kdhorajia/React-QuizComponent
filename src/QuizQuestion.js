import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    handleClick(button_text) {
        if (this.props.quiz_question.answer === button_text){
            this.props.showNextQuestionHandle()
        }
    }
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((opt, _index) => {
                            return <QuizQuestionButton key={_index} button_text={opt} clickHandler={this.handleClick.bind(this)}></QuizQuestionButton>
                        })}

                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;