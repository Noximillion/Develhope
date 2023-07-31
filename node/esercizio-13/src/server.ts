import express from "express";
import "express-async-errors";
import morgan from "morgan";
import Joi from "joi";
import {
    getAll,
    getOneById,
    create,
    updateById,
    deleteById,
} from "./controllers/planets";

const app = express();
app.use(express.json());

const port = 3000;

app.use(morgan("dev"));

const policy = (req: any, res: any, next: any) => {
    const schema = Joi.object().keys({
        id: Joi.number().integer().required(),
        name: Joi.string().min(3).max(10).required(),
    });
    const { id, name } = req.body;
    const { error } = schema.validate({ id, name });
    if (error) {
        res.status(500).json({ message: "c'è un errore" });
    } else next();
};

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", policy, create);

app.put("/api/planets/:id", policy, updateById);

app.delete("/api/planets/:id", policy, deleteById);

app.listen(port, () => {
    console.log(`this is an example of a server on port: ${port}`);
});
