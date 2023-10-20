import { createClient } from "next-sanity";

const projectId = "myozyuup";
const dataset = "production";
const apiVersion = "2023-10-18";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});