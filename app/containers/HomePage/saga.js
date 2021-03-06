/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_NODES_DETAIL } from 'containers/App/constants';
import { nodesDetailLoaded, nodesDetailLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

////**
// * Github repos request/response handler
// */
//export function* getRepos() {
//  // Select username from store
//  const username = yield select(makeSelectUsername());
//  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
//
//  try {
//    // Call our request helper (see 'utils/request')
//    const repos = yield call(request, requestURL);
//    yield put(reposLoaded(repos, username));
//  } catch (err) {
//    yield put(repoLoadingError(err));
//  }
//}
//
///**
// * Root saga manages watcher lifecycle
// */
//export default function* githubData() {
//  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//  // By using `takeLatest` only the result of the latest API call is applied.
//  // It returns task descriptor (just like fork) so we can continue execution
//  // It will be cancelled automatically on component unmount
//  yield takeLatest(LOAD_REPOS, getRepos);
//}
//
//


/**
 * Github repos request/response handler
 */
export function* getNodesDetail() {
  // Select username from store
  //const username = yield select(makeSelectUsername());
  //const requestURL = 'http://localhost:3001/';
  const requestURL = `http://${location.hostname}:3001/`;
  try {
    // Call our request helper (see 'utils/request')
    const nodesDetail = yield call(request, requestURL);
    yield put(nodesDetailLoaded(nodesDetail));
  } catch (err) {
    yield put(nodesDetailLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_NODES_DETAIL, getNodesDetail);
}
