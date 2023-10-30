"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(express_1.default.json());
app.use(routes_1.default);
const port = process.env.PORT || 4000;
const uri = `mongodb+srv://aaqilruzzan:FygOTWB3vav7ExSB@cluster0.2yosv2p.mongodb.net/tododb`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.connect(uri, options)
    .then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})
    .catch(error => {
    throw error;
});
