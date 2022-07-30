import { Tag } from 'antd';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import './write.css';
import React, { useState } from 'react';
const { CheckableTag } = Tag;
const tagsData = ['Movies', 'Books', 'Music', 'Sports'];


function Write() {
    const [selectedTags, setSelectedTags] = useState(['Books']);
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
    };
    return (
        <div>
            <form action="" className="writeForm">
                <img src="https://cutewallpaper.org/23/aesthetic-wallpaper-facebook/1379326879.jpg" alt=""
                     className="writeImg"/>
                <div className="formGroup">
                    <label htmlFor="writeFileChooser">
                        <i className="writeIcon fa-solid fa-circle-plus"/>
                    </label>
                    <input type="file" name="" id="writeFileChooser" className="fileChooser" style={{display: "none"}}/>
                    <input type="text" className="writeTitle" autoFocus={true} placeholder="Title..."/>
                </div>
                <div className="formGroup">
                    <textarea className="writeContent" cols="30" placeholder="Your content..."/>
                    <div className="writeCatsChooser">
                        <span className="catLabel">Categories:</span>
                        {tagsData.map((tag) => (
                            <CheckableTag
                                key={tag}
                                checked={selectedTags.indexOf(tag) > -1}
                                onChange={(checked) => handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        ))}
                        <Button
                            type="primary"
                            icon={<UploadOutlined />}
                            loading={loadings[1]}
                            onClick={() => enterLoading(1)}
                        >
                            Publish!
                        </Button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Write;