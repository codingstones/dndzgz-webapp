
import { mount } from '@vue/test-utils'
import BusEstimations from '@/pages/BusEstimations'
jest.mock('@/core/router')
jest.mock('@/core/commands')
import {fakeBusEstimations} from '@/core/__mocks__/fake-estimations'

describe('BusEstimations', () => {
  let wrapper
  let estimations
  beforeEach( async () => {
    wrapper = mount(BusEstimations)
    await resolveAll()
  })

  it('should have estimations', () => {
    const estimations = wrapper.findAll('.estimation')
    expect(estimations.length).toBe(fakeBusEstimations.estimates.length)
  })

  it('the estimations should have direction, line and time', () => {
    const estimations = wrapper.findAll('.estimation')
    for (let index=0; index < estimations.length; index++) {
      const fakeEstiation = fakeBusEstimations.estimates[index]
      const estimation = estimations.at(index)
      expect(estimation.text()).toContain(fakeEstiation.direction)
      expect(estimation.text()).toContain(fakeEstiation.estimate)
      expect(estimation.text()).toContain(fakeEstiation.line)
    }
  })
})
