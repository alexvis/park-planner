import ReviewFormContainer from '../../src/containers/ReviewFormContainer';
import TextField from '../../src/components/TextField';
import StarDropdown from '../../src/components/TextField';

describe('ReviewFormContainer', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ReviewFormContainer
          parkId = {2}
          userId = {2}
        />
      )
    });

  it('should render a TextField & StarDropdown component', () => {
    wrapper.setState({
      comment: '',
      parkRating: null,
      dogRating: null,
      playgroundRating: null,
      campingRating: null,
      hikingRating: null,
      sceneryRating: null,
    })

    expect(wrapper.find('input')).toBePresent()
    expect(wrapper.find(TextField)).toBePresent()
    expect(wrapper.find(StarDropdown)).toBePresent()
  })
})
