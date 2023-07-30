import { Request, Response } from "express";

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

const getAll = (req: Request, res: Response) => {
    res.status(200).json(planets);
};
const getOneById = (req: Request, res: Response) => {
    const { id } = req.params;
    const planet = planets.find((planet) => planet.id === Number(id));
    res.status(200).json(planet);
};
const create = (req: Request, res: Response) => {
    const { id, name } = req.body;
    const newPlanet: Planet = { id, name };
    planets = [...planets, newPlanet];

    res.status(201).json({ msg: "Planet created" });
};
const updateById = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map((el) =>
        el.id === Number(id) ? { ...el, name } : el
    );

    res.status(200).json({ msg: "planet updated" });
};
const deleteById = (req: Request, res: Response) => {
    const { id } = req.params;
    planets = planets.filter((el) => el.id !== Number(id));

    res.status(200).json({ msg: "planet deleted" });
};

export { getAll, getOneById, create, updateById, deleteById };
