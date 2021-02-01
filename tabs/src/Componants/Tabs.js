import React, {useState} from 'react';

const Tab = ({header,content}) => {

    const tabs = [
        {header:"Tab 1",
        content:"Tab 1 Holaaaa"    
    },
        {header:"Tab 2",
        content:"Tab 2 why are you here?."    
    },
        {header:"Tab 3",
        content:"Tab 3 i did the assigment give me food!!."    
    }]
    const [state, setState] = useState({
        content:"",   
        color:"",
        id:""
    });  

    const onClickHandler = (e,index) => {
        // alert("lol");
        setState({
            content:tabs[index].content,
            color:"lightblue",
            id:index
        })
    }

    return (
        <div>
        {tabs.map((tab,i) => 
        <button onClick={(e)=> onClickHandler(e,i)} key={i} {...tab}
        style={{color:"lightpink",backgroundColor:
        state.id==i&&state.color
        }}
        
        >{tab.header}</button>
    )}
        <p>{state.content}</p>
        </div>        

    )}
export default Tab;