import NewReviewForm from '../../src/components/NewReviewForm';

describe('NewReviewForm', ()=> {
  let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <NewReviewForm
        />
      )
    });

  it('should return true', () => {
    expect(true).toEqual(true)
  })

  it('should render a div tag', () => {
    expect(wrapper.find("div")).toBePresent()
  })

  it('should render a button tag with text', () => {
    expect(wrapper.find("div").text()).toEqual("ReviewForm")
  })

})
