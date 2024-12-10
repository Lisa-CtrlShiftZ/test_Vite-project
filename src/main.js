const url = "http://127.0.0.1:8000/api/courses";

async function putStuffIn(course_name, description, credits, instructor_id){
 await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      course_name: course_name,
      description: description,
      credits: credits,
      instructor_id: instructor_id
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON from the response
  })
  .then(data => {
    console.log("Data successfully sent:", data); // Success feedback
  })
  .catch(error => {
    console.error("Error sending data:", error); // Error feedback
  });
}

putStuffIn("Baking Cakes", "Learn to bake all the cakes", 1, 1); 


async function getData(url){
  await fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
};

getData(url); 

