/*global $*/
$(function() {

  // your code will go here
  
  $.ajax({
      url: 'https://www.codeschool.com/users/1864819.json',
      dataType: 'jsonp',
      success: function(response){
            var completedCourses = response.courses.completed,
                mainBudgesDiv  = $("#badges");
            for(var i = 0, total = completedCourses.length; i < total; i ++){
                var divContemt =    "<h3>"+completedCourses[i].title + 
                                    "</h3> <img src='"+completedCourses[i].badge +
                                    "' > <a href='"+ completedCourses[i].url+"' target='_blank ' class='btn btn-primary'>See Course</a>"
                var badgeDiv = $("<div></div>", {
                    "class": "course",
                    "html" : divContemt
                });
                
                mainBudgesDiv.append(badgeDiv);
                
            }
            console.log(response);
      }
  });
});
