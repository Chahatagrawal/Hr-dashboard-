document.addEventListener("DOMContentLoaded", function() {
	const searchCandidate = document.getElementById("data-search-search-candidate");
	const useAI = document.getElementById("data-search-use-ai");
	const searchCandidateSection = document.querySelector(".data-search-search-candidate-section");
	const aiSection = document.querySelector(".data-search-ai-section");

	searchCandidateSection.style.display = "block";
	searchCandidate.classList.add("active");

	searchCandidate.addEventListener("click", function() {
		searchCandidateSection.style.display = "block";
		aiSection.style.display = "none";
		searchCandidate.classList.add("active");
		useAI.classList.remove("active")
		blueBox.style.left = "0";
	});

	useAI.addEventListener("click", function() {
		searchCandidateSection.style.display = "none";
		aiSection.style.display = "block";
		useAI.classList.add("active")
		searchCandidate.classList.remove("active");
		blueBox .style.left = `${index * 150 + 10}px`;
    });
  });

  
const radios = document.querySelectorAll('input[type="radio"]');
const sections = document.querySelectorAll('.data-search-section-form > div');

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    sections.forEach((section) => {
      section.style.display = 'none';
    });
    switch (radio.value) {
      case 'Freshers':
        document.getElementById('data-search-sectionform1').style.display = 'block';
        break;
      case 'Experienced':
        document.getElementById('data-search-sectionform2').style.display = 'block';
        break;
      case 'Any':
        document.getElementById('data-search-sectionform3').style.display = 'block';
        break;
    }
  });
});

const minExpSelect = document.getElementById('min-exp');
const maxExpSelect = document.getElementById('max-exp');

minExpSelect.addEventListener('change', () => {
  const minValue = parseInt(minExpSelect.value);
  const maxOptions = maxExpSelect.options;
  for (let i = 0; i < maxOptions.length; i++) {
    if (parseInt(maxOptions[i].value) < minValue) {
      maxOptions[i].disabled = true;
    } else {
      maxOptions[i].disabled = false;
    }
  }
});

maxExpSelect.addEventListener('change', () => {
  const maxValue = parseInt(maxExpSelect.value);
  const minOptions = minExpSelect.options;
  for (let i = 0; i < minOptions.length; i++) {
    if (parseInt(minOptions[i].value) > maxValue) {
      minOptions[i].disabled = true;
    } else {
      minOptions[i].disabled = false;
    }
  }
});

const minSalSelect = document.getElementById('min-sal');
const maxSalSelect = document.getElementById('max-sal');

minSalSelect.addEventListener('change', () => {
  const minValue = parseInt(minSalSelect.value);
  const maxOptions = maxSalSelect.options;
  for (let i = 0; i < maxOptions.length; i++) {
    if (parseInt(maxOptions[i].value) < minValue) {
      maxOptions[i].disabled = true;
    } else {
      maxOptions[i].disabled = false;
    }
  }
});

maxSalSelect.addEventListener('change', () => {
  const maxValue = parseInt(maxSalSelect.value);
  const minOptions = minSalSelect.options;
  for (let i = 0; i < minOptions.length; i++) {
    if (parseInt(minOptions[i].value) > maxValue) {
      minOptions[i].disabled = true;
    } else {
      minOptions[i].disabled = false;
    }
  }
});

const miniExpSelect = document.getElementById('mini-exp');
const maxiExpSelect = document.getElementById('maxi-exp');

miniExpSelect.addEventListener('change', () => {
  const minValue = parseInt(miniExpSelect.value);
  const maxOptions = maxiExpSelect.options;
  for (let i = 0; i < maxOptions.length; i++) {
    if (parseInt(maxOptions[i].value) < minValue) {
      maxOptions[i].disabled = true;
    } else {
      maxOptions[i].disabled = false;
    }
  }
});

maxiExpSelect.addEventListener('change', () => {
  const maxValue = parseInt(maxiExpSelect.value);
  const minOptions = miniExpSelect.options;
  for (let i = 0; i < minOptions.length; i++) {
    if (parseInt(minOptions[i].value) > maxValue) {
      minOptions[i].disabled = true;
    } else {
      minOptions[i].disabled = false;
    }
  }
});

const miniSalSelect = document.getElementById('mini-sal');
const maxiSalSelect = document.getElementById('maxi-sal');

miniSalSelect.addEventListener('change', () => {
  const minValue = parseInt(miniSalSelect.value);
  const maxOptions = maxiSalSelect.options;
  for (let i = 0; i < maxOptions.length; i++) {
    if (parseInt(maxOptions[i].value) < minValue) {
      maxOptions[i].disabled = true;
    } else {
      maxOptions[i].disabled = false;
    }
  }
});

maxiSalSelect.addEventListener('change', () => {
  const maxValue = parseInt(maxiSalSelect.value);
  const minOptions = miniSalSelect.options;
  for (let i = 0; i < minOptions.length; i++) {
    if (parseInt(minOptions[i].value) > maxValue) {
      minOptions[i].disabled = true;
    } else {
      minOptions[i].disabled = false;
    }
  }
});

const question = document.getElementById('data-search-question');
const answer = document.getElementById('data-search-answer');
const arrowIcon = document.querySelector('.arrow-icon');

question.addEventListener('click', () => {
  answer.classList.toggle('show');
  arrowIcon.classList.toggle('rotate');
});