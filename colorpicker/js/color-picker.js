class ColorRandomPicker {
  constructor() {
    this.used = 0;
    this.colors = [
      "#FFCDD2", "#E57373", "#F44336", "#D32F2F", // red
      "#A1887F", "#795548", // brow
      "#F06292", "#E91E63", "#880E4F", // pink
      "#B0BEC5", // blue gray
      "#E1BEE7", "#BA68C8", "#9C27B0",  // purple
      "#B39DDB", // deep purple
      "#9FA8DA", // Indigo
      "#BBDEFB", "#64B5F6", "#2196F3", // Blue
      "#80DEEA", "#00ACC1", // Cyan
      "#C8E6C9", "#81C784", "#4CAF50", "#C5E1A5", // green
      "#E0E0E0", "#9E9E9E", // gray
      "#FFF9C4", "#FFF176", "#FFEB3B", // yellow
      "#FFE0B2", "#FFB74D", "#FF9800" // orange
    ];
  }

  pick() {
    const max = this.colors.length - 1;
    if(this.used == (Math.pow(2, max) -1)) {
      this.used = 0;
    }
  
    let chosen = Math.floor((Math.random() * max));
    while((this.used & (1 << chosen)) > 0) {
      chosen++;
      if(chosen >= max) {
        chosen = 0;
      }
    }
    this.used = this.used + (1 << chosen);
    return this.colors[chosen];  
  }
}

const colorPicker = new ColorRandomPicker(); 