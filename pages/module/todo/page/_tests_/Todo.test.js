import Todo from '../Todo';

describe('<Todo />', () => {
    it('Matches the snapshot', () => {
        const tree = renderer.create(Todo).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render inputs and buttons', () => {

    });
});
