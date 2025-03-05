import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { updateImage } from "../../../../services/operations/authApi";
import { useDispatch } from "react-redux";

function ProfilePictureHeader() {
  const [isEdit, setEdit] = useState(false);
  const { user } = useSelector((state) => state.profile);
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if(selectedFile){
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
}
  };
  const dispatch = useDispatch()
  // const token = localStorage("token");
  const handleUpload = async () => {

    console.log("It executes")
    if (!file) {
      toast.error("Please Select File First");
      return;
    }
    const formData = new FormData();
    formData.append("displayPicture",file)
    console.log("FOrm",formData)
    dispatch(updateImage(formData))
  };

  return (
    <div className="border-[#2C333F] border rounded-lg bg-[#161D29] mx-auto lg:w-[85%] mt-10 w-full max-h-32">
      {isEdit ? (
        <div className="flex items-center gap-5 p-5">
          <img
            height={78}
            width={78}
            src={
              preview ||user.image ||
              `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`
            }
            alt="Error 404"
            className="rounded-full"
          />
          <div className="flex flex-col justify-between items-start gap-3">
            <h1 className="text-[#DBDDEA] text-base">Change Profile Picture</h1>
            
          

            <div className="flex items-center gap-3">
            {!file ? (<div>
              <label
              htmlFor="fileInput"
              className="cursor-pointer bg-[#FFD60A] text-black px-4 py-2 rounded-md"
            >
              Change
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            </div>) : (
             
                     <button
                className="bg-blue-500 text-[#000814] text-base flex justify-center items-center gap-2 py-1 px-4 rounded-lg hover:scale-105 transition-all duration-200"
                onClick={handleUpload} 
              >
                upload
              </button>
            
              
            )}
             
              <button
                className="bg-[#2C333F] text-[#C5C7D4] text-base flex justify-center items-center gap-2 py-1 px-3 rounded-md hover:scale-105 transition-all duration-200 border border-[#424854]"
                onClick={() => {setEdit(true); console.log("click me")}}
                disabled={file ? false : true}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between p-3 items-center">
          <div className="flex justify-center items-center gap-4">
            <img
              height={78}
              width={78}
              src={
                user.image ||
                `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`
              }
              alt="Error 404"
              className="rounded-full"
            />
            <span className="flex flex-col gap-1">
              <h1 className="text-[#F1F2FF] text-lg">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-[#838894] text-sm">{user.email}</p>
            </span>
          </div>
          <div>
            <button
              className="bg-[#FFD60A] text-[#000814] text-base flex justify-center items-center gap-2 py-1 px-3 rounded-lg hover:scale-105 transition-all duration-200"
              onClick={() => setEdit(true)}
            >
              <FaEdit className="text-xl" /> <span>Edit</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePictureHeader;
