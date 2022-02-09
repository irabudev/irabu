/*
 *   Wavify
 *   JavaScript library to make some nice waves
 *   by peacepostman @ crezeo
 */

function wavify(wave_element, options) {
  if (typeof options === "undefined") options = {};

  //  Options
  //
  //
  var extend = function () {
    // Variables
    const extended = {};
    let deep = false;
    let i = 0;
    const {length} = arguments;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    const merge = function (obj) {
      for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties
          if (
            deep &&
            Object.prototype.toString.call(obj[prop]) === "[object Object]"
          ) {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
      const obj = arguments[i];
      merge(obj);
    }

    return extended;
  };
  let settings = extend(
    {},
    {
      container: options.container ? options.container : "body",
      // Height of wave
      height: 200,
      // Amplitude of wave
      amplitude: 100,
      // Animation speed
      speed: 0.15,
      // Total number of articulation in wave
      bones: 3,
      // Color
      color: "rgba(255,255,255, 0.20)",
    },
    options
  );

  const wave = wave_element;
    let {width} = document
      .querySelector(settings.container)
      .getBoundingClientRect();
    let {height} = document
      .querySelector(settings.container)
      .getBoundingClientRect();
    let points = [];
    let lastUpdate;
    let totalTime = 0;
    let animationInstance = false;
    let tweenMaxInstance = false;

  //  Allow new settings, avoid setting new container for logic purpose please :)
  //
  function rebuilSettings(params) {
    settings = { ...settings, ...params};
  }

  function drawPoints(factor) {
    const points = [];

    for (let i = 0; i <= settings.bones; i++) {
      const x = (i / settings.bones) * width;
      const sinSeed =
        (factor + (i + (i % settings.bones))) * settings.speed * 100;
      const sinHeight = Math.sin(sinSeed / 100) * settings.amplitude;
      const yPos = Math.sin(sinSeed / 100) * sinHeight + settings.height;
      points.push({ x, y: yPos });
    }

    return points;
  }

  function drawPath(points) {
    let SVGString = `M ${  points[0].x  } ${  points[0].y}`;

    const cp0 = {
      x: (points[1].x - points[0].x) / 2,
      y: points[1].y - points[0].y + points[0].y + (points[1].y - points[0].y),
    };

    SVGString +=
      ` C ${ 
      cp0.x 
      } ${ 
      cp0.y 
      } ${ 
      cp0.x 
      } ${ 
      cp0.y 
      } ${ 
      points[1].x 
      } ${ 
      points[1].y}`;

    let prevCp = cp0;
    let inverted = -1;

    for (let i = 1; i < points.length - 1; i++) {
      const cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
      const cp1 = {
        x: points[i].x - prevCp.x + points[i].x,
        y: points[i].y - prevCp.y + points[i].y,
      };

      SVGString +=
        ` C ${ 
        cp1.x 
        } ${ 
        cp1.y 
        } ${ 
        cp1.x 
        } ${ 
        cp1.y 
        } ${ 
        points[i + 1].x 
        } ${ 
        points[i + 1].y}`;
      prevCp = cp1;
      inverted = -inverted;
    }

    SVGString += ` L ${  width  } ${  height}`;
    SVGString += ` L 0 ${  height  } Z`;
    return SVGString;
  }

  //  Draw function
  //
  //
  function draw() {
    const now = window.Date.now();

    if (lastUpdate) {
      const elapsed = (now - lastUpdate) / 1000;
      lastUpdate = now;

      totalTime += elapsed;

      const factor = totalTime * Math.PI;
      tweenMaxInstance = TweenMax.to(wave, settings.speed, {
        attr: {
          d: drawPath(drawPoints(factor)),
        },
        ease: Power1.easeInOut,
      });
    } else {
      lastUpdate = now;
    }

    animationInstance = requestAnimationFrame(draw);
  }

  //  Pure js debounce function to optimize resize method
  //
  //
  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this;
        const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }

  //  Redraw for resize with debounce
  //
  const redraw = debounce(function () {
    pause();
    points = [];
    totalTime = 0;
    width = document
      .querySelector(settings.container)
      .getBoundingClientRect().width;
    height = document
      .querySelector(settings.container)
      .getBoundingClientRect().height;
    lastUpdate = false;
    play();
  }, 250);

  function boot() {
    if (!animationInstance) {
      tweenMaxInstance = TweenMax.set(wave, { attr: { fill: settings.color } });
      play();
      window.addEventListener("resize", redraw);
    }
  }

  function reboot(options) {
    kill();
    if (typeof options !== undefined) {
      rebuilSettings(options);
    }
    tweenMaxInstance = TweenMax.set(wave, { attr: { fill: settings.color } });
    play();
    window.addEventListener("resize", redraw);
  }

  function play() {
    if (!animationInstance) {
      animationInstance = requestAnimationFrame(draw);
    }
  }

  function pause() {
    if (animationInstance) {
      cancelAnimationFrame(animationInstance);
      animationInstance = false;
    }
  }

  function updateColor(options) {
    if (typeof options.timing === undefined) {
      options.timing = 1;
    }
    if (typeof options.color === undefined) {
      options.color = settings.color;
    }
    tweenMaxInstance = TweenMax.to(wave, parseInt(options.timing), {
      attr: { fill: options.color },
      onComplete () {
        if (
          typeof options.onComplete !== undefined &&
          {}.toString.call(options.onComplete) === "[object Function]"
        ) {
          options.onComplete();
        }
      },
    });
  }

  function kill() {
    if (animationInstance) {
      pause();
      tweenMaxInstance.kill();
      tweenMaxInstance = TweenMax.set(wave, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 0,
        clearProps: "all",
        attr: {
          d: "M0,0",
          fill: "",
        },
      });
      window.removeEventListener("resize", redraw);
      animationInstance = false;
    }
  }

  //  Boot Wavify
  //
  boot();

  return {
    reboot,
    play,
    pause,
    kill,
    updateColor,
  };
}
