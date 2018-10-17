import React from 'react';
import App from './App';
import {configure, mount, render} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App', () => {

    const wrapper = mount(<App/>);

    test('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    test('I can see a textarea element with a corresponding id="editor"', () => {
        const editorArea = wrapper.find('textarea#editor');
        expect(editorArea).toHaveLength(1);
    });


    test('I can see an element with a corresponding id="preview"', () => {
        const editorArea = wrapper.find('#preview');
        expect(editorArea).toHaveLength(1);
    })

});
