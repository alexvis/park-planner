import FollowButton from '../../src/components/FollowButton';

describe('FollowButton', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <FollowButton
	  parkId={1}
	  userId={1}
        />
      )
    });

  it('should not render a button tag by default', () => {
    expect(wrapper.find("button")).not.toBePresent()
  })

  it('should render a button tag with text Following when this.state.following is true', () => {
    wrapper.setState( {following: true} )
    expect(wrapper.find("button")).toBePresent()
    expect(wrapper.find("button").text()).toMatch("Stop Following")
  })

  it('should render a button tag with text Follow when this.state.following is false', () => {
    wrapper.setState( {following: false} )
    expect(wrapper.find("button")).toBePresent()
    expect(wrapper.find("button").text()).toMatch("Follow")
  })
})
