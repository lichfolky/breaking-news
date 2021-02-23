# BreakingNews

The goal of this project is to create a stream of news from a websocket api managed with node and with rxjs collect the stream, manage a circolar queue to show a caption with the last news available from the stream.

For now I have made only few caption [experiments](https://lichfolky.github.io/node/rxjs/videos/2021/02/20/breaking-news.html
) with a youtube iframe,
but the goal it's to have my own player with synched news.

Ostacles: 
+ variable arrival of new news
+ all the news should flow with the same speed
+ the arrival of new news should not block the previus flow
+ the news flow should stop/start with the play button of the video.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


https://css-tricks.com/animations-the-angular-way/
https://indepth.dev/posts/1285/in-depth-guide-into-animations-in-angular
