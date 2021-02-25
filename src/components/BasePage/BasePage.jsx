import React from 'react'
import "./BasePage.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const BasePage = ({children}) => {
  return (
    <>
      <Header />
      <main className="BasePage">
      {children}
      </main>
      <Footer />
    </>
  )
}

export default BasePage
