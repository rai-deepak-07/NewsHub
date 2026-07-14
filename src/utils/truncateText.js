const truncateText = (text, length = 120) => {
  if (!text) return "";

  return text.length > length
    ? `${text.slice(0, length)}...`
    : text;
};

export default truncateText;