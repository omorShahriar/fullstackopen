import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [vote,setVote] = useState(new Array(6+1).join('0').split('').map(parseFloat))  //[0,0,0,0,0,0]
    const highestVoteInedex = vote.indexOf(Math.max(...vote))
    const handleAnecdote = () => {
        let i = Math.floor(Math.random()*6)
        setSelected(i)
    }
    const handleVote = () => {
        const copy = [...vote]
        copy[selected] += 1
        setVote(copy)
    }

    return (
        <div>
            <h2>Anecdote of The Day</h2>
            <div>
                <p>{props.anecdotes[selected]}</p>
                has {vote[selected]} votes
            </div>
            <div>
                <button onClick={handleVote}>vote</button>
                <button onClick={handleAnecdote}>next anecdote</button>
            </div>
            <h2>Anecdote with Most Votes</h2>
            <div>
                <p>{props.anecdotes[highestVoteInedex]}</p>
                has {vote[highestVoteInedex]} votes
            </div>

        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
