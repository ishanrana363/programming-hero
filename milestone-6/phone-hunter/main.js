const phoneData = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  if (phones.length === 0) {
    alert(`${searchText} not found `);
  }
  displayData(phones);
};

const displayData = (data) => {
  // 1 first step
  let phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = " ";

  const btnContainer = document.getElementById("btn-container");
  if (data.length > 8) {
    btnContainer.classList.remove("hidden");
  } else {
    btnContainer.classList.add("hidden");
  }

  data = data.slice(0, 8);

  data.forEach((item) => {
    console.log(item);
    // 2nd step create div
    let div = document.createElement("div");
    div.classList = `card bg-base-100  shadow-xl mt-10 py-6 border `;
    div.innerHTML = `
        <figure>
              <img
                src="${item.image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
               <h2 class="card-title">Brand name : ${item.brand}</h2>
               <h2 class="card-title" > Phone name : ${item.phone_name} </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div onclick = "showDetails('${item.slug}')"  class="card-actions justify-center">
                <button class="btn btn-primary">Show Details</button>
              </div>
            </div>

    `;

    phoneContainer.appendChild(div);
    loddderFun(false)
  });
};

const handleSearch = () => {
  loddderFun(true);
  const inputValue = document.getElementById("input-value");
  const searchValue = inputValue.value;
  phoneData(searchValue);
};

function loddderFun(isLodding) {
  const loddingSection = document.getElementById("lodder-section");
  if (isLodding) {
    loddingSection.classList.remove("hidden");
  }else{
    loddingSection.classList.add("hidden");
  }
}

const showDetails = async (slug) =>{
    console.log(slug)
    let res = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    let data = await res.json();
    showPhoneDetails(data.data)
    my_modal_5.showModal()
    console.log(data)
}

const showPhoneDetails = (item) =>{
  const brandName = document.getElementById("brand-name");
  brandName.innerHTML = item.name
  const modalDetails = document.getElementById("details-container");
  modalDetails.innerHTML = `
    <img src = "${item?.image}" />
    <h1> ${item?.mainFeatures?.chipSet} </h1>
    <h1> ${item?.mainFeatures?.displaySize} </h1>
    <h1> ${item?.mainFeatures?.memory} </h1>
  `
}