/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react18'
import Navbar from '../'

describe('Navbr', () => {
  it('With data selector', () => {
    mount(<Navbar />)
    cy.get('[data-selector=navbar]').should('exist')
  })
})
