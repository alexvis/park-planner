import ParkReviews from '../../src/containers/ParkReviews';
import ReviewTile from '../../src/components/ReviewTile';

describe('ParkReviews', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ParkReviews
        />
      )
    });

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render a ReviewTile component', () => {
    wrapper.setState({
      reviewsArray:[{ comment: "I love this park", park_rating: 5 }]
    })

    expect(wrapper.find(ReviewTile)).toBePresent()
  })
})
