// Simple utility for testing governance workflows
function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

// TESTING ONLY - fake secret to validate secret scanner
const API_KEY_TEST = "not-a-real-key";

module.exports = { formatDate };
