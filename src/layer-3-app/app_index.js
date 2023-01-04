import useFetch from '../layer-1-segment/segment_useFetch';
import CommandList from '../layer-2-component/component_cli';




const handle_scroll = (index) => {
  window.scrollTo({top:document.getElementById('div-'+index).offsetTop, behavoir:'smooth'});
}

const Navbar = ({cli}) => {
  return(
    <div className="navbar">
      <h1>Command Line Prompts</h1>
      {
        cli.map((command,index) => ( 
          <button onClick={() => {handle_scroll(index)}}><h3>{command.program}</h3>  {command.prompt}</button>
        ))
      }
    </div>
  );
};


function AppIndex() {
  const {data: commands,isPending,error} = useFetch('http://localhost:8000/cli_prompts');

  return(
    <div className="container">
      <div className="navbar">
        {commands && <Navbar cli={commands} />}
      </div>
      <div className="content">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {commands && <CommandList cli={commands}/>}
      </div>
    </div>
  );
};

export default AppIndex;
