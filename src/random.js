export default function random(min, max){
    return min + Math.ceil(Math.random() * (max - min));
  }