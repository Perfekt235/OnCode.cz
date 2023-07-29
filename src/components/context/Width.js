import React, { createContext, useContext, useState, useEffect } from "react";

export const WidthContext = createContext(null);

 export const WidthProvider = ({children}) => {

    const [width, setWidth] = useState({
        width: window.innerWidth,
    });


    useEffect(()=>{
        const handleResize = () => {
            setWidth({
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return (
        <WidthContext.Provider value={width}>
            {children}
        </WidthContext.Provider>
    );

};

export const useWidth = () => useContext(WidthContext);

