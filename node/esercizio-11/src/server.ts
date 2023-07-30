import express from "express";
import "express-async-errors";
import morgan from "morgan";
import Joi from "joi";

const app = express();
app.use(express.json())

const port = 3000;

app.use(morgan("dev"));

type Planet = {
    id: number;
    name: string;
};

type Planets = Planet[];

let planets: Planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];

const policy = (req: any, res: any, next: any) => {
    const schema = Joi.object().keys({
        id: Joi.number().integer().required(),
        name: Joi.string().min(3).max(10).required(),
    });
    const { id, name } = req.body
    const { error } = schema.validate({id, name});
    if (error) {
        res.status(500).json({ message: "c'è un errore"})
    } else next();
}

app.get("/api/planets", (req: any, res: any) => {
    res.status(200).json(planets);
});

app.get("/api/planets/:id", (req: any, res: any) => {
    const { id } = req.params;
    const planet = planets.find((planet) => planet.id === Number(id))
    res.status(200).json(planet);
});

app.post("/api/planets", policy, (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];

    res.status(201).json({ msg: "Planet created" });
});

app.put("/api/planets/:id", policy, (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map(el=> (el.id === Number(id) ? { ...el, name } : el))

    res.status(200).json({ msg: "planet updated"})
})

app.delete("/api/planets/:id", policy, (req, res) => {
    const { id } = req.params;
    planets = planets.filter(el => el.id !== Number(id));

    res.status(200).json({ msg: "planet deleted" });
});

app.listen(port, () => {
    console.log(`this is an example of a server on port: ${port}`);
});
