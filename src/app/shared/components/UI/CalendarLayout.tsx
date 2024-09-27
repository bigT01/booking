import React, {ReactNode} from 'react';

type CalendarLayoutProps = {
    children: ReactNode
}

const CalendarLayout = ({children}:CalendarLayoutProps) => {
    return (
        <table>
            <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
            </tr>
            {children}
        </table>
    );
};

export default CalendarLayout;