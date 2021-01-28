
import React, {useState, useEffect} from 'react'
import {Input, Button} from 'reactstrap'
import {URLValidation, numValidation} from './validations'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import db from "./firebaseInit";

const unBoxingStyles = {
  border: '2px solid black',
  backgroundColor: '#8fbc8f',
};

const divStyles = {
  marginLeft: '20px',
  marginRight: '30%',
};

const typeOfDeviceStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  margin: '20px'
}

const inputRowStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
}

const inputStyles = {
  width: '25%',
}

const buttonStyles = {
  marginBottom: '2rem',
  width: '110px'
}

const saveButtonStyles = {
  marginBottom: '2rem',
  width: '110px',
  marginRight: '5px'
}

const paraStyles = {
  marginLeft: '300px'
}

const spanStyles = {
  marginRight: '65px',
  marginLeft: '20px',
  marginBottom: '15px'
}

const twoDSpanStyles = {
  marginRight: '38px',
  marginLeft: '20px'
}

const firstInputStyles = {
  marginRight: '65px',
  width: '25%',
}

const inputErrorStyle = {
  borderColor: 'red'
}

const latSpanStyles = {
  marginRight: '126px',
  marginBottom: '25px',
  marginLeft: '20px'
}

const lonSpanStyles = {
  marginRight: '114px',
  marginBottom: '25px',
  marginLeft: '20px'
}

const headerStyles = {
  marginLeft: '20px'
}

const popupSpanStyles = {
  marginRight: '127px',
  marginLeft: '20px'
} 


const App = () => {  
  const [showEdit, setShowEdit] = useState(true)
  const [inputDetails, setInputDetails] = useState({
        unboxingInputDetailsSeasonalElementAndroidInputVal: {
          unboxingInputDetailsSeasonalElementAndroidInputVal: '',
          type: "url",
          valid: true
        },
        unboxingInputDetailsSeasonalElementIosInputVal: {
          unboxingInputDetailsSeasonalElementIosInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerOneDetailsAnimationAndroidInputVal: {
          augmentedBannerOneDetailsAnimationAndroidInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerOneDetailsAnimationIosInputVal: {
          augmentedBannerOneDetailsAnimationIosInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerOneDetailsTwoDTargetNameURLAndroidInputVal: {
          augmentedBannerOneDetailsTwoDTargetNameURLAndroidInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerOneDetailsTwoDTargetImageAndroidInputVal: {
          augmentedBannerOneDetailsTwoDTargetImageAndroidInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerTwoDetailsAnimationAndroidInputVal: {
          augmentedBannerTwoDetailsAnimationAndroidInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerTwoDetailsAnimationiosInputVal: {
          augmentedBannerTwoDetailsAnimationiosInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerTwoDetailsTwoDTargetNameURLAndroidInputVal: {
          augmentedBannerTwoDetailsTwoDTargetNameURLAndroidInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerTwoDetailsTwoDTargetImageAndroidInputVal: {
          augmentedBannerTwoDetailsTwoDTargetImageAndroidInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerThreeDetailsAnimationAndroidInputVal: {
          augmentedBannerThreeDetailsAnimationAndroidInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerThreeDetailsAnimationIosInputVal: {
          augmentedBannerThreeDetailsAnimationIosInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerThreeDetailsTwoDTargetNameURLAndroidInputVal: {
          augmentedBannerThreeDetailsTwoDTargetNameURLAndroidInputVal: '',
          type: "url",
          valid: true
        },
        augmentedBannerThreeDetailsTwoDTargetImageAndroidInputVal: {
          augmentedBannerThreeDetailsTwoDTargetImageAndroidInputVal: '',
          type: "url",
          valid: true
        },
        stadiumNoBaneerDetailsAnimationAndroidInputVal: {
          stadiumNoBaneerDetailsAnimationAndroidInputVal: '',
          type: "url",
          valid: true
        },
        stadiumNoBaneerDetailsAnimationIosInputVal: {
          stadiumNoBaneerDetailsAnimationIosInputVal: '',
          type: "url",
          valid: true
        }, 
        stadiumNoBaneerDetailsLatitudeAndroidInputVal: {
          stadiumNoBaneerDetailsLatitudeAndroidInputVal: '',
          type: "num",
          valid: true
        },
        stadiumNoBaneerDetailsLongitudAandroidInputVal: {
          stadiumNoBaneerDetailsLongitudAandroidInputVal: '',
          type: "num",
          valid: true
        },
        popupStoreDetailsModelAndroidInputVal: {
          popupStoreDetailsModelAndroidInputVal: '',
          type: "url",
          valid: true
        },
        popupStoreDetailsModelIosInputVal: {
          popupStoreDetailsModelIosInputVal: '',
          type: "url",
          valid: true
        },
  })

    useEffect(() => {
     const newInputDetails = {...inputDetails}
    const ref = db.collection("adminpanel")
    ref.onSnapshot(querySnapshot => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      for(let key in items[0]['dataObj']){
        if(items && items.length !== 0) {
         newInputDetails[key][key] = items[0]['dataObj'][key]
        }
      }
      setInputDetails(newInputDetails)
    })
  }, [])

  const inputHandler = (e,type) => {
    const newInputDetails = {...inputDetails}
    newInputDetails[type][type] = e.target.value
    setInputDetails(newInputDetails)
  }
  const editButtonClickHandler = () => {
    setShowEdit(false)
  }
  const saveButtonClickHandler = () => {
    const newInputDetails = {...inputDetails}
    let moveForward = true
    for(let key in newInputDetails){
      if(newInputDetails[key].type === "url"){
        newInputDetails[key].valid = URLValidation(newInputDetails[key][key])
        if(URLValidation(newInputDetails[key][key]) === false) {
          moveForward = false
        }
      }
    if((newInputDetails[key].type === "num")){
      newInputDetails[key].valid = numValidation(newInputDetails[key][key])
      if(numValidation(newInputDetails[key][key]) === false) {
        moveForward = false
      }
    }
    }
    if(moveForward){
      //Post Api call to save data
      let dataObj = {}
      for(let key in newInputDetails){
       dataObj[key] = newInputDetails[key][key]
      }
      db.collection("adminpanel").doc("DS").set({
        dataObj
      })
    .then(function() {
        toast("Changes Successfully changed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
    })
    .catch(function(error) {
      console.error("Error writing document: ", error)
      toast("Network Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
  })  
    setShowEdit(true)
    } else{
      toast("Please enter valid values", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    }
    setInputDetails(newInputDetails)
  } 
  const cancelButtonClickHandler = () => {
    const newInputDetails = {...inputDetails}
    const ref = db.collection("adminpanel")
    ref.onSnapshot(querySnapshot => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      for(let key in items[0]['dataObj']){
        if(items && items.length !== 0) {
         newInputDetails[key][key] = items[0]['dataObj'][key]
        }
      }
      setInputDetails(newInputDetails)
      setShowEdit(true)
    })
  } 
  return(
    <div style={divStyles}>
    <h1>Web Admin Panel</h1>
    <ToastContainer position="top-left" />
    {showEdit ? <div>
      <Button style={buttonStyles} onClick={editButtonClickHandler}>Edit</Button>
    </div> : 
    <div>
      <Button style={saveButtonStyles}  onClick={saveButtonClickHandler}>Save</Button>
      <Button style={buttonStyles}  onClick={cancelButtonClickHandler}>Cancel</Button>
      </div>}
       <div>
           <div style={unBoxingStyles}>
           <h4 style={headerStyles}>Unboxing</h4>
         </div>
         <div style={typeOfDeviceStyles}>
           <p style={paraStyles}>Android</p>
           <p style={paraStyles}>IOS</p>
         </div>
         <div style={inputRowStyles}>
           <span style={spanStyles}>
         <p>Seasonal Element(Url):</p>
         <p>&#60;modelurl&#62;</p>
         </span>
           <Input style={!inputDetails.unboxingInputDetailsSeasonalElementAndroidInputVal.valid ? {...firstInputStyles, ...inputErrorStyle} : firstInputStyles} placeholder={'Enter the Valid URL'} disabled={showEdit} value={inputDetails.unboxingInputDetailsSeasonalElementAndroidInputVal.unboxingInputDetailsSeasonalElementAndroidInputVal} onChange={(e) =>inputHandler(e,'unboxingInputDetailsSeasonalElementAndroidInputVal')}/>
           <Input style={!inputDetails.unboxingInputDetailsSeasonalElementIosInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.unboxingInputDetailsSeasonalElementIosInputVal.unboxingInputDetailsSeasonalElementIosInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'unboxingInputDetailsSeasonalElementIosInputVal')}/>
         </div>
       </div>

       <div>
           <div style={unBoxingStyles}>
           <h4 style={headerStyles}>Augmented Banner #1</h4>
         </div>
         <div style={typeOfDeviceStyles}>
           <p style={paraStyles}>Android</p>
           <p style={paraStyles}>IOS</p>
         </div>
         <div style={inputRowStyles}>
           <span style={spanStyles}>
         <p>Animation/Model(Url):</p>
         <p>&#60;modelurl&#62;</p>
         </span>
           <Input style={!inputDetails.augmentedBannerOneDetailsAnimationAndroidInputVal.valid ? {...firstInputStyles, ...inputErrorStyle} :firstInputStyles} disabled={showEdit} value={inputDetails.augmentedBannerOneDetailsAnimationAndroidInputVal.augmentedBannerOneDetailsAnimationAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerOneDetailsAnimationAndroidInputVal')}/>
           <Input style={!inputDetails.augmentedBannerOneDetailsAnimationIosInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.augmentedBannerOneDetailsAnimationIosInputVal.augmentedBannerOneDetailsAnimationIosInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerOneDetailsAnimationIosInputVal')}/>
          </div>
          <div style={inputRowStyles}>
           <span style={spanStyles}>
         <p>2D Target Image(Url):</p>
         <p>&#60;imageURL[]&#62;</p>
         </span >
           <Input style={!inputDetails.augmentedBannerOneDetailsTwoDTargetNameURLAndroidInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.augmentedBannerOneDetailsTwoDTargetNameURLAndroidInputVal.augmentedBannerOneDetailsTwoDTargetNameURLAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerOneDetailsTwoDTargetNameURLAndroidInputVal')}/>
          </div>
          <div style={inputRowStyles}>
           <span style={twoDSpanStyles}>
         <p>2D Target ImageSize(Url):</p>
         <p>&#60;imageSize[]&#62;</p>
         </span>
           <Input style={!inputDetails.augmentedBannerOneDetailsTwoDTargetImageAndroidInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.augmentedBannerOneDetailsTwoDTargetImageAndroidInputVal.augmentedBannerOneDetailsTwoDTargetImageAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerOneDetailsTwoDTargetImageAndroidInputVal')}/>
          </div>
      </div>

      <div>
           <div style={unBoxingStyles}>
           <h4 style={headerStyles}>Augmented Banner #2</h4>
         </div>
         <div style={typeOfDeviceStyles}>
           <p style={paraStyles}>Android</p>
           <p style={paraStyles}>IOS</p>
         </div>
         <div style={inputRowStyles}>
           <span style={spanStyles}>
         <p>Animation/Model(Url):</p>
         <p>&#60;modelurl&#62;</p>
         </span>
           <Input style={!inputDetails.augmentedBannerTwoDetailsAnimationAndroidInputVal.valid ? {...firstInputStyles, ...inputErrorStyle} :firstInputStyles} disabled={showEdit} value={inputDetails.augmentedBannerTwoDetailsAnimationAndroidInputVal.augmentedBannerTwoDetailsAnimationAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerTwoDetailsAnimationAndroidInputVal')}/>
           <Input style={!inputDetails.augmentedBannerTwoDetailsAnimationiosInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.augmentedBannerTwoDetailsAnimationiosInputVal.augmentedBannerTwoDetailsAnimationiosInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerTwoDetailsAnimationiosInputVal')}/>
          </div>
          <div style={inputRowStyles}>
           <span style={spanStyles}>
         <p>2D Target Image(Url):</p>
         <p>&#60;imageURL[]&#62;</p>
         </span>
           <Input style={!inputDetails.augmentedBannerTwoDetailsTwoDTargetNameURLAndroidInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.augmentedBannerTwoDetailsTwoDTargetNameURLAndroidInputVal.augmentedBannerTwoDetailsTwoDTargetNameURLAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerTwoDetailsTwoDTargetNameURLAndroidInputVal')}/>
          </div>
          <div style={inputRowStyles}>
           <span style={twoDSpanStyles}>
         <p>2D Target ImageSize(Url):</p>
         <p>&#60;imageSize[]&#62;</p>
         </span>
           <Input style={!inputDetails.augmentedBannerTwoDetailsTwoDTargetImageAndroidInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.augmentedBannerTwoDetailsTwoDTargetImageAndroidInputVal.augmentedBannerTwoDetailsTwoDTargetImageAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerTwoDetailsTwoDTargetImageAndroidInputVal')}/>
          </div>
      </div>

      <div>
           <div style={unBoxingStyles}>
           <h4 style={headerStyles}>Augmented Banner #3</h4>
         </div>
         <div style={typeOfDeviceStyles}>
           <p style={paraStyles}>Android</p>
           <p style={paraStyles}>IOS</p>
         </div>
         <div style={inputRowStyles}>
           <span style={spanStyles}>
         <p>Animation/Model(Url):</p>
         <p>&#60;modelurl&#62;</p>
         </span>
           <Input style={!inputDetails.augmentedBannerThreeDetailsAnimationAndroidInputVal.valid ? {...firstInputStyles, ...inputErrorStyle} :firstInputStyles} disabled={showEdit} value={inputDetails.augmentedBannerThreeDetailsAnimationAndroidInputVal.augmentedBannerThreeDetailsAnimationAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerThreeDetailsAnimationAndroidInputVal')}/>
           <Input style={!inputDetails.augmentedBannerThreeDetailsAnimationIosInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.augmentedBannerThreeDetailsAnimationIosInputVal.augmentedBannerThreeDetailsAnimationIosInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerThreeDetailsAnimationIosInputVal')}/>
          </div>
          <div style={inputRowStyles}>
           <span style={spanStyles}>
         <p>2D Target Image(Url):</p>
         <p>&#60;imageURL[]&#62;</p>
         </span>
           <Input style={!inputDetails.augmentedBannerThreeDetailsTwoDTargetNameURLAndroidInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.augmentedBannerThreeDetailsTwoDTargetNameURLAndroidInputVal.augmentedBannerThreeDetailsTwoDTargetNameURLAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerThreeDetailsTwoDTargetNameURLAndroidInputVal')}/>
          </div>
          <div style={inputRowStyles}>
           <span style={twoDSpanStyles}>
         <p>2D Target ImageSize(Url):</p>
         <p>&#60;imageSize[]&#62;</p>
         </span>
           <Input style={!inputDetails.augmentedBannerThreeDetailsTwoDTargetImageAndroidInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.augmentedBannerThreeDetailsTwoDTargetImageAndroidInputVal.augmentedBannerThreeDetailsTwoDTargetImageAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'augmentedBannerThreeDetailsTwoDTargetImageAndroidInputVal')}/>
          </div>
      </div>

      <div>
           <div style={unBoxingStyles}>
           <h4 style={headerStyles}>Stadium - No banner</h4>
         </div>
         <div style={typeOfDeviceStyles}>
           <p style={paraStyles}>Android</p>
           <p style={paraStyles}>IOS</p>
         </div>
         <div style={inputRowStyles}>
           <span style={spanStyles}>
         <p>Animation/Model(Url):</p>
         <p>&#60;modelurl&#62;</p>
         </span>
           <Input style={!inputDetails.stadiumNoBaneerDetailsAnimationAndroidInputVal.valid ? {...firstInputStyles, ...inputErrorStyle} :firstInputStyles} disabled={showEdit} value={inputDetails.stadiumNoBaneerDetailsAnimationAndroidInputVal.stadiumNoBaneerDetailsAnimationAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'stadiumNoBaneerDetailsAnimationAndroidInputVal')}/>
           <Input style={!inputDetails.stadiumNoBaneerDetailsAnimationIosInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.stadiumNoBaneerDetailsAnimationIosInputVal.stadiumNoBaneerDetailsAnimationIosInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'stadiumNoBaneerDetailsAnimationIosInputVal')}/>
          </div>
          <div style={inputRowStyles}>
           <span style={latSpanStyles}>
         <p>Latitude(#):</p>
         </span>
           <Input style={!inputDetails.stadiumNoBaneerDetailsLatitudeAndroidInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.stadiumNoBaneerDetailsLatitudeAndroidInputVal.stadiumNoBaneerDetailsLatitudeAndroidInputVal} placeholder={'Enter the Number'} onChange={(e) =>inputHandler(e,'stadiumNoBaneerDetailsLatitudeAndroidInputVal')}/>
          </div>
          <div style={inputRowStyles}>
           <span style={lonSpanStyles}>
         <p>Longitude(#):</p>
         </span>
           <Input style={!inputDetails.stadiumNoBaneerDetailsLongitudAandroidInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.stadiumNoBaneerDetailsLongitudAandroidInputVal.stadiumNoBaneerDetailsLongitudAandroidInputVal} placeholder={'Enter the Number'} onChange={(e) =>inputHandler(e,'stadiumNoBaneerDetailsLongitudAandroidInputVal')}/>
          </div>
      </div>

      <div>
           <div style={unBoxingStyles}>
           <h4 style={headerStyles}>Pop Up Store</h4>
         </div>
         <div style={typeOfDeviceStyles}>
           <p style={paraStyles}>Android</p>
           <p style={paraStyles}>IOS</p>
         </div>
         <div style={inputRowStyles}>
           <span style={popupSpanStyles}>
         <p>Model(Url):</p>
         <p>&#60;modelurl&#62;</p>
         </span>
           <Input style={!inputDetails.popupStoreDetailsModelAndroidInputVal.valid ? {...firstInputStyles, ...inputErrorStyle} :firstInputStyles} disabled={showEdit} value={inputDetails.popupStoreDetailsModelAndroidInputVal.popupStoreDetailsModelAndroidInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'popupStoreDetailsModelAndroidInputVal')}/>
           <Input style={!inputDetails.popupStoreDetailsModelIosInputVal.valid ? {...inputStyles, ...inputErrorStyle} :inputStyles} disabled={showEdit} value={inputDetails.popupStoreDetailsModelIosInputVal.popupStoreDetailsModelIosInputVal} placeholder={'Enter the Valid URL'} onChange={(e) =>inputHandler(e,'popupStoreDetailsModelIosInputVal')}/>
         </div>
       </div>

    </div>
  )
}

export default App;