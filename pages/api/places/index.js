//import { places } from "../../../lib/db";
import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Places.find();
    response.status(200).json(places);
    console.log("places_", places);
    return;
  }

  if (request.method === "POST") {
    const placesData = request.body;
    await Places.create(placesData);

    response.status(201).json({ status: "Places created." });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
  return;
}
