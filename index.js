const tran = {};

function GenerateUrlCourse(id) {
  return `https://app.memrise.com/v1.18/learning_sessions/learn/?session_source_id=${id}&session_source_type=course`
}

const course = () => new URLSearchParams(location.search).get("course_id");

function answer() {
  const question = document.querySelector("h2").innerText;
  const answers = document.querySelector("#__next > div.sc-35r7d9-0.kBvoSf > div > div > div > div > div.sc-1yeljmw-0.jXqGzN > div.sc-1fe58ld-0.ebbpuO > div").children[1].children;
  
  Array.from(answers).forEach(answer => {
    const value = answer.innerText.split("\n")[1];
    if (value == tran[question]) {
      answer.firstChild.click()
    }
  })
  requestAnimationFrame(answer)
}
async function main() {
  const data = await (await fetch(GenerateUrlCourse(course()))).json();
  const learnables = data.learnables;
  learnables.forEach(learn => {
    tran[learn.definition_element] = tran[learn.learning_element]
  })
    
  answer() 
}

main()
