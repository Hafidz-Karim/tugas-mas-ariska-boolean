function capitalHuruf(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  const str =
    "santri harus mempelajari ilmu agama dan menerapkannya dalam kehidupan sehari hari";
      const hurufBesar = capitalHuruf(str);
      document.write(hurufBesar);
  
  
      function capitalHuruf(string) {
    return string
      .replace(/^(\w)/, (match) => match.toUpperCase())
      .replace(/ilmu/g, "pengetahuan");
  }
  const string =
    "santri harus mempelajari ilmu agama dan menerapkannya dalam kehidupan sehari hari";
  const angkaBesar = capitalHuruf(str);
  document.write(angkaBesar);
