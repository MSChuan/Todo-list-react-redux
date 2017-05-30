const AppConstants = {
    ShownModesString: ["Show All", "Show Todo", "Show Done"]
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