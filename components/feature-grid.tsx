import Link from "next/link"
import {
  BookOpen,
  PenTool,
  MessageCircle,
  Star,
  Trophy,
  Monitor,
  Bot,
  Palette,
  Clock,
  Target,
  Users,
  Music,
  Heart,
  BookmarkPlus,
  Calendar,
} from "lucide-react"

interface FeatureGridProps {
  darkMode: boolean
}

export function FeatureGrid({ darkMode }: FeatureGridProps) {
  const features = [
    { name: "Study Groups", icon: <BookOpen className="h-8 w-8" />, path: "/study-groups" },
    { name: "Quick Notes", icon: <PenTool className="h-8 w-8" />, path: "/quick-notes" },
    { name: "Live Doubts", icon: <MessageCircle className="h-8 w-8" />, path: "/live-doubts" },
    { name: "Quizzes", icon: <Star className="h-8 w-8" />, path: "/quizzes" },
    { name: "Leaderboards", icon: <Trophy className="h-8 w-8" />, path: "/leaderboards" },
    { name: "Coding Club", icon: <Monitor className="h-8 w-8" />, path: "/coding-club" },
    { name: "Art Club", icon: <Palette className="h-8 w-8" />, path: "/art-club" },
    { name: "Robotics Club", icon: <Bot className="h-8 w-8" />, path: "/robotics-club" },
    { name: "Pomodoro Timer", icon: <Clock className="h-8 w-8" />, path: "/pomodoro-timer" },
    { name: "Goal Tracker", icon: <Target className="h-8 w-8" />, path: "/goal-tracker" },
    { name: "Focus with Friends", icon: <Users className="h-8 w-8" />, path: "/focus-with-friends" },
    { name: "Music-Player", icon: <Music className="h-8 w-8" />, path: "/music-player" },
    { name: "Mental Health\nTracker", icon: <Heart className="h-8 w-8" />, path: "/mental-health-tracker" },
    { name: "Flashcards", icon: <BookmarkPlus className="h-8 w-8" />, path: "/flashcards" },
    { name: "Event Calendar", icon: <Calendar className="h-8 w-8" />, path: "/event-calendar" },
    { name: "Event Calendar", icon: <Calendar className="h-8 w-8" />, path: "/event-calendar-alt" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <Link
          key={index}
          href={feature.path}
          className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all hover:scale-105 ${
            darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-100/50 hover:bg-blue-100/80"
          }`}
        >
          <div className={`p-3 rounded-full mb-3 ${darkMode ? "bg-gray-700" : "bg-white/70"}`}>
            <div className={darkMode ? "text-blue-400" : "text-blue-600"}>{feature.icon}</div>
          </div>
          <h3 className={`text-center font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
            {feature.name.includes("\n")
              ? feature.name.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))
              : feature.name}
          </h3>
        </Link>
      ))}
    </div>
  )
}
