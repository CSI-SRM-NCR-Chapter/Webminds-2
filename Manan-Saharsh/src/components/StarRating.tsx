"use client"
import { Rating } from "react-simple-star-rating";

export default function StarRating() {
  return <Rating readonly size={20} emptyStyle={{ display: "flex" }} initialValue={4} fillStyle={{ display: "-webkit-inline-box" }} />
}
