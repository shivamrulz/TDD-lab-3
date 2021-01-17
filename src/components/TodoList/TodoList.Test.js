import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList.Test';
import mockData from '../../mockData';

describe('todo list test', ()=> {
    it('should show title of todos', ()=>{
        render(<TodoList todos={mockData} />);
        screen.debug();
        mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
    });
});