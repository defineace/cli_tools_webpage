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

export default Code;