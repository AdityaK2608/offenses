const page = {
  name: "NaBFID Offense Processor",
  status: "under-development"
};

document.title = page.name;

const roadmapLink = document.querySelector('a[href="#roadmap"]');
roadmapLink?.addEventListener("click", () => {
  document.querySelector("#roadmap")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

console.info(`${page.name}: temporary landing page loaded (${page.status}).`);