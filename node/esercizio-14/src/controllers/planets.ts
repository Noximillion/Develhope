import { Request, Response } from "express";
import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/esercizi")

const setupDb = async () => {
    db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            image TEXT,
        );
    `)

    await db.none(`INSERT INTO planets (name) VALUES ('Earth')`)
    await db.none(`INSERT INTO planets (name) VALUES ('Mars')`)

    const planets = await db.many(`SELECT * FROM planets`)
    console.log(planets)
}

setupDb()

const getAll = async (req: Request, res: Response) => {
    const planets = await db.many(`SELECT * FROM planets`)
    res.status(200).json(planets);
};

const getOneById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const planet = await db.one(`SELECT * FROM planets WHERE id =$1`, Number(id))
    res.status(200).json(planet);
};

const create = async (req: Request, res: Response) => {
    const { id, name } = req.body;
    await db.none(`INSERT INTO planets (name) VALUES ($1)`, name)

    res.status(201).json({ msg: "Planet created" });
};

const updateById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;

    await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name])
    res.status(200).json({ msg: "planet updated" });
};


const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    await db.none(`DELETE FROM planets WHERE id=$1`, Number(id))

    res.status(200).json({ msg: "planet deleted" });
};

const addImage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const fileName = req.file?.path;

    if(fileName) {
        db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [id, fileName])
        res.status(201).json({msg: "img uploaded"})
    } else {
        res.status(400).json({ msg: "failed to upload img"})
    }


};

export { getAll, getOneById, create, updateById, deleteById, addImage }
