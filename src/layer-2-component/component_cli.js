const CommandList = ({cli}) => {
    return(
        <div className="cli-list">
            {cli.map((command) => (

                <div className="command" key={command.id}>
                    <div>
                        <h2>Program</h2>
                        <div>{command.program}</div>
                    </div>
                    <div>
                        <h2>Prompt</h2>
                        <div className="command-prompt">
                            
                            <p>{command.description}</p>
                            <label>Prompt</label>
                            <code>{command.prompt}</code>
                            <label>Example</label>
                            <code>{command.example}</code>
                        </div>
                    </div>
                    <div className="command-attributes">
                        <div className="parameters">
                            <h2>Parameters</h2>
                            {command.parameters.map((parameter) => (
                                <div className="parameter">
                                    <p>{parameter.description}</p>
                                    <label>Parameter</label>
                                    <code>{parameter.parameter}</code>
                                    <label>Example</label>
                                    <code>{parameter.example}</code>
                                </div>
                            ))}
                        </div>
                            
                        <div className="flags">
                            <h2>Flags</h2>
                            {command.flags.map((flag) => (
                                <div className="flag">
                                    <p>{flag.description}</p>
                                    <label>Flag</label>
                                    <code>{flag.flag}</code>
                                    <label>Example</label>
                                    <code>{flag.example}</code>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommandList;