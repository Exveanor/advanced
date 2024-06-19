import { del, get, post, put } from "./api.js";


export async function getAllFacts() {
    return await get ("/data/facts?sortBy=_createdOn%20desc");
}

export async function addFact(data) {
    return await post ("/data/facts", data);
}

export async function getFactsById(id) {
    return get("/data/facts/" + id);
}

export async function updateFactById(id, data) {
    return put("/data/facts/" + id, data);
}

export async function deleteFactById(id) {
    return del("/data/facts/" + id);
}

