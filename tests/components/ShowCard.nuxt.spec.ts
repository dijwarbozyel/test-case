import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowCard from '~/components/ShowCard.vue'
import mockData from './mockData'

describe('ShowCard Component', () => {
  const defaultMountOptions = {
    props: {
      show: mockData
    }
  }

  it('renders show information correctly', () => {
    const wrapper = mount(ShowCard, defaultMountOptions)

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(mockData.image?.medium)
    
    expect(wrapper.text()).toContain(mockData.name)
    
    expect(wrapper.text()).toContain(mockData.rating.average)
    
    mockData.genres.forEach(genre => {
      expect(wrapper.text()).toContain(genre)
    })
  })

  it('uses placeholder image when show image is not available', () => {
    const showWithoutImage = {
      ...mockData,
      image: null
    }

    const wrapper = mount(ShowCard, {
      ...defaultMountOptions,
      props: {
        show: showWithoutImage
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/assets/images/placeholder.png')
  })

  it('displays N/A when rating is not available', () => {
    const showWithoutRating = {
      ...mockData,
      rating: {
        average: null
      }
    }

    const wrapper = mount(ShowCard, {
      ...defaultMountOptions,
      props: {
        show: showWithoutRating
      }
    })

    const ratingElement = wrapper.find('.bg-black')
    expect(ratingElement.exists()).toBe(true)
    expect(ratingElement.text()).toContain('N/A')
  })
})