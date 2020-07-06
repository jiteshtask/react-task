import React from 'react'
import folder from '../../assets/images/folder.svg';

const ChildFileStructure = props => {


    return (
        <div className="folder_wrapper">
          <div className="folder_inner">
            {props.childFolder.map((f,i) =>  
            <div className="folder">
            <img src={folder}/>
              <span className="folder_name">{`Child Folder`+ (i+1)} </span>
            </div>)}
            <div className="add_folder" onClick ={props.addFolder}>
              +
            </div>
          </div>
          <button onClick={()=>{
              props.handlePage(page=>1)
              props.addMainArray()
              }}>back</button>
        </div>
      );
}

export default ChildFileStructure;