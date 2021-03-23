React.useCallback
    returns a memoized version of the function. the same function
    is used between rerenders
    function ParentComponent() {
        const onHandleClick1 = () => { ... };
        const onHandleClick2 = useCallback(() => { ... });
        // onHandleClick1 is renewed on very rerender, making
        // child components that rely on it rerender.
        // onHandleClick2 is always the same
        return (
            <MemoizedSubComponent
                handleClick={onHandleClick}
            />
        );
    }



memo
