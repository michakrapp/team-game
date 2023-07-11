"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const App_1 = require("./App");
test('renders headline', () => {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(App_1.App, {}));
    const headline = react_1.screen.getByText(/Team Game/i);
    expect(headline).toBeInTheDocument();
});
//# sourceMappingURL=App.test.js.map