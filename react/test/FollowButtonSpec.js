import FollowButton from '../src/components/FollowButton';

describe('FollowButton', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <FollowButton
        />
      )
    });

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render a button tag', () => {
    expect(wrapper.find("button")).toBePresent()
  })

  it('should render a button tag with text', () => {
    expect(wrapper.find("button").text()).toEqual("Follow Button")
  })

})
