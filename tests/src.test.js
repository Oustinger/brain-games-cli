import gameMenu from '../src/bin/brain-games.js'

test('games-menu', () => {
	expect(gameMenu()).tobe('Please, choose the game [1/0]: ');
});

