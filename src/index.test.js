import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from "./components/utils/context/ThemeProvider"

describe('Header', () => {
    test('Should render without crash', async () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
})

describe('Footer', () => {
    test('Should render without crash', async () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>
        )
    })
})
