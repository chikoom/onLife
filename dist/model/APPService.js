export class AppService {
  async fetchSearchResultsFromDB(searchQuery){
    return await $.get(`/api/courses?q=${searchQuery}`)
  }
  async fetchUserInfoFromDB(userId){
    return await $.get(`/api/user/${userId}`)
  }
  async fetchUserCoursesFromDB(userId){
    return await $.get(`/api/user/courses/${userId}`)
  }
}
console.log('AppService loaded')