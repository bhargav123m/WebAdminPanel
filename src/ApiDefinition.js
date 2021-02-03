import db from "./firebaseInit";
import firebase from 'firebase/app'
import 'firebase/firestore'
import { toast } from 'react-toastify';


export const getDataFromFireStore = (inputDetails, setInputDetails) => {
    const newInputDetails = {...inputDetails}
    console.log(newInputDetails)
    const cloudAnchorRef = db.collection('stores').doc('cloud_anchor').collection('individuals').doc('100_StoreAtHome');
    cloudAnchorRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          doc.data()['modelUrl'] !== undefined ? newInputDetails['popupStoreDetailsModelAndroidInputVal']['popupStoreDetailsModelAndroidInputVal'] = doc.data()['modelUrl'] : newInputDetails['popupStoreDetailsModelAndroidInputVal']['popupStoreDetailsModelAndroidInputVal'] = ''
          doc.data()['modelUrlIos'] !== undefined ? newInputDetails['popupStoreDetailsModelIosInputVal']['popupStoreDetailsModelIosInputVal'] = doc.data()['modelUrlIos'] :newInputDetails['popupStoreDetailsModelIosInputVal']['popupStoreDetailsModelIosInputVal'] = ''
      } else {
          console.log("No such document!");
      }
      const stadiumBannerRef = db.collection('stores').doc('banner').collection('individuals').doc('100_banner');
      stadiumBannerRef.get().then(function(doc) {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              doc.data()['bannerId'] !== undefined ? newInputDetails['augmentedBannerOneDetailsBannerID']['augmentedBannerOneDetailsBannerID'] = doc.data()['bannerId'] :  newInputDetails['augmentedBannerOneDetailsBannerID']['augmentedBannerOneDetailsBannerID']  = ''
              doc.data()['modelUrl'] !== undefined ? newInputDetails['augmentedBannerOneDetailsAnimationAndroidInputVal']['augmentedBannerOneDetailsAnimationAndroidInputVal'] = doc.data()['modelUrl'] :  newInputDetails['augmentedBannerOneDetailsAnimationAndroidInputVal']['augmentedBannerOneDetailsAnimationAndroidInputVal']  = ''
              doc.data()['modelUrlIos'] !== undefined ?  newInputDetails['augmentedBannerOneDetailsAnimationIosInputVal']['augmentedBannerOneDetailsAnimationIosInputVal'] = doc.data()['modelUrlIos'] :   newInputDetails['augmentedBannerOneDetailsAnimationIosInputVal']['augmentedBannerOneDetailsAnimationIosInputVal']  = ''
              doc.data()['banners'][0]['imageSize'] !== undefined ? newInputDetails['augmentedBannerOneDetailsTwoDTargetImageOneInputVal']['augmentedBannerOneDetailsTwoDTargetImageOneInputVal'] = doc.data()['banners'][0]['imageSize'] :  newInputDetails['augmentedBannerOneDetailsTwoDTargetImageOneInputVal']['augmentedBannerOneDetailsTwoDTargetImageOneInputVal'] = ''
              doc.data()['banners'][1]['imageSize'] !== undefined ? newInputDetails['augmentedBannerOneDetailsTwoDTargetImageTwoAndroidInputVal']['augmentedBannerOneDetailsTwoDTargetImageTwoAndroidInputVal'] = doc.data()['banners'][1]['imageSize'] : newInputDetails['augmentedBannerOneDetailsTwoDTargetImageTwoAndroidInputVal']['augmentedBannerOneDetailsTwoDTargetImageTwoAndroidInputVal'] = ''
              doc.data()['banners'][0]['imageUrl'] !== undefined ? newInputDetails['augmentedBannerOneDetailsTwoDTargetURLOneInputVal']['augmentedBannerOneDetailsTwoDTargetURLOneInputVal'] = doc.data()['banners'][0]['imageUrl'] :  newInputDetails['augmentedBannerOneDetailsTwoDTargetURLOneInputVal']['augmentedBannerOneDetailsTwoDTargetURLOneInputVal'] = ''
              doc.data()['banners'][1]['imageUrl'] !== undefined ? newInputDetails['augmentedBannerOneDetailsTwoDTargetURLTwoAndroidInputVal']['augmentedBannerOneDetailsTwoDTargetURLTwoAndroidInputVal'] = doc.data()['banners'][1]['imageUrl'] : newInputDetails['augmentedBannerOneDetailsTwoDTargetURLTwoAndroidInputVal']['augmentedBannerOneDetailsTwoDTargetURLTwoAndroidInputVal'] = ''
          } else {
                  console.log("No such document!");
          }
          const stadiumNoBannerRef = db.collection('stores').doc('no_banner').collection('individuals').doc('100_no_banner');
 stadiumNoBannerRef.get().then(function(doc) {
     if (doc.exists) {
        doc.data()['modelUrl'] !== undefined ? newInputDetails['stadiumNoBaneerDetailsAnimationAndroidInputVal']['stadiumNoBaneerDetailsAnimationAndroidInputVal'] = doc.data()['modelUrl'] : newInputDetails['stadiumNoBaneerDetailsAnimationAndroidInputVal']['stadiumNoBaneerDetailsAnimationAndroidInputVal'] = ''
        doc.data()['modelUrlIos'] !== undefined ? newInputDetails['stadiumNoBaneerDetailsAnimationIosInputVal']['stadiumNoBaneerDetailsAnimationIosInputVal']  = doc.data()['modelUrlIos'] : newInputDetails['stadiumNoBaneerDetailsAnimationIosInputVal']['stadiumNoBaneerDetailsAnimationIosInputVal']  = ''
        doc.data() !== undefined ?   newInputDetails['stadiumNoBaneerDetailsLatitudeAndroidInputVal']['stadiumNoBaneerDetailsLatitudeAndroidInputVal'] = doc.data()['location']['latitude'] : newInputDetails['stadiumNoBaneerDetailsLatitudeAndroidInputVal']['stadiumNoBaneerDetailsLatitudeAndroidInputVal'] = ''
        doc.data() !== undefined ?  newInputDetails['stadiumNoBaneerDetailsLongitudAandroidInputVal']['stadiumNoBaneerDetailsLongitudAandroidInputVal'] = doc.data()['location']['longitude'] : newInputDetails['stadiumNoBaneerDetailsLongitudAandroidInputVal']['stadiumNoBaneerDetailsLongitudAandroidInputVal'] = ''
     } else {
         // doc.data() will be undefined in this case
         console.log("No such document!");
     }
     const unboxingRef = db.collection('stores').doc('unboxing_v2').collection('individuals').doc('seasonal');
 unboxingRef.get().then(function(doc) {
     if (doc.exists) {
         console.log("Document data:", doc.data());
         doc.data()['modelUrl'] !== undefined ?  newInputDetails['unboxingInputDetailsSeasonalElementAndroidInputVal']['unboxingInputDetailsSeasonalElementAndroidInputVal'] = doc.data()['modelUrl'] : newInputDetails['unboxingInputDetailsSeasonalElementAndroidInputVal']['unboxingInputDetailsSeasonalElementAndroidInputVal'] = ''
         doc.data()['modelUrlIos'] !== undefined ?  newInputDetails['unboxingInputDetailsSeasonalElementIosInputVal']['unboxingInputDetailsSeasonalElementIosInputVal'] = doc.data()['modelUrlIos'] : newInputDetails['unboxingInputDetailsSeasonalElementIosInputVal']['unboxingInputDetailsSeasonalElementIosInputVal'] = ''
     } else {
         // doc.data() will be undefined in this case
         console.log("No such document!");
     }
     setInputDetails(newInputDetails)
 }).catch(function(error) {
     console.log("Error getting document:", error);
 });
 }).catch(function(error) {
     console.log("Error getting document:", error);
 });
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}

export const saveDataToTheFireStore = (newInputDetails, setInputDetails) => {
    const cloudAnchorRef = db.collection('stores').doc('cloud_anchor').collection('individuals').doc('100_StoreAtHome');
    const stadiumBannerRef = db.collection('stores').doc('banner').collection('individuals').doc('100_banner');
    const stadiumNoBannerRef = db.collection('stores').doc('no_banner').collection('individuals').doc('100_no_banner');
    const unboxingRef = db.collection('stores').doc('unboxing_v2').collection('individuals').doc('seasonal');
    cloudAnchorRef.set({ modelUrl: newInputDetails.popupStoreDetailsModelAndroidInputVal.popupStoreDetailsModelAndroidInputVal }, { merge: true })
    cloudAnchorRef.set({ modelUrlIos: newInputDetails.popupStoreDetailsModelIosInputVal.popupStoreDetailsModelIosInputVal }, { merge: true })
    stadiumBannerRef.set({bannerId: newInputDetails.augmentedBannerOneDetailsBannerID.augmentedBannerOneDetailsBannerID , modelUrl:  newInputDetails.augmentedBannerOneDetailsAnimationAndroidInputVal.augmentedBannerOneDetailsAnimationAndroidInputVal, banners:[{"imageSize": newInputDetails.augmentedBannerOneDetailsTwoDTargetImageOneInputVal.augmentedBannerOneDetailsTwoDTargetImageOneInputVal,"imageUrl":newInputDetails.augmentedBannerOneDetailsTwoDTargetURLOneInputVal.augmentedBannerOneDetailsTwoDTargetURLOneInputVal},{"imageSize":newInputDetails.augmentedBannerOneDetailsTwoDTargetImageTwoAndroidInputVal.augmentedBannerOneDetailsTwoDTargetImageTwoAndroidInputVal,"imageUrl":newInputDetails.augmentedBannerOneDetailsTwoDTargetURLTwoAndroidInputVal.augmentedBannerOneDetailsTwoDTargetURLTwoAndroidInputVal}] }, { merge: true })
    stadiumBannerRef.set({bannerId: newInputDetails.augmentedBannerOneDetailsBannerID.augmentedBannerOneDetailsBannerID , modelUrlIos:  newInputDetails.augmentedBannerOneDetailsAnimationIosInputVal.augmentedBannerOneDetailsAnimationIosInputVal, banners:[{"imageSize": newInputDetails.augmentedBannerOneDetailsTwoDTargetImageOneInputVal.augmentedBannerOneDetailsTwoDTargetImageOneInputVal,"imageUrl":newInputDetails.augmentedBannerOneDetailsTwoDTargetURLOneInputVal.augmentedBannerOneDetailsTwoDTargetURLOneInputVal},{"imageSize":newInputDetails.augmentedBannerOneDetailsTwoDTargetImageTwoAndroidInputVal.augmentedBannerOneDetailsTwoDTargetImageTwoAndroidInputVal,"imageUrl":newInputDetails.augmentedBannerOneDetailsTwoDTargetURLTwoAndroidInputVal.augmentedBannerOneDetailsTwoDTargetURLTwoAndroidInputVal}] }, { merge: true })
    stadiumNoBannerRef.set({ modelUrl:  newInputDetails.stadiumNoBaneerDetailsAnimationAndroidInputVal.stadiumNoBaneerDetailsAnimationAndroidInputVal, location: new firebase.firestore.GeoPoint(newInputDetails.stadiumNoBaneerDetailsLatitudeAndroidInputVal.stadiumNoBaneerDetailsLatitudeAndroidInputVal, newInputDetails.stadiumNoBaneerDetailsLongitudAandroidInputVal.stadiumNoBaneerDetailsLongitudAandroidInputVal),bannerId: "100" }, { merge: true })
    stadiumNoBannerRef.set({ modelUrlIos: newInputDetails.stadiumNoBaneerDetailsAnimationIosInputVal.stadiumNoBaneerDetailsAnimationIosInputVal, location: new firebase.firestore.GeoPoint(newInputDetails.stadiumNoBaneerDetailsLatitudeAndroidInputVal.stadiumNoBaneerDetailsLatitudeAndroidInputVal, newInputDetails.stadiumNoBaneerDetailsLongitudAandroidInputVal.stadiumNoBaneerDetailsLongitudAandroidInputVal),bannerId: "100" }, { merge: true })
    unboxingRef.set({ modelUrl:  newInputDetails.unboxingInputDetailsSeasonalElementAndroidInputVal.unboxingInputDetailsSeasonalElementAndroidInputVal }, { merge: true })
    unboxingRef.set({ modelUrlIos: newInputDetails.unboxingInputDetailsSeasonalElementIosInputVal.unboxingInputDetailsSeasonalElementIosInputVal }, { merge: true })
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
  setInputDetails(newInputDetails)
}