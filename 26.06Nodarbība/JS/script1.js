console.log(location.search);

urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
console.log(`${key}:${value}`);
}


console.log(navigator.userAgent);