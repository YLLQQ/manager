import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'
import './style.css'

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item wrapperCol={{ span: 5, offset: 1 }}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 5, offset: 1 }}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 5, offset: 1 }}>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button" block="true">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedLogin = Form.create({ name: 'normal_login' })(Login);

export default WrappedLogin