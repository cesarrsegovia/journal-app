import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./"


export const AppTheme = ({ children }) => {
    return (
        //themeprovider con props children para agregar la libreria mui material
        <ThemeProvider theme={ purpleTheme }>
            <CssBaseline/>

            { children }
        </ThemeProvider>
    )
}
