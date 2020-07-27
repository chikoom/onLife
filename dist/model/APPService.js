export class AppService {
  async fetchSearchResultsFromDB(searchQuery,minPrice,maxPrice,sorting,pageNumber,providers){
    return await $.get(`/api/courses?q=${searchQuery}&minPrice=${minPrice}&maxPrice=${maxPrice}&sorting=${sorting}&pageNumber=${pageNumber}&providers=${providers}`)
  }
  async fetchUserInfoFromDB(userId){  
    return await $.get(`/api/user/${userId}`)
  }
  async fetchUserCoursesFromDB(userId){
    return await $.get(`/api/user/courses/${userId}`)
  }
}
console.log('AppService loaded')