import * as dbFavorite from "../db/favorite"
import { Router } from "express"

const router = Router();

// GET /favorites - returns a list of favorite items
router.get("/", async (req, res) => {
    console.log("GET /favorites");

    const favorites = await dbFavorite.getAll();

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(favorites));
});