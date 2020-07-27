export class AppService {
  async fetchSearchResultsFromDB(searchQuery,minPrice,maxPrice){
    return await $.get(`/api/courses?q=${searchQuery}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
  }
  async fetchUserInfoFromDB(userId){  
    return await $.get(`/api/user/${userId}`)
  }
  async fetchUserCoursesFromDB(userId){
    return await $.get(`/api/user/courses/${userId}`)
  }
}
console.log('AppService loaded')