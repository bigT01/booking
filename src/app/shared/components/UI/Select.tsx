/**
 * Select Component
 *
 * This is a reusable UI component that simulates the behavior of a dropdown menu.
 * It is used in the project several times, providing a flexible way to choose options from a list.
 *
 * Features:
 * - **Input Handling**: The component renders an `Input` field where the user can click to open the dropdown.
 * - **Dropdown List**: When the input is clicked, the dropdown menu appears with a list of items passed as `children`.
 * - **Selected Option**: The `selectedOption` is passed from the parent to show the currently selected value inside the input.
 * - **Opening State Management**: The component uses `useState` to control whether the dropdown is open or closed.
 *
 * Props:
 * - `inputWidth` (optional): Defines the width of the input. Defaults to 148.
 * - `inputPlaceholder` (optional): Placeholder text for the input when no option is selected. Defaults to 'Placeholder'.
 * - `onOpened` (optional): Callback function triggered when the dropdown menu is opened or closed.
 * - `children`: The list of items (dropdown options) that will be displayed inside the dropdown.
 * - `selectedOption`: The currently selected option to be displayed in the input.
 *
 * Behavior:
 * - Clicking the `Input` toggles the dropdown menu's visibility.
 * - If the dropdown is opened, it shows the children (which are typically the options).
 * - Once an option is selected, the `selectedOption` changes and the dropdown closes.
 * - `onOpened` prop is used to notify the parent component when the dropdown is opened or closed.
 *
 * Performance:
 * - Simple and lightweight logic, suitable for various dropdown UI use cases.
 *
 * Optimization:
 * - The component is generic enough to accept any children, allowing flexibility in what the dropdown displays.
 * - The use of `useEffect` to notify about dropdown opening state and to manage when the dropdown should close based on selection ensures it operates smoothly without unnecessary renders.
 */
'use client'
import React, {ReactNode, useEffect, useState} from 'react';
import Input from "@/app/shared/components/UI/Input";

type SelectProps = {
    inputWidth?: number
    inputPlaceholder?: string,
    onOpened?: (isOpened: boolean) => void,
    children: ReactNode,
    selectedOption: string
}

const Select = ({inputWidth=148, inputPlaceholder='Placeholder', onOpened, children, selectedOption}: SelectProps) => {
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        if(onOpened){
            onOpened(isOpened)
        }
    }, [isOpened]);

    useEffect(() => {
        if(selectedOption){
            setIsOpened(false)
        }
    }, [selectedOption]);

    return (
        <div className='relative w-fit'>
            <Input isBorder={false} readOnly={true} value={selectedOption} inputWidth={inputWidth} inputPlaceholder={inputPlaceholder} onClick={() => setIsOpened(old => !old)}/>
            {isOpened ? (
                <ul className='absolute max-h-[312px] overflow-scroll top-full bg-white rounded-lg p-4 w-[95%] left-[5%]' style={{boxShadow: '0 2px 4px #07049210'}}>
                    {children}
                </ul>
            ) : null}
        </div>
    );
};

export default Select;