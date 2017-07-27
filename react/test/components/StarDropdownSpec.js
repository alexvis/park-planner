import StarDropdown from '../../src/components/StarDropdown'

describe('StarDropdown', ()=> {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <StarDropdown
        label={'Overall Park Rating'}
        rating={5}
      />
    )
  });

  it('should render a label tag with the specific props', () => {
    expect(wrapper.find('label')).toBePresent();
  })

  it('should render an input tag with the specific props', () => {
    expect(wrapper.find('select')).toBePresent();
  })

  it('should render an input tag with the specific props', () => {
    expect(wrapper.find('option')).toBePresent();
  })

});
