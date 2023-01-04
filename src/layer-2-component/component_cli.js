const captializeLetter = (str) =>{
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const Code = ({attribute,query,styleName}) => {
    return(
        attribute.map((i) => (
            <div className={styleName}>
                <p>{i.description}</p>
                <label>{captializeLetter(query)}</label>
                <code>{i[query]}</code>
                <label>Example</label>
                <code>{i.example}</code>
            </div>
        ))
    );
};


const CommandList = ({cli}) => {
    return(
        cli.map((command, index) => (
            
            <div className="command-list" id={'div-'+index}>
                <div className="command" key={command.id}>
                    <div className="title">
                        <h1>{command.program}</h1>
                    </div>

                    <div>
                        <h2>Prompt</h2>
                        <Code
                            attribute={[{description:command.description,prompt:command.prompt,example:command.example}]}
                            query="prompt"
                            styleName="prompt"
                        />
                    </div>

                    <div className="attributes">
                        <div>
                            <h2>Parameters</h2>
                            <Code attribute={command.parameters} query="parameter" styleName="attribute"/>
                        </div>
                            
                        <div>
                            <h2>Flags</h2>
                            <Code attribute={command.flags} query="flag" styleName="attribute"/>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );
}

export default CommandList;