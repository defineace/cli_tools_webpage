import useFetch from '../layer-1-segment/segment_useFetch';
import CommandList from '../layer-2-component/component_cli';

function AppIndex() {
  const {data: commands,isPending,error} = useFetch('http://localhost:8000/cli_prompts');

  return(
      <div className="content">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {commands && <CommandList cli={commands}/>}
      </div>
  );
}

export default AppIndex;
