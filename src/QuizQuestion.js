import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = { incorrectAnswer: false }
    }

    handleClick(button_text) {
        if (this.props.quiz_question.answer === button_text) {
            this.setState(_ => { return { incorrectAnswer: false } })
            this.props.showNextQuestionHandler()
        } else {
            this.setState(_ => { return { incorrectAnswer: true } })

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
                {(this.state.incorrectAnswer) ? <p className='error'>Sorry, that's not right</p> : null}
            </main>
        );
    }
}

export default QuizQuestion;