import VoteButton from '../../src/components/VoteButton';
import ReviewTile from '../../src/components/ReviewTile';

describe('VoteButton', ()=> {
  let wrapper;
  let review = {comment: "hello alex", park_rating: 5, park_id: 1, user_id: 1}
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

  it('should render a button tag with text Up by default', () => {
    expect(wrapper.find("button").first.text()).toMatch("Up")
  })

  it('should render a button tag with text Down by default', () => {
    expect(wrapper.find("button")[1].text()).toMatch("Down")
  })

  it('should render a button tag with text Unup when this.state.voting is true', () => {
    wrapper.setState( {voting: true} )
    expect(wrapper.find("button").first.text()).toMatch("Unup")
    expect(wrapper.find("button")[1].text()).toMatch("Down")
  })

  it('should render a button tag with text Undown when this.state.voting is false', () => {
    wrapper.setState( {voting: false} )
    expect(wrapper.find("button").first.text()).toMatch("Up")
    expect(wrapper.find("button")[1].text()).toMatch("Undown")
  })
})
