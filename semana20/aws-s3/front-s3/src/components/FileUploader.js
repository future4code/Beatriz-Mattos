import React, { useState } from "react";
import axios from "axios";

export const FileUploader = () => {

    const [link, setLink] = useState(undefined);

    const handleFile = async (ev) => {
        try {
            const data = new FormData();
            data.append("file", ev.target.files[0]);
            console.log("Files: ", ev.target.files);

            const res = await axios.put("http://localhost:3002/files/upload", data);
            setLink(res.data.link);

            console.log("Link: ", res.data.link);
        } catch (err) {
            console.log(err.message)
        }
    };

    return (
        <div>
            <input type={"file"} onChange={handleFile} />
            {link && (
                <div>
                    <img src={link} alt={"Minha imagem"} />
                    <p><a href={link}>Link para o arquivo</a></p>
                </div>
            )}
        </div>
    );
};

export default FileUploader;