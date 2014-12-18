var searcher = new google.search.customSearchControl.getImageSearcher();
searcher.setRestriction(
  google.search.customSearchControl.getImageSearcher.RESTRICT_FILETYPE,
  google.search.customSearchControl.getImageSearcher.FILETYPE_PNG
);

var searcher = new google.search.customSearchControl.getImageSearcher();
searcher.setRestriction(
  google.search.customSearchControl.getImageSearcher.RESTRICT_FILETYPE,
  google.search.customSearchControl.getImageSearcher.FILETYPE_JPG
);

var searcher = new google.search.customSearchControl.getImageSearcher();
searcher.setRestriction(
  google.search.customSearchControl.getImageSearcher.RESTRICT_IMAGESIZE,
  google.search.customSearchControl.getImageSearcher.IMAGESIZE_SMALL);

// google.search.customSearchControl.getImageSearcher.IMAGESIZE_SMALL returns small images, icons.
// google.search.customSearchControl.getImageSearcher.IMAGESIZE_MEDIUM returns medium-sized images.
// google.search.customSearchControl.getImageSearcher.IMAGESIZE_LARGE returns large images.
// google.search.customSearchControl.getImageSearcher.IMAGESIZE_EXTRA_LARGE returns extra-large images