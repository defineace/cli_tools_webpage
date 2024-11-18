import useFetch from "./useFetch";

function AppIndex () {

  const url = 'http://localhost:8080/windows';
  const {data: commands, isPending, error} = useFetch(url);


  return(
    <div className="App">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {commands && commands.map((command) => (
        <article>
          <div style={{border: '3px solid black'}}>
            <h1 style={{border: '1px solid black', textAlign: 'center', fontSize: '2em'}}>{command.Prompt}</h1>
            
            <h3>Prompt Description</h3>
            <p>{command.Prompt_Description}</p>
            
            <h3>Prompt Example</h3>
            <p>{command.Prompt_Example}</p>
            
            <h3>Prompt Parameters</h3>
            <div></div>
            
            <h3>Prompt Flags</h3>
            <div></div>
          </div>
        </article>
      ))}
    </div>
  );


};

export default AppIndex;
