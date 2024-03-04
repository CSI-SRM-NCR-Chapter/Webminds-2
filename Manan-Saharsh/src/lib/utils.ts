import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseNameAndRegNum(input: string | null | undefined) {
  if (!input) return null;
  // Split the input string into three parts: first name, last name, and registration number
  const regex = /^(\w+)\s(\w+)\s\((\w+)\)$/;
  const matches = input.match(regex);

  // If the input doesn't match the expected format, return null
  if (!matches || matches.length !== 4) {
    return null;
  }

  // Extract first name, last name, and registration number from the matches
  const [, firstName, lastName, regNum] = matches;

  // Return an object with the parsed values
  return {
    name: `${firstName} ${lastName}`,
    regNum: regNum
  };
}
