import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEmailChanged } from '../action';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        console.log("text",text);
        this.props.onEmailChanged(text);
    }
    render() {  
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input label="Password" placeholder="password" />
                </CardSection>

                <CardSection></CardSection>
            </Card>
        );
    }
}

export default connect(null, { onEmailChanged })(LoginForm);