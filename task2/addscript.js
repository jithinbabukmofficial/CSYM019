const url = "http://192.168.0.24:5000/api/"



document.addEventListener("DOMContentLoaded", function () {
    const addModuleBtn = document.getElementById("addModuleBtn");
    const modulesContainer = document.getElementById("modulesContainer");
    let moduleCount = 1;

    addModuleBtn.addEventListener("click", function () {
      
      const moduleGroup = document.createElement("div");
      moduleGroup.className = "form-group p-2";
      moduleGroup.id = `moduleGroup${moduleCount}`;

      const moduleNameLabel = document.createElement("label");
      moduleNameLabel.textContent = `Module ${moduleCount} Name:`;
      moduleGroup.appendChild(moduleNameLabel);

      const moduleNameInput = document.createElement("input");
      moduleNameInput.type = "text";
      moduleNameInput.className = "form-control";
      moduleNameInput.id = `moduleName${moduleCount}`;
      moduleGroup.appendChild(moduleNameInput);

      const moduleCodeLabel = document.createElement("label");
      moduleCodeLabel.textContent = `Module ${moduleCount} Code:`;
      moduleGroup.appendChild(moduleCodeLabel);

      const moduleCodeInput = document.createElement("input");
      moduleCodeInput.type = "text";
      moduleCodeInput.className = "form-control";
      moduleCodeInput.id = `moduleCode${moduleCount}`;
      moduleGroup.appendChild(moduleCodeInput);

      const moduleCreditsLabel = document.createElement("label");
      moduleCreditsLabel.textContent = `Module ${moduleCount} Credits:`;
      moduleGroup.appendChild(moduleCreditsLabel);

      const moduleCreditsInput = document.createElement("input");
      moduleCreditsInput.type = "text";
      moduleCreditsInput.className = "form-control";
      moduleCreditsInput.id = `moduleCredits${moduleCount}`;
      moduleGroup.appendChild(moduleCreditsInput);

      modulesContainer.appendChild(moduleGroup);

      moduleCount++;
    });

    document.getElementById("courseForm").addEventListener("submit", function (e) {
      e.preventDefault();


      let formdat = new FormData();
      formdat.append('title',document.getElementById("title").value)
      formdat.append('overview',document.getElementById("overview").value)
      formdat.append('highlights',document.getElementById("highlights").value)
      formdat.append('funding',document.getElementById("overview").value)
      formdat.append('requirements',document.getElementById("entryRequirements").value)
      formdat.append('faq',document.getElementById("faq").value)
      formdat.append('fee',document.getElementById("fee").value)

      // module data
      for (let i = 1; i < moduleCount; i++) {
        const moduleName = document.getElementById(`moduleName${i}`).value;
        const moduleCode = document.getElementById(`moduleCode${i}`).value;
        const moduleCredits = document.getElementById(`moduleCredits${i}`).value;
        formData.modules.push({
          name: moduleName,
          code: moduleCode,
          credits: moduleCredits
        });
      }
      formdat.append('modules',JSON.stringify(formData.modules))

      


      axios.post(`${url}/course`, formdat).then(res => {
        console.log(res.data)
    })


      console.log(formData);
    });
  });