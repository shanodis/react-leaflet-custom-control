import L from 'leaflet';
import React from 'react';
interface Props {
    position: L.ControlPosition;
    children?: React.ReactNode;
    container?: React.HTMLAttributes<HTMLDivElement>;
    containerId?: string | number;
    prepend?: boolean;
}
declare const Control: (props: Props) => JSX.Element;
export default Control;
