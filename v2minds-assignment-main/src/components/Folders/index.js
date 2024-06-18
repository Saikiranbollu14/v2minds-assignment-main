import { FaArchive } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiPlusCircle } from "react-icons/hi";
import { FaRegFolderOpen } from "react-icons/fa";

const Folders=(props)=>{
    const {datas,checkboxHandler}=props
   
    return(
    <div className="h-150px w-4/5 bg-neutral-100   ">
        <div className="h-[50px] w-full  bg-cyan-50 flex flex-row justify-end items-center">
            <div className="flex flex-row items-center">
                <div className="h-20px w-20px rounded-2xl bg-black">
                   <FaArchive size={15} fill="white"/>
                </div>
                <p className="text-Cyan-200 text-base ml-2">Archive Cleanup</p>
            </div>
            <div className="flex flex-row ml-3 items-center">
               <div className="h-20px w-20px rounded-2xl bg-black"> <CiSearch size={15} fill="white"/></div>
                <p className="text-Cyan-200 text-base ml-2">Search</p>
            </div>
            <div className="ml-3 flex flex-row ml-3 items-center">
                <HiPlusCircle size={15} fill="text-#a5f3fc"/>
                <p className="text-Cyan-200 text-base">Create new Backup Set</p>
            </div>
        </div>

        <div className="h-20px ml-8 bg-Slate-200 ">
        <div className="w-3/4 flex flex-row justify-between items-center">
            <div className="flex flex-row justify-start items-center">
                <input type="checkbox"/>
                <p className="text-black">File/Folder name</p>
            </div>
            <div className=" w-2/5 flex flex-row justify-between">
                <p className="text-black">Size</p>
                <p className="text-black">Data modified</p>
            </div>
            </div>
        </div>

        <ul className="flex flex-col justify-center items-center">
            {datas.map(each=>(
                <li className="style-none w-3/4 flex flex-row justify-between items-center m-4" key={each.id}>
                    <div className="flex flex-row justify-between">
                        <input type="checkbox" className="mr-2 h-20px w-20px" onClick={()=>checkboxHandler(each.id)} />
                        <div className="h-25px w-25px mr-2 p-1 bg-cyan-300 flex flex-row justify-center items-center">
                            <FaRegFolderOpen size={20} fill="white"/>
                        </div>
                        <p className="text-Cyan-200 ">{each.folder}</p>
                    </div>
                    <p className="text-black">--</p>
                    <p className="text-black">{each.date}</p>
                </li>
            ))}
        </ul>
    </div>
)
}

export default Folders