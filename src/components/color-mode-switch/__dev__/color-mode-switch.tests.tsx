/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'
import ColorModeSwitch from '../'

describe('ColorModeSwitch', () => {
  it('With data selector', () => {
    mount(<ColorModeSwitch data-selector='my' />)
    cy.get('[data-selector=my]').should('exist')
  })
})
