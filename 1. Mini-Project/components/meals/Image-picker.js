'use client'
import React, { useRef, useState } from 'react'
import classes from "./image-picker.module.css";
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click();
    }

    function handleChangeImage(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);

    }

    return (
        <div className={classes.picker}>
            <label htmlFor='image'>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt='image selected by user' fill />}
                </div>
                <input
                    ref={imageInput}
                    className={classes.input}
                    type='file'
                    id={name}
                    accept='images/png images/jpeg'
                    name='image'
                    onChange={handleChangeImage}
                    required
                ></input>

                <button
                    className={classes.button}
                    type='button'
                    onClick={handlePickClick}
                >Pick an image</button>
            </div>
        </div>
    )
}

export default ImagePicker;