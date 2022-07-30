import React, {useState} from "react";
import './setting.css';
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button
} from 'antd';
import Sidebar from "../../components/sidebar/Sidebar";

function Setting() {
    const [componentDisabled, setComponentDisabled] = useState(false);

    const onFormLayoutChange = ({ disabled }) => {
       setComponentDisabled(disabled);
    };
    return (
        <div className="setting">
            <div className="settingLabel">
                <span>Update Your Account</span>
                <Button className="buttonDelete">Delete Account</Button>
            </div>
            <div className="settingForm">
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    initialValues={{
                        disabled: componentDisabled,
                    }}
                    onValuesChange={onFormLayoutChange}
                    disabled={componentDisabled}
                >
                    <Form.Item
                        label="Profile Picture"
                        name="avatar"
                        className="settingProfilePic"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your profile picture!',
                            },
                        ]}
                    >
                        <img src="https://cutewallpaper.org/23/aesthetic-wallpaper-facebook/1379326879.jpg" alt=""
                             className="settingImg"/>
                        <label htmlFor="avatarFileChooser">
                            <i className="settingIcon fa-solid fa-circle-plus"/>
                        </label>
                        <input type="file" name="" id="avatarFileChooser" className="fileChooser" style={{display: "none"}}/>
                    </Form.Item>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item>
                        <Button className="buttonUpdate">Update Account</Button>
                    </Form.Item>
                </Form>
            </div>
            <Sidebar/>

        </div>
    );
}

export default Setting;