const urlMappings: Record<string, Record<string, string>> = {
    'tr': {
      'dental-treatments': 'dis-tedavileri',
      // Diğer eşleştirmeler
    },
    'en': {
      'dis-tedavileri': 'dental-treatments',
      'dental-aesthetics': 'dental-aesthetics',
      'traitements-dentaires': 'dental-treatments',
      // Diğer eşleştirmeler
    },
    'fr': {
      'traitements-dentaires': 'dental-treatments',
      'esthétique-dentaire': 'dental-aesthetics',
      // Diğer eşleştirmeler
    },
    // Diğer diller
  };

  export default urlMappings;