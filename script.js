let project = [];

function addProject(event) {
  // menghentikan reload
  event.preventDefault();
  let title = document.getElementById('input-project-title').value;
  let starDate = document.getElementById('input-project-stardate').value;
  let endDate = document.getElementById('input-project-enddate').value;
  let deskripi = document.getElementById('project-description').value;
  let image = document.getElementById('input-project-image');
  let teknologi = document.getElementById('tkn').value;

  // menangani file upload
  image = URL.createObjectURL(image.files[0]);

  //   percabangan tidak berjalan (bug)
  if (teknologi == 'nodejs') {
    teknologi = document.getElementById('tkn').src = `assets/android.png `;
  } else {
    teknologi = document.getElementById('tkn').src = `assets/java.png `;
  }

  console.log(title);
  console.log(starDate);
  console.log(endDate);
  console.log(deskripi);
  console.log(image);
  console.log(teknologi);

  let projectAll = {
    title,
    starDate,
    endDate,
    deskripi,
    image,
    teknologi,
  };
  //   memasukan element ke paling belakang pada urutan array (push)

  project.push(projectAll);
  renderProject();
}

function renderProject() {
  let lengthData = project.length;
  let projectContainer = document.getElementById('project');
  projectContainer.innerHTML = firstProject();

  for (let i = 0; i < lengthData; i++) {
    projectContainer.innerHTML += `<div class="content-list">
        <div class="content-item">
          <div class="content-img">
            <img src="${project[i].image}" />
          </div>
          <div class="content-date">
            <a href="detail-project.html" target="_blank" style="text-decoration: none"><h3>${project[i].title}</h3></a>
            <p>${getDistanceTime()}</p>
          </div>
          <div class="content-deskripsi">
            <p>
              ${project[i].deskripi}
          </div>
          <div class="content-skill">
            <img src="${project[i].teknologi}" />
          </div>
          <div class="content-button-edit">
            <button type="button">Edit</button>
          </div>
          <div class="content-button-delete">
            <button type="button">Delete</button>
          </div>
        </div>
      </div>`;
  }
}

function firstProject() {
  return `
   <div class="content-list">
        <div class="content-item">
          <div class="content-img">
            <img src="assets/my-img.jpg" alt="" />
          </div>
          <div class="content-date">
            <a href="detail-project.html" target="_blank" style="text-decoration: none"><h3>Dumbsways Fullstack Programer</h3></a>
            <p>1 month</p>
          </div>
          <div class="content-deskripsi">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem, inventore neque vero voluptas consequuntur officia facere quam rem ipsam at reprehenderit ea accusamus, ducimus minus. In sequi sint minima.
            </p>
          </div>
          <div class="content-skill">
            <img src="assets/git.png" alt="" />
          </div>
          <div class="content-button-edit">
            <button type="button">Edit</button>
          </div>
          <div class="content-button-delete">
            <button type="button">Delete</button>
          </div>
        </div>
      </div>`;
}
// fungsi gagal di jalankan
function getDistanceTime() {
  // waktu saat - waktu postingan
  let starDate = document.getElementById('input-project-stardate').value;
  let endDate = document.getElementById('input-project-enddate').value;
  let distance = starDate - endDate;

  // convert to day
  const milisecond = 1000;
  const secondInMinutes = 60;
  const minutesInHour = 60;
  const SecondsInHour = secondInMinutes * minutesInHour;
  const housInDay = 23;

  let dayDistance = distance / (milisecond * secondInMinutes * housInDay);

  if (dayDistance >= 1) {
    // day ago
    return Math.floor(dayDistance) + 'month';
  } else {
    // convert to hour
    let hourDistance = Math.floor(distance / (milisecond * SecondsInHour));

    if (hourDistance > 0) {
      return hourDistance + 'month';
    } else {
      // convert to Minutes
      const minutesDistance = Math.floor(distance / (milisecond * secondInMinutes));
      return minutesDistance + 'month';
    }
  }
  console.log(dayDistance);
}

// fungsi gagal di jalankan
function showDetailProject() {
  let showDetail = document.getElementById('detail-project-content');
  showDetail.innerHTML = ` <div class="detail-project-title">
        <h1>Dumbways Web App</h1>
      </div>
      <div class="porject-detail-view">
        <div class="project-detail-show">
          <div class="project-detail-img">
            <img src="assets/my-img.jpg" alt="" />
          </div>
        </div>
        <div class="date-and-teknologi">
          <div class="project-detail-duration">
            <h3>Duration</h3>
            <img src="assets/calendar.png" />
            <p>${starDate} - ${endDate}</p>
            <br />
            <img src="assets/wall-clock.png" alt="" />
            <p>1 month</p>
          </div>
          <div class="project-detail-teknologi">
            <h3>Technologi</h3>
            <img src="assets/atom-symbol.png" alt="" />
            <p>React js</p>
            <img src="assets/node-js.png" alt="" />
            <p>Node js</p>
            <br />
            <img src="assets/js.png" alt="" />
            <p>javascript</p>
            <img src="assets/mail.png" alt="" />
            <p>socket.io</p>
            <br />
          </div>
        </div>
      </div>
      <div class="detail-project-description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quibusdam recusandae ullam blanditiis nam ab eos architecto facere eaque. Ipsum mollitia corrupti beatae tempore eum voluptate hic voluptatibus id temporibus dolores
          tenetur eaque ipsam consequatur facere, officia illum voluptatem suscipit, illo error, sed molestiae obcaecati velit cumque. Libero vitae aliquid at excepturi dicta commodi reprehenderit laborum. Doloribus quo deleniti dolores ea
          quis repellendus totam eius ab voluptatem? Velit mollitia veritatis amet eveniet quasi voluptate possimus id laudantium repudiandae, iusto illo cumque perferendis ducimus natus sunt!
        </p>
      </div>`;
}
