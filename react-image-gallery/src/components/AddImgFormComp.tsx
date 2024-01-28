import { useState } from 'react';
import { Image } from '../types';
import {v4 as uuidv4} from 'uuid';

interface IAddImgFormCompProps {
    handleAddImg?: (newImg: Image) => void
}

const AddImgFormComp: React.FunctionComponent<IAddImgFormCompProps> = ({ handleAddImg } : IAddImgFormCompProps) => {
    const [ newImageVarr, setNewImageVarr ] = useState<Image>({
        id: "",
        title: "",
        imgAlt: "",
        imgLink: ""
    })
    

    return(
        <>
            <h1 className="display-6 mb-0">Add Image Form</h1>
            <form className="row" onSubmit={(e) => {
                // prevents default behavior
                e.preventDefault()
                // sending data back to App.tsx
                handleAddImg?.(newImageVarr)
                // clearing iinput field
                setNewImageVarr({
                    id: "",
                    title: "",
                    imgAlt: "",
                    imgLink: ""
                })

            }}>
                <div className="col-md-6 mt-2 mb-2">
                    <label className="form-label">Image Title</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder='Title'
                        required={true}
                        value={newImageVarr.title}
                        onChange={(e) => {setNewImageVarr({ ...newImageVarr, title: e.target.value})}}
                    />
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <label className="form-label">Image Alt</label>
                    <input
                        className="form-control"
                        type="text"
                        name="alt"
                        placeholder="Alt"
                        required={true}
                        value={newImageVarr.imgAlt}
                        onChange={(e) => {setNewImageVarr({ ...newImageVarr, imgAlt: e.target.value })}}
                    />
                </div>
                <div className="col-12 mt-2 mb-2">
                    <label className="form-label">Address</label>
                    <input
                        className="form-control"
                        type="text"
                        name="link"
                        placeholder="link"
                        required={true}
                        value={newImageVarr.imgLink}
                        onChange={(e) => {setNewImageVarr({ ...newImageVarr, imgLink: e.target.value })}}
                    />
                </div>
                <div className="col-12 mt-2 mb-3">
                    <button type="submit" className="btn btn-primary" onClick={() => {setNewImageVarr({ ...newImageVarr, id: uuidv4() })}}>Add Image</button>
                </div>
            </form>
        </>
    );
};

export default AddImgFormComp;
