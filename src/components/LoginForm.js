import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { onEmailChanged, onPasswordChange, loginUser } from '../action';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        console.log("text", text);
        this.props.onEmailChanged(text);
    }

    passwordChange(text) {
        this.props.onPasswordChange(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }
    renderButton() {
        console.log(this.props.loading)
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        )
    }
    render() {
        return (   
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input label="Password"
                        placeholder="password"
                        onChangeText={this.passwordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}


                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { onEmailChanged, onPasswordChange, loginUser })(LoginForm);