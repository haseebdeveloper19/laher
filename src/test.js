import React , {useState} from 'react'

function test() {
    const initialcount = 0 
    const [count, setCount] = useState(initialcount)

    const AnotherFun = () =>{
        // setCount( count + 1 )
        setCount(privious => privious + 1) 
        // as like working on react js class base components
        this.setState(privious =>{
            return{
                count : privious.count + 1 
            }
        })
    }


    return (
        <div>
            <button onClick={ () => setCount(count)}>Count {count}</button>
            <button onClick={ () => setCount(count - 1)}>Count {count}</button>
            <button onClick={ () => setCount(count + 1)}>Count {count}</button>
            <button onClick={ () => AnotherFun}>Count {count}</button>


            
        </div>
    )
}

export default test

