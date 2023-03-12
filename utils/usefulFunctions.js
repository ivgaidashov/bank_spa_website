export function dynamicNavbar(allLinks, width, breakpoint) {
    let mainLinks = []
    let hiddenLinks = []

    width >= 1536 && allLinks.map((link, index)=>{
        if (index+1 <= breakpoint) {
            mainLinks.push(link)
        }
        else {
            hiddenLinks.push(link)
        }
      })

      width >= 1280 && width < 1536 &&  allLinks.map((link, index)=>{
        if (index+1 <= breakpoint-1) {
            mainLinks.push(link)
        }
        else {
            hiddenLinks.push(link)
        }
      })

      width >= 768 && width < 1280 && allLinks.map((link, index)=>{
        if (index+1 <= breakpoint-2) {
            mainLinks.push(link)
        }
        else {
            hiddenLinks.push(link)
        }
      })

      width <768 && allLinks.map((link, index)=>{
        if (index+1 <= breakpoint-3) {
            mainLinks.push(link)
        }
        else {
            hiddenLinks.push(link)
        }
      })

      return [mainLinks, hiddenLinks]
  }

  export function currentDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '.' + mm + '.' + yyyy;
    return formattedToday
  }

  export function getRandomFloat(min, max) {
    const str = (Math.random() * (max - min) + min).toFixed(2);
  
    return parseFloat(str);
  }