import { createSlice } from "@reduxjs/toolkit";

function CalculatorPrice(con, price) {
    let valor = 0;
    if (con < 12) {
        valor = price;
        return (valor * con);

    } else if (con >= 12 && con < 24) {
        valor = (price - ((price * 5) / 100));
        return (valor * con);

    } else if (con >= 24 && con < 36) {
        valor = (price - ((price * 10) / 100));
        return (valor * con);

    } else {
        valor = (price - ((price * 15) / 100));
        return (valor * con);
    }
}

// const initialState = [
//     {
//         name: "juan & martha",
//         count: "2",
//         price: "10000",
//         finishPrice: "20000",
//         id: "22-3",
//         nameCategory: "Tarjetas de Bodas",
//         url: "https://firebasestorage.googleapis.com/v0/b/my-projectstorage-7b2b9.appspot.com/o/ArteYDise%C3%B1o%2FBodas%2F10000%20(3).jpg?alt=media&token=aa5ecb50-41a2-47af-9afa-7e68eb595392"
//     }]

const userSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const { name, count, price, finishPrice, id, nameCategory, url } = action.payload;
            const foundTask = state.find((task) => task.id === id);
            if (foundTask) {
                foundTask.name = name;
                foundTask.count = count;
                foundTask.price = price;
                foundTask.finishPrice = finishPrice;
            } else {
                console.log(action);
                state.push(action.payload);
            }

        },
        editTask: (state, action) => {
            const { id, name } = action.payload;
            const foundTask = state.find((task) => task.id === id);
            if (foundTask) {
                foundTask.name = name;
            }
            // console.log(state);
        },
        deleteTask: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if (foundTask) {
                state.splice(state.indexOf(foundTask), 1);
            }
        },
        editCounterIncrement: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if (foundTask) {
                foundTask.count = parseInt(foundTask.count) + 1;
                const answer = CalculatorPrice(foundTask.count, foundTask.price);
                foundTask.finishPrice = answer + ""
            }
        },
        editCounterDecrement: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if (foundTask) {
                if (parseInt(foundTask.count) > 1) {
                    foundTask.count = parseInt(foundTask.count) - 1;
                    const answer = CalculatorPrice(foundTask.count, foundTask.price);
                    foundTask.finishPrice = answer + ""
                }
            }
        }

    },
});

export const { addTask, editTask, deleteTask, editCounterIncrement, editCounterDecrement } = userSlice.actions;
export default userSlice.reducer;