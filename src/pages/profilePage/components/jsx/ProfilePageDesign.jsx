import React, { useState } from 'react'
import Avatar from "react-avatar-edit"
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import "../css/ProfilePageDesign.css"


const ProfilePageDesign = () => {
    const [dialogBox, setDialogBox] = useState(false)
    const [profileImg, setProfileImg] = useState(null)
    const [storeImg, setStoreImg] = useState(null)

    const avatarOnCrop = (view) => {
        setProfileImg(view)
    }

    const avatarOnClose = () => {
        setProfileImg(null)
    }

    const dialogButtonClicked = () => {
        setStoreImg(profileImg);
        setDialogBox(false);
    }


    return (
        <>
            <div className="sectionProfileHolder">
                <div className='formHolderBG signupPage profilePage'>
                    <div className='profilePhoto' onClick={() => { setDialogBox(true) }} style={{ cursor: "grab" }}>
                        <div>
                            <img id='signupProfile' src={storeImg ? storeImg : 'images/profile04.png'} />
                            <p>{storeImg ? "Change" : "Upload"}<br />Profile<br />Photo</p>
                        </div>
                    </div>

                    <Dialog open={dialogBox} onClose={() => { setDialogBox(false) }}>
                        {profileImg && (<DialogTitle className="showInDialog">Crop:</DialogTitle>)}
                        <Avatar width={window.innerWidth > 767 ? 500 : window.innerWidth / 1.5} height={500} onClose={avatarOnClose} onCrop={avatarOnCrop} style={{
                            backgroundColor: "red"
                        }} />
                        {profileImg && (
                            <Button className="showInDialog" variant="contained" onClick={dialogButtonClicked} style={{ width: "100px", margin: "25px auto", inset: "0" }}>Upload
                            </Button>)}
                    </Dialog>

                    <div className="logInForm">
                        <div className="formLevels">
                            <div>
                                <h2>
                                    <span id="span01">First Name:</span>
                                    <span id="span02" ><DriveFileRenameOutlineIcon onClick={() => { document.querySelectorAll(".inputHolder input")[0].focus() }} /></span>
                                </h2>
                                <div className='inputHolder'>
                                    <input type="text" required />
                                    <div className='palceholderBG'></div>
                                </div>
                            </div>
                            <div>
                                <h2>
                                    <span id="span01">Last Name:</span>
                                    <span id="span02" ><DriveFileRenameOutlineIcon onClick={() => { document.querySelectorAll(".inputHolder input")[1].focus() }} /></span>
                                </h2>
                                <div className='inputHolder'>
                                    <input type="text" required />
                                    <div className='palceholderBG'></div>
                                </div>
                            </div>
                        </div>
                        <div className="formLevels">
                            <div>
                                <h2>
                                    <span id="span01">
                                        E-Mail:
                                    </span>
                                    <span id="span02" ><DriveFileRenameOutlineIcon onClick={() => { document.querySelectorAll(".inputHolder input")[2].focus() }} /></span>
                                </h2>
                                <div className='inputHolder'>
                                    <input type="email" required />
                                    <div className='palceholderBG'></div>
                                </div>
                            </div>
                            <div>
                                <h2>
                                    <span id="span01">Username:</span>
                                    <span id="span02" ><DriveFileRenameOutlineIcon onClick={() => { document.querySelectorAll(".inputHolder input")[3].focus() }} /></span>
                                </h2>
                                <div className='inputHolder'>
                                    <input type="text" required />
                                    <div className='palceholderBG'></div>
                                </div>
                            </div>
                        </div >
                        <div className="formLevels">
                            <div>
                                <h2>
                                    <span id="span01">Password:</span>
                                    <span id="span02" ><DriveFileRenameOutlineIcon onClick={() => { document.querySelectorAll(".inputHolder input")[4].focus() }} /></span>
                                </h2>
                                <div className='inputHolder'>
                                    <input type='password' required />
                                    <div className='palceholderBG'></div>
                                </div>
                            </div>
                        </div >
                        <button className="logInPageButton profilePageButton" type='submit'>
                            Update
                        </button>
                    </div >
                </div >
            </div >
        </>
    )
}

export default ProfilePageDesign