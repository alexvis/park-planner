import NavBar from '../src/components/NavBar';

describe('NavBar', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <NavBar
        />
      )
    });

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render a div tag', () => {
    expect(wrapper.find("div")).toBePresent()
  })

})
