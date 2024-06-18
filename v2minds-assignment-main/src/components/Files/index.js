import { useContext} from "react";
import SelectedContext from "../../SelectedContext";
import { FaChevronRight } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";

const Files=(props)=>{
    const {fileHandler}=props
    const selectedFolderList=useContext(SelectedContext);
   
    return(
        <div className="max-h-[450px] h-[300px] relative overflow-y-auto w-4/5 mt-8 bg-neutral-100   ">
             <div className="h-[50px] w-full sticky  bg-cyan-50 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
                <p className="text-Cyan-200 text-base ml-2">Backup Set Name:</p>
                <select className="text-Cyan-200 text-base ml-2" value="Deafult Backup Set">
                    <option name="Deafult Backup Set" className="text-base" value="Deafult Backup Set">Deafult Backup Set</option>
                </select>
            </div>
            <div className="flex flex-row items-center">
            <p className="text-Cyan-200 text-base ml-2">Backup Schedule</p>
               <div className="h-20px w-20px rounded-2xl ml-1 bg-black"> <FaChevronRight size={25} fill="white"/></div>
            </div>   
        </div>


        <div className=" ml-8 bg-Slate-200 ">
        <div className="w-3/4 h-[30px] flex flex-row items-center">
            <div className="flex flex-row justify-start items-center">
                <input type="checkbox"/>
                <p className="text-black">File/Folder name</p>
            </div>
            </div>
        </div>

            {selectedFolderList.map(folder=>(folder.files.map(each=>(
                <li className="style-none w-3/4 flex flex-row justify-between items-center m-4"  key={each.id}>
                     <div className="flex flex-row ">
                    <input type="checkbox" className="ml-3" onClick={()=>fileHandler(each.id)} />
                    <div className="h-25px w-25px mr-2 p-1 ml-3 bg-cyan-300 flex flex-row justify-center items-center">
                            <FaRegFolderOpen size={20} fill="white"/>
                    </div>
                    <p>{each.file}</p>
                    </div>
                </li>
            ))))}
            
        </div>
        
    )
}

export default Files