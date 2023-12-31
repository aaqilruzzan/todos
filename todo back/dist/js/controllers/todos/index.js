"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.updateTodos = exports.addTodos = exports.getTodos = void 0;
const todo_1 = __importDefault(require("../../models/todo"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        res.status(200).json({ message: "Success", status: "200 OK", todos: todos });
    }
    catch (error) {
        throw error;
    }
});
exports.getTodos = getTodos;
const addTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const Todo = new todo_1.default({
            name: body.name,
            description: body.description,
            status: body.status
        });
        const newTodo = yield Todo.save();
        const allTodos = yield todo_1.default.find();
        res.
            status(201)
            .json({ message: "Todo added", status: "201 Created", todos: allTodos, todo: newTodo });
    }
    catch (error) {
        throw error;
    }
});
exports.addTodos = addTodos;
const updateTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        const updatetodo = yield todo_1.default.findByIdAndUpdate({ _id: id }, body);
        const allTodos = yield todo_1.default.find();
        res.
            status(200)
            .json({ message: "Todo updated", todo: updatetodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTodos = updateTodos;
const deleteTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletetodo = yield todo_1.default.findByIdAndRemove(req.params.id);
        const allTodos = yield todo_1.default.find();
        res.
            status(200)
            .json({ message: "Todo deleted", todo: deletetodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTodos = deleteTodos;
