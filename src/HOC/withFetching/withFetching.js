import React from 'react';

const AppWithFetch = w => {
const [user, setUser] = useState(null)

    return (
        <CurrentUserContext.Provider value = {[user, setUser]}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export default WithFetching