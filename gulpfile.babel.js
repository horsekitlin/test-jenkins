import gulp from 'gulp';
import scp from 'gulp-scp2';
import dotenv from 'dotenv';

const config = dotenv.config().parsed;
const {NODE_ENV} = process.env;

const configKeyPrefix = `REACT_APP_${NODE_ENV}`;

function clean(cb) {
  console.log('TCL: clean -> clean');
  // body omitted
  cb();
}

function css(cb) {
  console.log('TCL: css -> css');
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function deployToServerTask() {
  const scpConfig = {
    host: config[`${configKeyPrefix}_SERVER_HOST`],
    dest: config[`${configKeyPrefix}_SERVER_DEST`],
    username: config[`${configKeyPrefix}_SERVER_USERNAME`],
    password: config[`${configKeyPrefix}_SERVER_PASSWORD`]
  };
  
  return gulp
    .src('build/**')
    .pipe(
      scp(scpConfig)
    ).on('error', error => {
      throw error;
    });
}

function defaultTask(cb) {
  console.log('TCL: defaultTask -> defaultTask', 'done');
  cb();
}

export default defaultTask;

export const deploy = gulp.series(deployToServerTask);
