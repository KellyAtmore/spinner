let text = '\r| \r/ \r- \r\\ \r| \r/ \r- \r\\ \r|  ';
for (let i = 0; i < text.length; i++) {
  setTimeout(() => {
    process.stdout.write(text[i]);
    if (i === text.length - 1) {
      process.stdout.write('\n');
    }
  }, i * 50);
}
