import { CrossLogo } from "../../assets/images/images";
const ModalDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-4 rounded-lg w-11/12 max-w-md">

        <div className="flex items-center justify-between">
            <div>
            <h2 className="text-xl font-bold">Get on a Call with a </h2>
            <h2 className="text-xl font-bold mb-4 text-[#3E66DF]"> Career Expert</h2>
             </div>   
       

        <img src={CrossLogo}  height={'41.94px'} width={'41.94px'} className="cursor-pointer" onClick={onClose}/>
        </div>
        <form>
          <label className="font-bold">Name</label>
          <input type="text" placeholder="Name" className="border rounded w-full p-2 mb-4" />
          <label className="font-bold">Email</label>
          <input type="email" placeholder="Email" className="border rounded w-full p-2 mb-4" />
          <label className="font-bold">Number</label>
          <input type="text" placeholder="Number" className="border rounded w-full p-2 mb-4" />
          <p className="text-sm mb-2 font-bold">
        You will get a call back on this number within 24hrs.
        </p>
          <button type="button" className="bg-blue-500 text-white w-full p-2 rounded font-bold">Schedule a Call</button>
   
        </form>

     
        {/* <button onClick={onClose} className="absolute top-2 bg-red-400 right-2 text-xl">&times;</button> */}
      </div>
    </div>
  );
}

export default ModalDialog;
