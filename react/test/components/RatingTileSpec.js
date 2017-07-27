import RatingTile from '../../src/components/RatingTile';

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

  it('should render a p tag', () => {
    expect(wrapper.find("p")).toBePresent()
  })

  it('should render the name', () => {
    expect(wrapper.find("p").text()).toMatch("Test Name: 3.4")
  })
})
