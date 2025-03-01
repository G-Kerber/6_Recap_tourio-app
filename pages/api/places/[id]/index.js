//import { places } from "../../../../lib/db.js";
import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Places.findById(id);
    response.status(200).json(place);
    return;
  }

  if (!place) {
    response.status(404).json({ status: "Not found" });
    return;
  }

  response.status(200).json(place);
}
