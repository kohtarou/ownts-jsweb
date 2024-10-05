/*
"use strict";
//console.log("■ prac00.ts の実行");
//import "./prac00";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("■ prac01.ts の実行");
require("./prac01");
*/

import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

