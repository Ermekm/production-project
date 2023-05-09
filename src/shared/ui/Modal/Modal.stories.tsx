import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus, minus temporibus dolore saepe nulla at dolores obcaecati consequuntur, adipisci, iure itaque. Vitae suscipit accusantium provident sint quod, ducimus esse?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus, minus temporibus dolore saepe nulla at dolores obcaecati consequuntur, adipisci, iure itaque. Vitae suscipit accusantium provident sint quod, ducimus esse?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
