export let config = { };

export function sayHi() {
  alert(`Ready to serve, ${config.user}!`);
}

console.log("admin: " + config.user);