# page-fetcher

##Functionality
  * Take two arguments from node shell. First one is valid URL and other one is path and file name where to write html body
  * Befor that it check:
    ** if the local file path given already exists
    ** if the local file path given is invalid (if so it ask if to re-write it)
    ** if the given URL results in an error or non-200 result
