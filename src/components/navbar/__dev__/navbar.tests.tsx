/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'
import Navbar from '../'

describe('Navbarr', () => {
  it('With data selector', () => {
    mount(<Navbar data-selector='my' />)
    cy.get('[data-selector=my]').should('exist')
  })
})
