import React,{Component} from 'react'
import './assets/style.css';
import ReactDOM from "react-dom"
import quizService from './quizService/index';
import QuestionBox from "./components/QuestionBox";
import Result from "./components/results";
class Quizbee extends Component{
    state={
        questionBank:[

        ],
        score:0,
        responses:0
    };
    getQuestion = ()=>{
        quizService().then(question=>{
            this.setState({questionBank:question});
        });
    };
    playAgain =()=>{
        this.getQuestion();
        this.setState({
            score:0,
            responses:0
        })
    }
    computeAnswer= (answer,correctAnswer)=>{
        if(answer === correctAnswer){
            this.setState({
                score:this.state.score+ 1
            });
            
        };
        this.setState({
            responses:this.state.responses < 10 ? this.state.responses + 1 : 10
        });


    };
    componentDidMount(){
        this.getQuestion();

    }

    render(){
        return(
            <div className="container">
                <div className="title">
                    <h1>QUIZ APPLICATION</h1>
                    <p>
                    Welcome to the Quiz Application. <br/> Can you answer this 10 questions?
                </p>
                </div>
                
                {this.state.questionBank.length >0 && this.state.responses < 10 && this.state.questionBank.map((
                    {question,answers,correct,questionId})=>
                    (<QuestionBox question={question} option={answers} key={questionId}
                    selected={answer => this.computeAnswer(answer,correct)}
                    />))};

                    {this.state.responses === 10 ? (<Result score={this.state.score} playAgain={this.playAgain}/>):null}
            </div>
        );
    }
    
}

ReactDOM.render(<Quizbee/>,document.getElementById("root"));
export default Quizbee;