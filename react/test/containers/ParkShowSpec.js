import ParkShow from '../../src/containers/ParkShow';
import ParkInfo from '../../src/containers/ParkInfo';

describe('ParkShow', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ParkShow
        />
      )
    });

  it('should render a ParkInfo component', () => {
    wrapper.setState({
      park:{ avg_rating: 2.9 }
    })
    expect(wrapper.find(ParkInfo)).toBePresent()
  })

})
