const handle_click = (index) => {
    window.scrollTo({top:document.getElementById('div-'+index).offsetTop, behavoir:'smooth'});
}

const handle_scroll = (index) => {
    setInterval(()=>{
        const clientHeight = document.documentElement.clientHeight;
       
        const div_command = document.getElementById('div-'+index).getBoundingClientRect();

        console.log('Index: ', index);
        console.log('Bottom: ', div_command.y);
        console.log('Top: ', div_command.y+div_command.height);
        console.log(' ');
        console.log('Height: ', div_command.height);
        console.log('Client Height: ', clientHeight);
        console.log('---------------------------------');

        if(div_command.y < clientHeight ){
            document.getElementById('btn-'+index).style.backgroundColor = '#f0c32f';
        }

        if(div_command.y < 0 && div_command.y+div_command.height<=0){
            document.getElementById('btn-'+(index)).style.backgroundColor = 'white';
        }
        
        if(div_command.y > clientHeight ){
            document.getElementById('btn-'+(index)).style.backgroundColor = 'white';
        }


    }, 500)

}


const Navbar = ({cli}) => {
    return(
        <div className="navbar">
        <h1>Command Line Prompts</h1>
        {
            cli.map((command,index) => (
                <button onClick={() => {handle_click(index)}} onScroll={handle_scroll(index)} id={'btn-'+index}><h3>{command.program}</h3>  {command.prompt}</button>
            ))
        }
        </div>
    );
};


  export default Navbar;