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

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
    let total = Total(good, neutral, bad)
    if (total > 0) {
        return (
            <table>
                <tbody>
                    <StatisticsLine text={'good'} value={good} />
                    <StatisticsLine text={'neutral'} value={neutral} />
                    <StatisticsLine text={'bad'} value={bad} />
                    <StatisticsLine text={'total'} value={total} />
                    <StatisticsLine text={'average'} value={Average(good, bad, total)} />
                    <StatisticsLine text={'positive'} value={Positive(good, total)} additional={'%'} />
                </tbody>
            </table>
        )
    }
    return (<p>No feedback given</p>)
}

const StatisticsLine = ({ text, value, additional = '' }) =>
    <tr><td>{text}</td><td>{value} {additional}</td></tr>

const Total = (good, neutral, bad) => good + neutral + bad

const Average = (good, bad, total) => {
    if (total > 0) {
        return (good - bad) / (total)
    }
    return 0
}

const Positive = (good, total) => {
    if (total > 0) {
        return (good / (total)) * 100
    }
    return 0
}

export default App
