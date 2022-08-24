import { getItems } from "../application/api";


export const getStudents = async() => {
    let students = [];

    students = await getItems();
    return students;
}
