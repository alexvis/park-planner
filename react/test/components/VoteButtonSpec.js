import VoteButton from '../../src/components/VoteButton';

describe('VoteButton', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <VoteButton
	  reviewId={1}
	  userId={1}
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

