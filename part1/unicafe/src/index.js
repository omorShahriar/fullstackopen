import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>
}
const Statistic = ({text,value}) => {
    return <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
}
const Statistics = ({good,neutral,bad}) => {
    const total = good + neutral + bad
    if(total>0) {
        const averageScore = ((good*1)+(-(bad*1)))/total
        const positiveFeedback = `${(good/total)*100} %`
        return (
            <table>
                <tbody>
                <Statistic value={good} text="Good"/>
                <Statistic value={neutral} text="Neutral"/>
                <Statistic value={bad} text="Bad"/>
                <Statistic value={total} text="All"/>
                <Statistic value={averageScore} text="average"/>
                <Statistic value={positiveFeedback} text="positive"/>
                </tbody>

            </table>

        )
    }
    return <p>No feedback given</p>
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }
    const handleBad = () => {
        setBad(bad + 1)
    }
    return (
        <div>
            <h1>Give Feedback</h1>
            <Button text="good" handleClick={handleGood}/>
            <Button text="neutral" handleClick={handleNeutral}/>
            <Button text="bad" handleClick={handleBad}/>
            <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)