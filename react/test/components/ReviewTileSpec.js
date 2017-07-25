import ReviewTile from '../../src/components/ReviewTile';

describe('ReviewTile', ()=> {
  let wrapper;
  let review = {comment: "hello alex", park_rating: 5}
    beforeEach(() => {
      wrapper = mount(
        <ReviewTile
          reviewContent = {review}
        />
      )
    });

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render a p tag', () => {
    expect(wrapper.find("p")).toBePresent()
  })

  it('should render the name', () => {
    expect(wrapper.find("p#comment").text()).toMatch("hello alex")
  })

  it('should render the value', () => {
    expect(wrapper.find("p#rating").text()).toMatch("5")
  })
})
