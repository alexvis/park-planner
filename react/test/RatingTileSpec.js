import RatingTile from '../src/components/RatingTile';

describe('RatingTile', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <RatingTile
          name="Test Name"
          value={3.4}
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
      expect(wrapper.find("p#name").text()).toMatch("Test Name")
    })

    it('should render the value', () => {
      expect(wrapper.find("p#value").text()).toMatch("3.4")
    })

})
