import ParkFormContainer from '../../src/containers/ParkFormContainer';
import TextField from '../../src/components/TextField';
import StarDropdown from '../../src/components/TextField';

describe('ParkFormContainer', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ParkFormContainer/>
      )
    });

  it('should render a TextField & StarDropdown component', () => {
    wrapper.setState({
      nameError: '',
      stateError: '',
      linkError: '',
      id: '',
      name: '',
      description: '',
      state: '',
      imgUrl: '',
      linkUrl: '',
      avgRating: '',
      dogFriendlyAvgRating: '',
      campingAvgRating: '',
      playgroundAvgRating: '',
      hikingAvgRating: '',
      sceneryAvgRating: '',
    })

    expect(wrapper.find('input')).toBePresent()
    expect(wrapper.find('button')).toBePresent()
    expect(wrapper.find(TextField)).toBePresent()
    expect(wrapper.find(StarDropdown)).toBePresent()
  })

})
