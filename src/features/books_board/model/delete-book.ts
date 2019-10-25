import { removeBookHandler } from "@api/books";
import { createEffect } from "effector";

export const removeBook = createEffect<number, void, Error>();
removeBook.use(removeBookHandler);