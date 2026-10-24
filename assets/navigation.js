const navigationGroups = [
  {
    label: "3D Buildings",
    links: [
      ["Overview", "h_3d_buildings.html"],
      ["Sham Shui Po Building Heights in 3D", "h_3d_buildings.html#sham-shui-po"],
    ],
  },
  {
    label: "CSDI Portal",
    links: [
      ["Overview", "h_portal.html"],
      ["ArcGIS Online Analysis Guide for Students", "h_portal.html#arcgis-analysis-guide"],
      ["CSDI Dataset Guide for Students", "h_portal.html#csdi-dataset-guide"],
      ["CSDI Awards 2026 Timeline", "h_timeline.html"],
    ],
  },
  {
    label: "GIS Competition",
    links: [
      ["Overview", "h_competition.html"],
      ["CSDI Awards 2024: Categories 2 and 3", "h_competition.html#csdi-awards-2024"],
      ["Mapping Our Sustainable Future: ArcGIS StoryMap Competition 2027", "h_competition.html#sustainable-future-2027"],
      ["Telling Stories with Maps: CMEF Digital Map Contest 2026–27", "h_competition.html#cmef-contest-2026"],
    ],
  },
  {
    label: "GIS Projects",
    links: [
      ["Overview", "h_projects.html"],
      ["AI Models for Indoor/Outdoor Identification", "h_projects.html#indoor-outdoor-models"],
      ["Covered Walkways: CSDI Data and ArcGIS Recipe", "h_projects.html#covered-walkways"],
      ["Project Notes", "h_projects.html#project-notes"],
      ["Volleyball Courts: CSDI and SmartPLAY Data and ArcGIS Recipe", "h_projects.html#volleyball-courts"],
    ],
  },
  {
    label: "NPL GIS Team",
    links: [
      ["Team Home", "h_team.html"],
      ["GIS Projects", "h_team.html#gis-projects"],
      ["Welcome", "h_team.html#welcome"],
    ],
  },
];

const navRoot = document.querySelector("[data-site-nav]");
const assetPrefix = location.pathname.includes("/assets/") ? "./" : "./assets/";
const currentPage = location.pathname.split("/").pop();

for (const group of navigationGroups) {
  const dropdown = document.createElement("details");
  dropdown.className = "nav-dropdown";

  const summary = document.createElement("summary");
  summary.textContent = group.label;
  dropdown.append(summary);

  const menu = document.createElement("div");
  menu.className = "nav-dropdown-menu";

  for (const [label, destination] of group.links) {
    const link = document.createElement("a");
    const [page, fragment] = destination.split("#");
    link.href = `${assetPrefix}${destination}`;
    link.textContent = label;

    if (page === currentPage) {
      if (fragment) {
        link.setAttribute("aria-current", "location");
      } else {
        link.setAttribute("aria-current", "page");
      }
    }

    menu.append(link);
  }

  dropdown.append(menu);
  navRoot.append(dropdown);
}

navRoot.addEventListener("toggle", (event) => {
  const openedDropdown = event.target;
  if (!(openedDropdown instanceof HTMLDetailsElement) || !openedDropdown.open) {
    return;
  }

  for (const dropdown of navRoot.querySelectorAll(".nav-dropdown[open]")) {
    if (dropdown !== openedDropdown) {
      dropdown.open = false;
    }
  }
}, true);
