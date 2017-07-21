import ParkInfo from '../../src/containers/ParkInfo';
import RatingTile from '../../src/components/RatingTile';
import ImageTile from '../../src/components/ImageTile';

describe('ParkInfo', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ParkInfo
        />
      )
    });

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render a ImageTile component', () => {
    expect(wrapper.find(ImageTile)).toBePresent()
  })

  it('should render a RatingTile if there is a rating', () => {
    wrapper.setState({
      ratings: [
        {
          name: "Test Rating Name",
          value: 3.4
        }
      ]
    })
    expect(wrapper.find(RatingTile)).toBePresent()
  })

})
