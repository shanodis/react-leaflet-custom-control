var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import L from 'leaflet';
import React from 'react';
import ReactDOM from 'react-dom';
var POSITION_SELECTORS = {
    bottomleft: '.leaflet-bottom.leaflet-left',
    bottomright: '.leaflet-bottom.leaflet-right',
    topleft: '.leaflet-top.leaflet-left',
    topright: '.leaflet-top.leaflet-right',
};
var Control = function (props) {
    var _a, _b;
    var _c = React.useState(document.createElement('div')), portalRoot = _c[0], setPortalRoot = _c[1];
    var positionSelector = ((props.position && POSITION_SELECTORS[props.position]) || POSITION_SELECTORS.topright);
    var portalContainer = document.createElement('div');
    React.useEffect(function () {
        var querySelectors = "".concat((props === null || props === void 0 ? void 0 : props.containerId) && "#".concat(props === null || props === void 0 ? void 0 : props.containerId), " ").concat(positionSelector).trim();
        var targetDiv = document.querySelectorAll(querySelectors);
        setPortalRoot(targetDiv[0]);
    }, [positionSelector, props === null || props === void 0 ? void 0 : props.containerId]);
    if (props.prepend !== undefined && props.prepend === true) {
        portalRoot.prepend(portalContainer);
    }
    else {
        portalRoot.append(portalContainer);
    }
    var className = (((_b = (_a = props.container) === null || _a === void 0 ? void 0 : _a.className) === null || _b === void 0 ? void 0 : _b.concat(' ')) || '') + 'leaflet-control';
    var container = __assign(__assign({}, props.container), { className: className });
    var controlContainer = (React.createElement("div", __assign({}, container), props.children));
    L.DomEvent.disableClickPropagation(portalRoot);
    return ReactDOM.createPortal(controlContainer, portalContainer);
};
export default Control;
//# sourceMappingURL=Control.js.map