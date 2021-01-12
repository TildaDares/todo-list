(()=>{"use strict";var e={319:(e,t,n)=>{n.d(t,{m:()=>p});const r=e=>{e.preventDefault();const t=function(e,t){const n=p();return n.push({name:e,description:t,lists:[]}),localStorage.setItem("allProjects",JSON.stringify(n)),{name:e,description:t}}(document.querySelector(".new-proj-name").value,document.querySelector(".new-proj-desc").value);u.addNewProjectToUI(t),$("#newProj").modal("hide")},o=()=>{if(!confirm("Are you sure you want to delete this project?"))return;const e=u.getActiveProject().projectIndex;let t=p();t.splice(e,1),localStorage.setItem("allProjects",JSON.stringify(t)),u.removeProjectFromUI()},a=()=>{const e=u.getActiveProject().activeProject.name,t=u.getActiveProject().activeProject.description;document.querySelector(".edit-proj-name").value=e,document.querySelector(".edit-proj-desc").value=t},c=e=>{e.preventDefault();const t=u.getActiveProject().projectIndex,n=u.getActiveProject().activeProjectElem;let r=p();r[t].name=document.querySelector(".edit-proj-name").value,r[t].description=document.querySelector(".edit-proj-desc").value,n.textContent=r[t].name,localStorage.setItem("allProjects",JSON.stringify(r)),n.click(),$("#editProj").modal("hide")},l=(()=>{const e=(e,r)=>{const a=document.createElement("form"),c=document.createElement("label"),l=document.createElement("input"),d=document.createElement("label"),i=document.createElement("textarea"),s=document.createElement("div");return l.className="form-control mb-2 edit-task-name",a.className="todo-form",a.id=`form${r}`,a.action="index.html",l.id=`name${r}`,l.value=e.name,l.maxlength="20",l.type="text",l.name="name",l.required="true",i.className="form-control mb-2 edit-task-desc",i.id=`description${r}`,i.value=e.description,i.maxlength="150",i.rows="3",i.name="description",c.textContent="Task Name",d.textContent="Task Description",s.className="form-row justify-content-between align-items-center",c.for=`name${r}`,d.for=`description${r}`,a.appendChild(c),a.appendChild(l),a.appendChild(d),a.appendChild(i),a.appendChild(s),a.appendChild(o()),s.appendChild(t(e.date,r)),s.appendChild(n(e.priority,r)),a},t=(e,t)=>{const n=document.createElement("div"),r=document.createElement("label"),o=document.createElement("input");return n.className="col-auto my-1",r.for=`date${t}`,r.textContent="Due Date",o.className="form-control edit-task-date",o.id=`date${t}`,o.value=e,o.type="date",o.name="date",o.required="true",n.appendChild(r),n.appendChild(o),n},n=(e,t)=>{const n=document.createElement("div"),o=document.createElement("label"),a=document.createElement("select"),c=document.createElement("option"),l=document.createElement("option"),d=document.createElement("option"),i=document.createElement("option");return n.className="col-auto my-1",o.for=`priority${t}`,o.textContent="Priority Level",a.className="custom-select mr-sm-2 edit-task-pri",a.value=e,a.id=`priority${t}`,c.value="critical",c.textContent="Critical",l.textContent="High",l.value="high",d.textContent="Medium",d.value="medium",i.textContent="Low",i.value="low",n.appendChild(o),n.appendChild(a),a.appendChild(c),a.appendChild(l),a.appendChild(d),a.appendChild(i),r(a,e),n},r=(e,t)=>{for(let n=0;n<e.options.length;n++)e.options[n].value===t&&(e.options[n].selected="true")},o=()=>{const e=document.createElement("div"),t=document.createElement("button");return e.className="form-footer float-right mt-3",t.className="btn bg-purple text-white edit-task-submit submit",t.type="button",t.textContent="Save",e.appendChild(t),e};return{createCard:(t,n)=>{const r=document.querySelector(".accordion"),o=document.createElement("div");o.className="card shadow mb-4",r.appendChild(o),o.appendChild(((e,t)=>{const n=document.createElement("div"),r=document.createElement("h2"),o=document.createElement("div"),a=document.createElement("input"),c=document.createElement("button"),l=document.createElement("button"),d=document.createElement("i");return n.className=`card-header shadow pt-0 ${e.priority} d-flex justify-content-between align-items-baseline`,r.className="mb-0 d-flex align-items-baseline",o.className="form-check mr-1",a.className="form-check-input position-static task-complete-checkbox",c.className="btn btn-block text-left px-0 w-auto task-title-btn",l.className="remove-btn task-del-btn",d.className="far fa-trash-alt",c.textContent=e.name,a.type="checkbox",a.id=`checkbox${t}`,l.id=`del${t}`,a.setAttribute="checkbox",n.id=`heading${t}`,c.type="button",c.setAttribute("data-toggle","collapse"),c.setAttribute("data-target",`#collapse${t}`),c.setAttribute("aria-expanded","true"),c.setAttribute("aria-controls",`collapse${t}`),o.appendChild(a),r.appendChild(o),r.appendChild(c),l.appendChild(d),n.appendChild(r),n.appendChild(l),n})(t,n)),o.appendChild(((t,n)=>{const r=document.createElement("div"),o=document.createElement("div");return r.className="collapse",o.className=`card-body ${t.priority}`,r.id=`collapse${n}`,r.setAttribute("data-parent","#accordionExample"),r.setAttribute("aria-labelledby",`heading${n}`),r.appendChild(o),o.appendChild(e(t,n)),r})(t,n)),(e=>{document.querySelector(`#del${e}`).addEventListener("click",i)})(n)}}})(),d=e=>{e.preventDefault();const t=document.querySelector(".new-task-name").value,n=document.querySelector(".new-task-desc").value,r=document.querySelector(".new-task-pri").value,o=document.querySelector(".new-task-date").value;$("#newTask").modal("hide");const a=p(),c=function(e,t,n,r,o){return{name:e,description:t,priority:n,dueDate:r,completed:!1}}(t,n,r,o),d=u.getActiveProject().projectIndex;a[d].lists.push(c),localStorage.setItem("allProjects",JSON.stringify(a)),l.createCard(c,p()[d].lists.length-1)},i=e=>{e.preventDefault();const t=s(e.target.parentNode.parentNode.parentNode),n=u.getActiveProject().projectIndex,r=p();r[n].lists.splice(t,1),localStorage.setItem("allProjects",JSON.stringify(r)),document.querySelector("#accordionExample").removeChild(e.target.parentNode.parentNode.parentNode)},s=e=>{const t=document.querySelector("#accordionExample");return Array.from(t.children).indexOf(e)},m=(()=>{const e=document.querySelector("#edit-proj-form"),t=document.querySelector(".proj-del-btn"),n=document.querySelector("#new-task-form");return{addListeners:()=>{e.addEventListener("submit",c),t.addEventListener("click",o),n.addEventListener("submit",d)},removeListeners:()=>{e.removeEventListener("submit",c),t.removeEventListener("click",o),n.removeEventListener("submit",d)}}})(),u=(()=>{const e=document.querySelector(".hamitems");let t,n,r,o=document.querySelector(".proj-btns"),a=document.querySelector(".new-task-btn"),c=document.querySelector(".proj-name"),d=document.querySelector(".proj-desc");const i=t=>{e.firstElementChild&&s();let n=document.createElement("li"),r=document.createElement("button");return n.appendChild(r),e.append(n),r.className="remove-btn",r.textContent=t.name,r.addEventListener("click",u),r},s=()=>{let t=document.createElement("hr");t.className="solid",e.append(t)},u=e=>{n&&n.classList.remove("project-active"),r=v(e.target.parentNode),t=p()[r],n=e.target,e.target.classList.add("project-active"),o.style.display="block",a.style.display="block",c.textContent=t.name,d.textContent=t.description,(()=>{for(let e=0;e<t.lists.length;e++)l.createCard(t.lists[e],e)})(),m.addListeners()},v=t=>Array.from(e.children).indexOf(t)/2;return{addAllProjectsToUI:()=>{let e=p();for(let t=0;t<e.length;t++)i(e[t])},addNewProjectToUI:e=>{i(e).click()},getActiveProject:()=>({projectIndex:r,activeProjectElem:n,activeProject:t}),removeProjectFromUI:()=>{let t=(()=>{let t;return n.parentNode.previousElementSibling?(e.removeChild(n.parentNode.previousElementSibling),t=n.parentNode.previousElementSibling):n.parentNode.nextElementSibling&&(e.removeChild(n.parentNode.nextElementSibling),t=n.parentNode.nextElementSibling),t})();o.style.display="none",a.style.display="none",e.removeChild(n.parentNode),t?t.firstElementChild.click():(c.textContent="",d.textContent=""),m.removeListeners()}}})();function p(){return JSON.parse(localStorage.getItem("allProjects")||"[]")}!function(){(function(){const e=document.querySelector("#hamburgers");e.addEventListener("change",(function(){const t=document.querySelector(".hamitems-div");e.checked?(t.classList.add("active"),t.classList.remove("hidden")):(t.classList.add("hidden"),t.classList.remove("active"))}))})(),document.querySelector("#new-proj-form").addEventListener("submit",r),$("#editProj").on("shown.bs.modal",a),u.addAllProjectsToUI();let e=document.querySelector(".hamitems").firstElementChild;e&&e.firstElementChild.click()}()}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(319)})();