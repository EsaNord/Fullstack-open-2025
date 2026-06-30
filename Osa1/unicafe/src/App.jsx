import { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)             // +1
    const [neutral, setNeutral] = useState(0)       // 0
    const [bad, setBad] = useState(0)               // -1

    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)

    return (
        <div>
            <Header text={'Give feedback'} />
            <Button onClick={handleGood} text='good' />           
            <Button onClick={handleNeutral} text='neutral' />             
            <Button onClick={handleBad} text='bad' /> 
            <Header text={'Statistics'} />
            <Statistics good={good} neutral={neutral} bad={bad} />            
        </div>
    )
}

const Header = (header) => {
    return <h1>{header.text}</h1>
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    return (
        <dl>
            <dt>good {good}</dt>
            <dt>neutral {neutral}</dt>
            <dt>bad {bad}</dt>
            <Total good={good} neutral={neutral} bad={bad} />
            <Average good={good} neutral={neutral} bad={bad} />
            <Positive good={good} neutral={neutral} bad={bad} />
        </dl>
    )
}

const Total = ({ good, neutral, bad }) => {
    let total = good + neutral + bad
    return (        
        <dt>total {total}</dt>
    )
}

const Average = ({ good, neutral, bad }) => {
    let average = 0
    if (good > 0 || neutral > 0 || bad > 0) {
        average = (good - bad) / (good + neutral + bad)
    }

    return (
        <dt>average {average}</dt>
    )
}

const Positive = ({ good, neutral, bad }) => {
    let positive = 0
    if (good > 0 || neutral > 0 || bad > 0) {
        positive = (good / (good + neutral + bad)) * 100
    }
    return (
        <dt>positive {positive} %</dt>
    )
}

export default App
