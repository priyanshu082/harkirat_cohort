"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// while using zod we are doing run time validation
const zod_1 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const userProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }),
    email: zod_1.z.string().email({ message: "Invalid format" }),
    age: zod_1.z.number().min(18).optional()
});
app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body;
    if (!success) {
        res.status(401).json({});
        return;
    }
    //update code
    res.json({
        message: "User updated successfully"
    });
});
