const btns = document.querySelectorAll('button')
const img = document.querySelector('.img')

const mac = {
    gray :"https://s3-alpha-sig.figma.com/img/9581/edda/696f087203dbc41896f9d180cf9d0435?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kji9BlZiJmNXcs5ocvCuJBYqGmyBELQdwg0PuCeGYxM~1499sYQcNFXDQdPOAPqqBBrY46XGxtC4ZKMwKxkNO5GLmknqm6DOA6E8UlO0WZNqGVmX6rYuGnbbnU6are-6h9kiJAxGxtHTkFcsMrOMGYyrWeR4EMQuVUqCALO90pW6Z4wPm5rr5DFvmG7NEpcRvqVH3R~BNPlv-nxQZrOJVsJUfs56m~JvLK7fwo5uB1x~CGCJWOto1KMk6IYAL7HWljZBnM3tNqePu9cN~co2QARSo-JpkataaQxGJkHoiCYee41uAdrVmCNMPSlQUXkQFJIdwxBwQ5s2xehhJFlJDQ__",
    white : "https://s3-alpha-sig.figma.com/img/9f71/2fbe/77eca8b2420bb1d5e95728168d6e6c92?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdUsEBFHPYlQxiFII9dxAHcI4nBxWgrzJW1D6Z3BaWCw3Hx3MbD11YA1ol-hkSHYsM5x8OEJmZTZgTzUUuyyYsrgpxUTsxy37MSfJIYK2Gxsbh4G1dQYdVHgZHKoPkeJueAJun5-Gsmha3OcSn2vlI3N9HCs~GJBAcT2bKkhpiXu8u0GywGcqsbwoyu1xAPRvF65DmBYJtRSnKKJR66Cf9UoOXU~z3ur76-ZF3ICrcCNRGca2FKyTUthTpn1unRVar2js6LU4wz5Z0EPTn8tnCZxWc1NwyjmcwFa3PtNHM-DZrp-UA5CrY59JJYbADjhVjuYdL4s8o17IOQTNYUeog__"
}
 btns.forEach(btn => {
    btn.onclick =() => {
        const key = btn.getAttribute('data-col')
        img.style.backgroundImage = `url(${mac[key]})`

    }
 });
 btn.onclick = () => {
    btn.style.toggle('gray')
  }