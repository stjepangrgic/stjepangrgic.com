// exports.onCreatePages = function() {
//   for (const page of this.pages) {
//     if (page.layout === 'project') {
//       page.allProjects = [...this.pages]
//         .filter(page => page.project)
//         .map(page => ({
//           // Select what properties you need
//           title: page.title,
//           description: page.title
//         }))
//     }
//   }
// }
// exports.onCreatePages = function() {
//   for (const page of this.pages) {
//     if (page.layout === 'project') {
//       // page.allPostTitles = [...this.pages]
//       //   .filter(page.type === 'post')
//       //   .map(page => page.title)
//     }
//   }
// }

// exports.onCreatePage = function (page) {
//   // page.foo = true
//   // page.allpages = page.attributes
//   // console.log(page.attributes)
//   // console.log(typeof(page))

//   // let pageArray = Object.values(page.attributes)

//   // console.log(typeof(page.attributes.layout))
//   // let projects = page.attributes.filter(function(p) {
//   // 	// console.log (p.layout == "project")
//   // 	// console.log(typeof(page))
//   // })
//   // console.log(pageArray)
// }

// this.pages.onCreatePages({
//   allPages: getAllPages()
// })

// exports.onCreatePages = function () {
//   console.log(this.pages.attributes)
// }

// var marvelHeroes =  heroes.filter(function(hero) {
// 	return hero.franchise == “Marvel”;
// });