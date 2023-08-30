import '@testing-library/jest-dom'
import { renderWithProviders } from '../../utils/test-utils'
import Story from '../components/Story'

describe("Full app", () => {

  it("should save a word", async () => {
    const data= renderWithProviders(<Story />, {
      preloadedState: {
        story: {
          story: 'some text',
          status: 'succeeded',
          error: null
        }
      }
    })
    expect(data.getByText(/some/)).toBeInTheDocument()
    expect(data.getByText(/text/)).toBeInTheDocument()
  })
})
