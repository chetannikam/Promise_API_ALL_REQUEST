function get () {
  let myPromise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    console.log(xhr)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    xhr.onload = function () {
      let html = ''
      if (xhr.status >= 200 && xhr.status <= 210) resolve(this.response)
      else reject(this.response)
    }
    xhr.send()
  })
  myPromise.then(
    msg => {
      let obj = JSON.parse(msg)
      let html = ''
      for (let item in obj) {
        console.log(item)
        html += `<ul><li>${obj[item]['id']}</li>
          <li>${obj[item]['title']}</li>
          <li>${obj[item]['body']}</li>
          </ul><hr>`
      }
      document.getElementById('data').innerHTML = html
    },

    err => {
      alert('Some Error Occured' + err)
    }
  )
}
function post () {
  let myPromise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')
    const body = JSON.stringify({
      title: 'Hello Dummy',
      userID: '12',
      body: 'Dummy Body'
    })
    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8')

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status <= 210) resolve(this.response)
      else reject(this.response)
    }
    xhr.send(body)
  })
  myPromise.then(
    msg => {
      let html = ''
      let obj = JSON.parse(msg)
      console.log(obj)
      html += `<ul><li>Title:-${obj.title}</li>
      <li>userID:-${obj['userID']}</li>
      <li>body:-${obj['body']}</li>
      <li>id:-<b>${obj['id']}</b></li>
      </ul>`
      document.getElementById('data').innerHTML = html
    },
    err => {
      alert(err)
    }
  )
}
function put () {
  let myPromise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/12')
    let body = JSON.stringify({
      title: 'Updated Title',
      body: 'Updated body',
      userId: 1
    })
    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status <= 210) resolve(this.response)
      else reject(this.response)
    }
    xhr.send(body)
  })
  myPromise.then(
    msg => {
      let html = ''
      let obj = JSON.parse(msg)
      console.log(obj)
      html += `<ul><li>title:-${obj.title}</li>
      <li>userId:-${obj['userId']}</li>
      <li>body:-${obj['body']}</li>
      <li>id:-<b>${obj['id']}</b></li>
      </ul>`
      document.getElementById('data').innerHTML = html
    },
    err => {
      alert(err)
    }
  )
}
function del () {
  let myPromise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status <= 210) resolve(this.response)
      else reject(this.response)
    }
    xhr.send()
  })
  myPromise.then(
    msg => {
      alert('Delete Successfull' + msg)
    },
    err => {
      alert('Some error while deletion:-' + err)
    }
  )
}
