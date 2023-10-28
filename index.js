// sidebar nav list active nav item
const navList = document.getElementById("nav-list");
const listItems = Array.from(navList.children);
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    const currentActive = listItems.find((item) => {
      return item.classList.contains("active");
    });
    currentActive.classList.remove("active");
    item.classList.add("active");
  });
});

// messages
const messageContainers = Array.from(
  document.getElementsByClassName("messages")
);
const messages = new Array(15).fill().map((_) => {});

function getMessage() {
  const message = document.createElement("div");
  message.classList.add("message-list-item");
  message.innerHTML = `<img class="col-auto avatar" src="https://i.pravatar.cc/50" />
      <div class="col message-content">
        <p class="message-content-user">Username</p>
        <p class="message-content-subject">Subject</p>
      </div>
      <div class="col-auto row g-0 message-metadata">
        <time class="text-end">01/02/23</time>
        <div class="message-content-btn-group">
          <button data-action="star">
            <i class="fa-regular fa-star"></i>
          </button>
          <button>
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
    `;
  return message;
}

const mobileMessages = document.getElementById("mobile-messages");
const messageList = document.getElementById("desktop-messages");
for (let i = 0; i < 15; i++) {
  mobileMessages.append(getMessage());
  messageList.append(getMessage());
}

// star button
const starButtons = Array.from(
  document.querySelectorAll('[data-action="star"]')
);
starButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isStarred = btn.classList.contains("starred");
    if (isStarred) {
      btn.firstElementChild.classList.remove("fa-solid");
      btn.firstElementChild.classList.add("fa-regular");
    } else {
      btn.firstElementChild.classList.remove("fa-regular");
      btn.firstElementChild.classList.add("fa-solid");
    }
    btn.classList.toggle("starred");
  });
});

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
