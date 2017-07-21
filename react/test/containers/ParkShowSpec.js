import ParkShow from '../../src/containers/ParkShow';
import ParkInfo from '../../src/containers/ParkInfo';
import ParkReviews from '../../src/containers/ParkReviews';
import RatingTile from '../../src/components/RatingTile';
import FollowButton from '../../src/components/FollowButton';

describe('ParkShow', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ParkShow
        />
      )
    });

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render a FollowButton component', () => {
    expect(wrapper.find(FollowButton)).toBePresent()
  })

  it('should render a ParkInfo component', () => {
    wrapper.setState({
      park:{
        avg_rating: 2.9,
        dog_friendly_avg_rating: 3.4
      }
    })
    expect(wrapper.find(ParkInfo)).toBePresent()
  })

  it('should render a ParkReviews component', () => {
    expect(wrapper.find(ParkReviews)).toBePresent()
  })

})
