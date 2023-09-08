function *start() {
    game.playmusic(`Light1.wav`);
    yield game.wait(1000);
    game.playmusic(`Intro.mp3`);
}
