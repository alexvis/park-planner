import TextField from '../../src/components/TextField'

describe('TextField', ()=> {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <TextField
        content={'comment'}
        label={'Write your review here:'}
        name={'name'}
      />
    )
  });

  it('should render a label tag with the specific props', () => {
    expect(wrapper.find('label')).toBePresent();
    expect(wrapper.find('label').text()).toEqual('Write your review here:')
  })

  it('should render an input tag with the specific props', () => {
    expect(wrapper.find('input')).toBePresent();
    expect(wrapper.find('input').props()).toEqual({
      id: 'name',
      name: 'name',
      type: 'text',
      value: 'comment'
    });
  })

});
