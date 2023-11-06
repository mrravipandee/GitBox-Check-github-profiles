// hidden divs and show profile disp.
function showProfile() {
  const profileDiv = document.getElementById("profile");
  const searchBtn = document.getElementById("searchBar");

  // Toggle the 'hidden' class to show/hide the profile div
  if (profileDiv.classList.contains("hidden")) {
    profileDiv.classList.remove("hidden");
    searchBtn.classList.add("hidden");
  } else {
    profileDiv.classList.add("hidden");
  }

  // for api key
  const username = document.getElementById("git_username").value;
  const apiUrl = `https://api.github.com/users/${username}`;

  fetch(apiUrl, {
    headers: {
      Authorization: `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`, // Replace YOUR_GITHUB_API_KEY with your actual GitHub API key
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // for user information
      const gitPic = document.getElementById("git_profile");
      const gitLocation = document.getElementById("git_location");
      const gitName = document.getElementById("git_name");
      const gitFollowers = document.getElementById("git_followers");
      const gitFollowing = document.getElementById("git_following");

      gitPic.src = `${data.avatar_url}`;
      gitLocation.innerHTML = `${data.location}`;
      gitName.innerHTML = `${data.name}`;
      gitFollowers.innerHTML = `${data.followers}`;
      gitFollowing.innerHTML = `${data.following}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      const notFound = document.getElementById("not-found");
      notFound.innerHTML = `<p>User not found</p>`;
    });
}