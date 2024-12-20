import axios, { AxiosResponse } from 'axios';
import { TodoList } from '../interfaces/interface';

const api = axios.create({
    baseURL: "https://671513e433bc2bfe40b95089.mockapi.io/api/v1/"
});

export const geTodoList = async (): Promise<TodoList[] | null> => { 
    try {
        const res: AxiosResponse<unknown, unknown> = await api.get('todolist');
        return res.data as TodoList[];
    } catch (error) {
        console.error('Error fetching todo list:', error);
        return null;  
    }
};

export const createTodoList = async (title: string): Promise<void> => {
    try {
        await api.post(`todolist`, {
            title
        });
    } catch (error) {
        console.error('Error creating todo item:', error);
    }
};
