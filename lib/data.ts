import {
  Book,
  Bug,
  Code,
  Cpu,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Globe,
  Layout,
  Lightbulb,
  MessageCircle,
  Palette,
  Puzzle,
  Rocket,
  Shield,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

export const supportOptions = [
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive docs",
    link: "#",
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Get support",
    link: "#",
  },
  {
    icon: GitBranch,
    title: "GitHub Issues",
    description: "Report bugs",
    link: "#",
  },
  {
    icon: Globe,
    title: "Status Page",
    description: "SynthLauncher Status",
    link: "#",
  },
];

export const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security built-in",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Very customizable UI and functions",
  },
  {
    icon: Globe,
    title: "Multiplayer",
    description: "Play with your friends",
  },
];

export const benefits = [
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Perfectly adapts to any screen size",
  },
  {
    icon: Palette,
    title: "Customizable Themes",
    description: "Easily match your brand identity",
  },
  {
    icon: Cpu,
    title: "Performance Optimized",
    description: "Blazing fast load times",
  },
];

export const stats = [
  { number: "10M+", label: "Downloads" },
  { number: "50K+", label: "Active Users" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
];

export const techStack = [
  { icon: Terminal, name: "CLI Tools" },
  { icon: GitBranch, name: "Version Control" },
  { icon: Workflow, name: "Workflows" },
  { icon: Lightbulb, name: "Smart Defaults" },
  { icon: Puzzle, name: "Plugin System" },
];

export const releases = [
  {
    version: "2.0.1",
    date: "March 15, 2024",
    type: "major",
    banner: "https://source.unsplash.com/random/1200x400?technology",
    title: "Performance Boost Update",
    description:
      "A major update focusing on performance improvements and new features.",
    highlights: [
      "50% faster rendering",
      "Reduced bundle size",
      "New component library",
      "Improved documentation",
    ],
    changes: [
      {
        type: "feature",
        icon: Sparkles,
        title: "New Component Library",
        description: "20+ new components with modern design",
      },
      {
        type: "improvement",
        icon: Zap,
        title: "Performance Optimization",
        description: "50% faster rendering and reduced bundle size",
      },
      {
        type: "bugfix",
        icon: Bug,
        title: "Critical Fixes",
        description: "Resolved memory leaks and UI inconsistencies",
      },
    ],
    stats: [
      { label: "New Features", value: "20+" },
      { label: "Improvements", value: "15" },
      { label: "Bug Fixes", value: "30+" },
      { label: "Performance Gain", value: "50%" },
    ],
  },
];

export const platforms = [
  {
    icon: "/windows.svg",
    name: "Windows",
    size: "120MB",
    type: ".exe",
    requirements: "Windows 10 or later",
    version: "1.21.2",
    features: ["Auto-updates", "Native performance", "Windows integration"],
  },
  {
    icon: "/apple.svg",
    name: "macOS",
    size: "115MB",
    type: ".dmg",
    requirements: "macOS 11 or later",
    version: "1.21.2",
    features: [
      "Apple Silicon support",
      "Universal binary",
      "Touch Bar support",
    ],
  },
  {
    icon: "/linux.svg",
    name: "Linux",
    size: "110MB",
    type: ".AppImage",
    requirements: "Most distributions",
    version: "1.21.2",
    features: ["AppImage format", "No dependencies", "Portable"],
  },
];

export const changelogs = [
  {
    version: "2.0.1",
    date: "March 15, 2024",
    type: "major",
    icon: Rocket,
    title: "Performance Boost Update",
    description:
      "Major performance improvements and new features for a better development experience.",
    banner:
      "https://wallpapers.com/images/featured/minecraft-s2kxfahyg30sob8q.jpg",
    changes: [
      {
        type: "feature",
        icon: Sparkles,
        title: "New Component Library",
        description: "Introducing 20+ new components with modern design",
        details: [
          "Responsive layouts",
          "Dark mode support",
          "Accessibility improvements",
          "New animations",
        ],
      },
      {
        type: "improvement",
        icon: Zap,
        title: "Performance Optimization",
        description: "50% faster rendering and reduced bundle size",
        details: [
          "Improved code splitting",
          "Better tree shaking",
          "Optimized asset loading",
          "Reduced memory usage",
        ],
      },
      {
        type: "bugfix",
        icon: Bug,
        title: "Critical Fixes",
        description: "Resolved memory leaks and UI inconsistencies",
        details: [
          "Fixed memory leaks",
          "Resolved UI glitches",
          "Improved error handling",
          "Better type safety",
        ],
      },
    ],
    stats: [
      { label: "New Features", value: "20+" },
      { label: "Performance Gain", value: "50%" },
      { label: "Bug Fixes", value: "30+" },
      { label: "File Size", value: "-25%" },
    ],
  },
  {
    version: "1.9.0",
    date: "March 1, 2024",
    type: "minor",
    icon: GitPullRequest,
    title: "Developer Experience Update",
    description: "Enhanced developer tools and documentation improvements.",
    banner: "https://source.unsplash.com/random/1200x400?developer",
    changes: [
      {
        type: "feature",
        icon: GitBranch,
        title: "Advanced Theming",
        description: "New theming system with better customization",
        details: [
          "Custom color schemes",
          "Theme builder",
          "CSS variables support",
          "Real-time preview",
        ],
      },
      {
        type: "improvement",
        icon: GitCommit,
        title: "Documentation",
        description: "Expanded guides and API documentation",
        details: [
          "Interactive examples",
          "Better search",
          "Video tutorials",
          "API playground",
        ],
      },
    ],
    stats: [
      { label: "New Features", value: "10+" },
      { label: "Doc Pages", value: "100+" },
      { label: "Examples", value: "50+" },
      { label: "Contributors", value: "25+" },
    ],
  },
];
