import React from "react";
import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            type: 'string',
            description: 'вариант внешнего вида',
            defaultValue: 'contained',
            options: ['text', 'contained', 'outlined'],
            control: {
                type: 'radio'
            }
        }
    }
}

const Template = (args) => <Button {...args} />

export const Small = Template.bind({})
Small.args = {
    title: 'Small',
    variant: 'text',
    disabled: 'false',
    size: 'small',
};

export const Medium = Template.bind({})
Medium.args = {
    title: 'Medium',
    variant: 'text',
    disabled: 'false',
    size: 'medium',
};

export const Large = Template.bind({})
Large.args = {
    title: 'Large',
    variant: 'outlined',
    disabled: 'false',
    size: 'large'
};
