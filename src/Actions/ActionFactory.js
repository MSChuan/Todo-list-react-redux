const actionFactory = {
    AddItem: (content) => ({
        type: "AddItem",
        content: content
    }),
    Done: (index) => ({
        type: "Done",
        index: index
    }),
    SetMode: (shownMode) => ({
        type: "SetMode",
        shownMode: shownMode
    }),
};

export default actionFactory;
