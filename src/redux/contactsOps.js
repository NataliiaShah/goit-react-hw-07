import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6797c2d4c2c861de0c6de709.mockapi.io/';

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const respons = await axios.get('contacts');
            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async (value, thunkAPI) => {
        try {
            const respons = await axios.post('contacts', value);
            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            const respons = await axios.delete(`contacts/${id}`);
            return respons.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)