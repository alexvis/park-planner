import ReviewTile from '../src/components/ReviewTile';

describe('ReviewTile', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ReviewTile
          body="Test Body"
        />
      )
    });

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render a p tag', () => {
    expect(wrapper.find("p")).toBePresent()
  })

    it('should render the body', () => {
      expect(wrapper.find("p").text()).toMatch("Test Body")
    })


})
