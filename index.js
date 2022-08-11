const tran = {};

function GenerateUrlCourse(id) {
  return `https://app.memrise.com/v1.18/learning_sessions/learn/?session_source_id=${id}&session_source_type=course`
}

const course = () => new URLSearchParams(location.search).get("course_id");

async function main() {
}

main()
