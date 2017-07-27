import ParkInfo from '../../src/containers/ParkInfo';
import RatingTile from '../../src/components/RatingTile';

describe('ParkInfo', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ParkInfo
          ratings = {[
            {
              name: "Test Rating Name",
              value: 3.4
            }
          ]}
        />
      )
    });

  it('should render a RatingTile if there is a rating', () => {
    expect(wrapper.find(RatingTile)).toBePresent()
  })

})
