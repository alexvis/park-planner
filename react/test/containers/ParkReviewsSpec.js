import ParkReviews from '../../src/containers/ParkReviews';
import NewReviewForm from '../../src/components/NewReviewForm';
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

  it('should render a NewReviewForm component', () => {
    expect(wrapper.find(NewReviewForm)).toBePresent()
  })

  it('should render a ReviewTile if there is a review', () => {
    wrapper.setState({
      reviews: [{
        id: 1,
        body: "Review Test Body"
      }]
    })
    expect(wrapper.find(ReviewTile)).toBePresent()
  })

})
