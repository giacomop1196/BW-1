let correctAnswer = sessionStorage.getItem(`correctAnswerCount`); // Collettiamo il NUMERO di domande Corrette
let incorrectAnswer = sessionStorage.getItem(`incorrectAnswerCount`); // Collettiamo il NUMERO di domande Sbagliate
let questionLength = sessionStorage.getItem(`questionLength`); // Collettiamo il NUMERO totale di domande poste dal quiz

//FUNCTION CONFETTI
("use strict");
const startConfetti = function () {
  // Globals
  var random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    PI2 = PI * 2,
    timer = undefined,
    frame = undefined,
    confetti = [];

  var particles = 10,
    spread = 40,
    sizeMin = 3,
    sizeMax = 12 - sizeMin,
    eccentricity = 10,
    deviation = 100,
    dxThetaMin = -0.1,
    dxThetaMax = -dxThetaMin - dxThetaMin,
    dyMin = 0.13,
    dyMax = 0.18,
    dThetaMin = 0.4,
    dThetaMax = 0.7 - dThetaMin;

  var colorThemes = [
    function () {
      return color(
        (200 * random()) | 0,
        (200 * random()) | 0,
        (200 * random()) | 0
      );
    },
    function () {
      var black = (200 * random()) | 0;
      return color(200, black, black);
    },
    function () {
      var black = (200 * random()) | 0;
      return color(black, 200, black);
    },
    function () {
      var black = (200 * random()) | 0;
      return color(black, black, 200);
    },
    function () {
      return color(200, 100, (200 * random()) | 0);
    },
    function () {
      return color((200 * random()) | 0, 200, 200);
    },
    function () {
      var black = (256 * random()) | 0;
      return color(black, black, black);
    },
    function () {
      return colorThemes[random() < 0.5 ? 1 : 2]();
    },
    function () {
      return colorThemes[random() < 0.5 ? 3 : 5]();
    },
    function () {
      return colorThemes[random() < 0.5 ? 2 : 4]();
    },
  ];
  function color(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return ((1 - cos(PI * t)) / 2) * (b - a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity,
    radius2 = radius + radius;
  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius],
      measure = 1 - radius2,
      spline = [0, 1];
    while (measure) {
      var dart = measure * random(),
        i,
        l,
        interval,
        a,
        b,
        c,
        d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        (a = domain[i]), (b = domain[i + 1]), (interval = b - a);
        if (dart < measure + interval) {
          spline.push((dart += a - measure));
          break;
        }
        measure += interval;
      }
      (c = dart - radius), (d = dart + radius);

      // Update the domain
      for (i = domain.length - 1; i > 0; i -= 2) {
        (l = i - 1), (a = domain[l]), (b = domain[i]);
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2);
        // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }

    return spline.sort();
  }

  // Create the overarching container
  var container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "0";
  container.style.overflow = "visible";
  container.style.zIndex = "9999";

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement("div");
    this.inner = document.createElement("div");
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style,
      innerStyle = this.inner.style;
    outerStyle.position = "absolute";
    outerStyle.width = sizeMin + sizeMax * random() + "px";
    outerStyle.height = sizeMin + sizeMax * random() + "px";
    innerStyle.width = "100%";
    innerStyle.height = "100%";
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = "50px";
    outerStyle.transform = "rotate(" + 360 * random() + "deg)";
    this.axis =
      "rotate3D(" + cos(360 * random()) + "," + cos(360 * random()) + ",0,";
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + "deg)";

    this.x = window.innerWidth * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + "px";
    outerStyle.top = this.y + "px";

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = (this.frame % 7777) / 7777,
        i = 0,
        j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + "px";
      outerStyle.top = this.y + rho * sin(phi) + "px";
      innerStyle.transform = this.axis + this.theta + "deg)";
      return this.y > height + deviation;
    };
  }

  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti
      var theme = colorThemes[0],
        count = 0;
      (function addConfetto() {
        var confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
        timer = setTimeout(addConfetto, spread * random());
      })(0);

      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = window.innerHeight;

        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return (frame = requestAnimationFrame(loop));

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  poof();
};

// Da qua inizia la creazione del Chart a Ciambella (In fondo all'HTML dobbiamo caricare uno <script> preso da ChartJS)

const chartData = {
  labels: [`Wrong`, `Correct`], // Porzione di etichette `Wrong` & `Correct` sulla Ciambella
  data: [incorrectAnswer, correctAnswer], // Porzione di VALORI precedentemente collettati `Wrong` & `Correct` sulla Ciambella
};

const chart = document.getElementById(`mainChart`); // Creazione Ciambella

new Chart(chart, {
  type: "doughnut", // Tipo di Chart `doughnut`(Ciambella), `pie`(Torta), etc.
  data: {
    labels: chartData.labels, // Richiamo alle etichette da inserire nel Chart
    datasets: [
      {
        label: `Test result`,
        data: chartData.data, // Richiamo i VALORI da inserire e "spalmare" nel Chart
      },
    ],
  },
  options: {
    // opzioni Grafiche del Chart
    borderWidth: 0,
    borderRadius: 2,
    cutout: `70%`,
    hoverBorderWidth: 1,
    backgroundColor: [` #d20094`, `#00ffff`],
    plugins: {
      legend: {
        display: false, // Eliminiamo la Legenda del Chart
      },
    },
  },
});

const rightNumberQuestion = document.querySelector(
  `.doughnut-chart-exitPool-Correct`
); // Richiamiamo e appendo il box a SX della pagina Results dove colletteremo il NUMERO e la PERCETUALE di risposte GIUSTE

const startPageResultCorrect = () => {
  let resultCorrect = (correctAnswer / questionLength) * 100;
  let rightResultDisplay = document.createElement(`div`);
  rightResultDisplay.classList.add(`correct-display-results`);
  rightResultDisplay.innerHTML = `
    <p class="right-percentage">${resultCorrect.toFixed(0)} %</p>
    <p class="right-answers">${correctAnswer}/${questionLength} questions</p>`;
  rightNumberQuestion.appendChild(rightResultDisplay);
};

const wrongNumberQuestion = document.querySelector(
  `.doughnut-chart-exitPool-Wrong`
); // Richiamiamo e appendo il box a DX della pagina Results dove colletteremo il NUMERO e la PERCETUALE di risposte SBAGLIATE

const startPageResultIncorrect = () => {
  let resultIncorrect = (incorrectAnswer / questionLength) * 100;
  let wrongResultDisplay = document.createElement(`div`);
  wrongResultDisplay.classList.add(`incorrect-display-results`);
  wrongResultDisplay.innerHTML = `
    <p class="wrong-percentage">${resultIncorrect.toFixed(0)} %</p>
    <p class="wrong-answers">${incorrectAnswer}/${questionLength} questions</p>`;
  wrongNumberQuestion.appendChild(wrongResultDisplay);
};

window.onload = function () {
  // Al caricamento della pagina Result, invochiamo le funzioni di cui sopra
  startPageResultIncorrect();
  startPageResultCorrect();
};

let percentageCorrect = (correctAnswer / questionLength) * 100; // Creiamo il Testo (positivo o negativo) da far apparire al centro del Chart a fine quiz in base alla percentuale riscontrata

console.log(percentageCorrect);

const textResultMessage = () => {
  const firstText = document.querySelector(`.congrat`);
  const secondText = document.querySelector(`.passedORfail`);
  const thirdText = document.querySelector(`.final-message`);
  if (percentageCorrect >= 60) { // Se la percentuale di risposte corrette è superiore al 60%
    startConfetti(); // Invochiamo la funzione per la visualizzazione dei coriandoli
    firstText.innerText = `Congratulation!`;
    secondText.innerText = `You passed the exam.`;
    secondText.style.color = `#00ffff`;
    thirdText.innerText = `We'll send you the certificate in few minutes. Check your email
    (including promotion / spam folder)`;
  } else { // Se la percentuale di risposte corrette è inferiore al 60%
    firstText.innerText = `We're sorry :(`;
    secondText.innerText = `You did not passed the exam.`;
    secondText.style.color = `#c2128d`;
    thirdText.innerText = `We'll send you a link for a new test sheet in few minutes. Check your email
    (including promotion / spam folder)`;
  }
};

textResultMessage();
