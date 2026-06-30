import { useState } from 'react'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

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
            <dl>
                <dt>good {good}</dt>
                <dt>neutral {neutral}</dt>
                <dt>bad {bad}</dt>
            </dl>
            
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

export default App
