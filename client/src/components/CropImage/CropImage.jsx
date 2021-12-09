import React from "react";
import styles from "./CropImage.module.css";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import generateDownload from "./utils/cropImage";
import getCroppedImg from "./utils/cropImage";
import { editUser } from "../../actions";
import { useDispatch } from "react-redux";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "../../firebase/firebaseConfig";

export default function CropImage({ toggleModalCambiarFoto }) {
  const dispatch = useDispatch();
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();
  const [imageCrop, setImageCrop] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [imageFile, setImageFile] = React.useState();
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  async function handleOnSubmitCambiarFoto(e) {
    e.preventDefault();
    console.log(imageFile);
    const imgCropp = await getCroppedImg(image, croppedArea);
    console.log(imgCropp)
    /* const file = new File([imgCropp], imageFile.name, {type: imageFile.type}) */
    /* console.log(file) */
    const storageRef = ref(storage, imageFile.name);
    const metadata = {
      name: imageFile.name,
      size: imageFile.size,
      type: imageFile.type,
    };

    const uploadTask = uploadBytesResumable(storageRef, imgCropp, metadata)
    uploadTask.on("state_changed", (snapshot) => {
      console.log(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
      // render progress
    }, (error) => {
      console.log(error);
    },  ()=> {
      getDownloadURL(uploadTask.snapshot.ref).then((URL)=>{
        dispatch(editUser(window.localStorage.sessionUser, { photo: URL }));
      })
      
      });
    /*  setImgCropped(imgCrop) */
    /* console.log(imageFile); */
    /* setImageCrop(imgCropp) */

    /*  await toggleModalCambiarFoto(e)
      .then(() => {
        console.log("bien");
      })
      .catch((e) => {
        console.log(e);
      }); */
  }

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageFile(event.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      /* reader.readAsBinaryString(event.target.files[0]); */
      reader.addEventListener("load", () => {
        setImage(reader.result);
        console.log(reader.result)
        /* console.log(typeof(reader.result)); */
        /* window.localStorage.setItem("img", reader.result); */
        const formData = new FormData();
        formData.append("file", reader.result /* event.target.files[0] */);
        /* dispatch(
          editUser(window.localStorage.sessionUser, { photo: formData })
        ); */
        /* dispatch(editUser(window.localStorage.sessionUser, {photo: reader.result})) */
      });
    }

    /* console.log(formData) */
    /* console.log(typeof(event.target.files[0])) */
  };

  const onDownload = () => {
    generateDownload(image, croppedArea);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_cropper}>
        {image ? (
          <>
            <div className={styles.cropper}>
              <Cropper
                cropShape="round"
                showGrid={false}
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
              {imageCrop && <img src={imageCrop} alt="404" />}
            </div>

            <div className={styles.slider}>
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
          </>
        ) : null}
      </div>

      <div className={styles.container_buttons}>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={triggerFileSelectPopup}
          style={{ marginRight: "10px" }}
        >
          Choose
        </Button>
        <Button
          className={styles.btnGuardar}
          onClick={(e) => handleOnSubmitCambiarFoto(e)}
          type="button"
          variant="contained"
          color="primary"
          component="span"
        >
          Guardar
        </Button>
      </div>
    </div>
  );
}
