const AppConstants = {
    ShownModesString: ["All", "Todo", "Done"]
};

const initialState = {
    todoItems: [
        {
            content: 'first item',
            isDone: false
        },
        {
            content: 'second item',
            isDone: true
        }
    ],
    shownMode: AppConstants.ShownModesString[0]
};

export {AppConstants, initialState};