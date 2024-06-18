import React, {  useState } from 'react'
import Folders from "./components/Folders"
import Files from "./components/Files"
import SelectedContext from './SelectedContext';
import { MdHome } from "react-icons/md";
import './App.css';

const datas=[
  {
      id:1,
      folder:"Music",
      isSelected:false,
      date:"2016/04/03 11:25:03 AM",
      files:[
        {
          id:101,
          file:"MediaStreamTrack.mp3",
          isSelected:false
        },
        {
          id:102,
          file:"MediaStreamTrack.mp3",
          isSelected:false
        },
        {
          id:103,
          file:"MediaStreamTrack.mp3",
          isSelected:false
        },
        {
          id:104,
          file:"MediaStreamTrack.mp3",
          isSelected:false
        },
        {
          id:105,
          file:"MediaStreamTrack.mp3",
          isSelected:false
        },
      ]
  },

  {
      id:2,
      folder:"Photos",
      isSelected:false,
      date:"2018/09/23 12:25:03 pM",
      files:[
        {
          id:201,
          file:"ndcsjd.png",
          isSelected:false
        },
        {
          id:202,
          file:"ndcsjd.png",
          isSelected:false
        },
        {
          id:203,
          file:"ndcsjd.png",
          isSelected:false
        },
        {
          id:204,
          file:"ndcsjd.png",
          isSelected:false
        },
        {
          id:205,
          file:"ndcsjd.png",
          isSelected:false
        },
        {
          id:206,
          file:"ndcsjd.png",
          isSelected:false
        },
        {
          id:207,
          file:"ndcsjd.png",
          isSelected:false
        },
        {
          id:208,
          file:"ndcsjd.png",
          isSelected:false
        },
      ]
  },

  {
      id:3,
      folder:"Public",
      isSelected:false,
      date:"2022/09/03 02:55:03 AM",
      files:[
          {
              id:301,
              file:"xsdf.doc",
              isSelected:false
          },
          {
              id:302,
              file:"xsdf.doc",
              isSelected:false
          },
          {
              id:303,
              file:"xsdf.doc",
              isSelected:false
          },
          {
              id:304,
              file:"xsdf.doc",
              isSelected:false
          },
      ]
  }
  ,
  {
      id:4,
      folder:"Shared",
      isSelected:false,
      date:"2023/08/09 04:55:17 AM",
      files:[
        {
          id:401,
          file:"nxbdjka.mp3",
          isSelected:false
        },
        {
          id:402,
          file:"nxbdjka.mp3",
          isSelected:false
        },
        {
          id:403,
          file:"nxbdjka.mp3",
          isSelected:false
        },
        {
          id:404,
          file:"nxbdjka.mp3",
          isSelected:false
        },
        {
          id:405,
          file:"nxbdjka.mp3",
          isSelected:false
        },
        {
          id:406,
          file:"nxbdjka.mp3",
          isSelected:false
        },
        {
          id:407,
          file:"nxbdjka.mp3",
          isSelected:false
        },
      ]
  }
]


const App = () => {
const [selectedFolderList,setselectedFolderList]=useState([]);
  
  const checkboxHandler=(id)=>{
    
    datas.map(each=>{
        if(each.id===id){
            const update=each.isSelected=!each.isSelected
            return {...each,update}
        }
        return each
    })
    
    const item=datas.find(each=>each.id===id)
  
    if(item.isSelected===true){
        setselectedFolderList(prev=>[...prev,item]);
    }else{
    const filterList=selectedFolderList.filter(each=>each.id!==id)    
    
    setselectedFolderList(filterList)
    } 
    
}

const [selectedFile,setselectedFile]=useState("");

const fileHandler=(id)=>{
    selectedFolderList.map(folder=>(folder.files.map(file=>{
       if(file.id===id){
        const update=file.isSelected=!file.isSelected
          return {...file,update}
       }
       return file;
})))

const item=selectedFolderList.find(folder=>folder.files.find(each=>each.id===id))
console.log(item)
const filesItem=item.files.find(file=>file.id===id)
console.log(filesItem)
if(filesItem.isSelected===true){
    setselectedFile(filesItem.file);
}else{    
setselectedFile("")
}
}


  return (
    <SelectedContext.Provider value={selectedFolderList}>
        <div className=' app flex flex-col items-center bg-cyan-100 pt-10'>
          <div className='ml-5 w-full self-start flex flex-row items-center'>
            <MdHome fill='cyan' size={18}/>
            <h1>Home/</h1>
            <h1>/{selectedFolderList.map(each=>each.folder)}/{selectedFile}</h1>  
          </div>
          <Folders datas={datas} checkboxHandler={checkboxHandler}/>
          <Files fileHandler={fileHandler}/>
        </div>
    </SelectedContext.Provider>
  )
}

export default App 