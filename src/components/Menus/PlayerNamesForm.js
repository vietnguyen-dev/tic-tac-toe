import {useState} from 'react';

const PlayerNamesForm = props =>{
    const [p1Name, setp1Name] = useState("");
    const [p2Name, setp2Name] = useState("");

    const changep1Name = event =>{
      setp1Name(event.target.value);
    }

    const changep2Name = event =>{
      setp2Name(event.target.value);
    }

    const submitPlayerNames = event =>{
        event.preventDefault();
        const data = {
            player1Name: p1Name,
            player2Name: p2Name
        }
        props.submitPlayerData(data, false);
        setp1Name("");
        setp2Name("");
    }

    return (
      <div>
        <form onSubmit={submitPlayerNames}>
          <div>
            <label>Player 1 Name</label>
            <input value={p1Name} onChange={changep1Name} type="text"></input>
          </div>
          <div>
            <label>Player 2 Name</label>
            <input value={p2Name} onChange={changep2Name} type="text"></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
export default PlayerNamesForm;