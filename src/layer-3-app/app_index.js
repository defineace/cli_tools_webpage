import useFetch from '../layer-0/hooks/hook_useFetch';

import CommandList from '../layer-2-component/component_cli';
import Navbar from '../layer-2-component/component_navbar';



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
        {commands && <CommandList cli={commands} />}
      </div>
    </div>
  );
};

export default AppIndex;
