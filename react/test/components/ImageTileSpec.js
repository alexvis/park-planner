import ImageTile from '../../src/components/ImageTile';

describe('ImageTile', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <ImageTile
          park_image="Test URL"
        />
      )
    });

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render a img tag', () => {
    expect(wrapper.find("img")).toBePresent()
  })

  it('should render the img', () => {
    expect(wrapper.find("img").props()).toEqual({
      src: "Test URL",
      alt: 'pix'
    })
  })

})
