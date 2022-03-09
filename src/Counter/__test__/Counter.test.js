import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// beforeEach(() => {
//     const { getByTestId } = render(<Counter />);
// })


test('header renders with correct text', () => {
    const { getByTestId } = render(<Counter />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe('My Counter');
})


test('counter initally start with 0', () => {
    const { getByTestId } = render(<Counter/>);
    const counterEl = getByTestId('counter');

    expect(counterEl.textContent).toBe("0");
})


test('input contains inital with 1', () => {
    const { getByTestId } = render(<Counter/>);
    const inputEl = getByTestId('input');

    expect(inputEl.value).toBe('1');
})

test('add button renders with +', () => {
    const { getByTestId } = render(<Counter/>);
    const addBtn = getByTestId('add-btn');

    expect(addBtn.textContent).toBe('+');
})

test('substrack button renders with -', () => {
    const { getByTestId } = render(<Counter/>);
    const subBtn = getByTestId('add-sub');

    expect(subBtn.textContent).toBe('-');
})

test('change value of input works correctly', () => {
    const { getByTestId } = render(<Counter/>);
    const inputEl = getByTestId('input');

    fireEvent.change(inputEl, {
        target: {
            value:"5"
        }
    })

    expect(inputEl.value).toBe("5")

})

test('click on plus btn adds 1 to counter', () => {
    const { getByTestId } = render(<Counter />);
    const btnEl = getByTestId('add-btn');
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(btnEl);

    expect(counterEl.textContent).toBe("1")

})

test('click on substract btn substracts 1 to counter', () => {
    const { getByTestId } = render(<Counter />);
    const btnEl = getByTestId('add-sub');
    const counterEl = getByTestId('counter')

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(btnEl);

    expect(counterEl.textContent).toBe("-1")

})


test('changing input value then click btn add work correctly ', () => {
    const { getByTestId } = render(<Counter />);
    const btnEl = getByTestId('add-btn');
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl, {
        target:{
            value:"5"
        }
    })

    fireEvent.click(btnEl);

    expect(counterEl.textContent).toBe("5")

})


test('changing input value then click substract btn work correctly ', () => {
    const { getByTestId } = render(<Counter />);
    const addSub = getByTestId('add-sub');
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl, {
        target:{
            value:"5"
        }
    })

    fireEvent.click(addSub);

    expect(counterEl.textContent).toBe("-5")

})


test('add and then substract leads to the correct number', () => {
    const { getByTestId } = render(<Counter />);
    const addSub = getByTestId('add-sub');
    const addBtn = getByTestId('add-btn');
    const counterEl = getByTestId('counter')
    const inputEl = getByTestId('input')

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)
    fireEvent.click(addBtn)

    fireEvent.click(addSub)
    fireEvent.click(addSub)

    expect(counterEl.textContent).toBe("20")
})


test('counter contains correct class name', () => {
    const { getByTestId } = render(<Counter/>);
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const addBtn = getByTestId("add-btn");
    const addSub = getByTestId("add-sub");

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    expect(counterEl.className).toBe("");

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe("");

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe("green");

    fireEvent.click(addBtn);

    expect(counterEl.className).toBe("green");

    fireEvent.click(addSub);
    fireEvent.click(addSub);

    expect(counterEl.className).toBe("");

    fireEvent.click(addSub);
    fireEvent.click(addSub);
    fireEvent.click(addSub);
    fireEvent.click(addSub);

    expect(counterEl.className).toBe("red");
})

