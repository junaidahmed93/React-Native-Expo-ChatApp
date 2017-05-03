import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../action';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';



class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                                                                                            {/*onChangeText={value =>this.props.employeeUpdate({prop:'name', value})}*/}
                <CardSection>                                                   
                    <Input label="name" placeholder="jane" value={this.props.name} onChangeText={text =>this.props.employeeUpdate({prop:'name', value: text})}/>
                </CardSection>
                <Text>{this.props.name}</Text>   
                <CardSection>
                    <Input label="Phone" placeholder="555-555-555" value={this.props.phone} onChangeText={text =>this.props.employeeUpdate({prop:'phone', value: text})}/>
                </CardSection>    

                <CardSection>
                    <Button>Create</Button>
                </CardSection>

            </Card>   
        )   
    }
}

const mapStateToProp = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}
  
export default connect(mapStateToProp, { employeeUpdate })(EmployeeCreate);