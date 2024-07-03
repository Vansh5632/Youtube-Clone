

const parseData = async (items) => {
  return items.map((item) => ({
    id: item.uri.split('/').pop(),
    title: item.name,
    description: item.description,
    thumbnailUrl: item.pictures?.sizes[0]?.link, // Adjust as necessary to get the desired size
    videoUrl: item.link,
  }));
};

export default parseData;