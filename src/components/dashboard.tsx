// Dashboard.jsx
import React from "react";
import DashboardItem from "./sidebar/DashboardItem";
import PracticeItem from "./sidebar/PracticeItem";
import AchievementsItem from "./sidebar/AchievementItem";
import ProfileItem from "./sidebar/ProfileItem";
import SettingsItem from "./sidebar/SettingsItem";
import LogoutItem from "./sidebar/LogoutItem";
import ReadingActivity from "./activities/ReadingActivity";
import ListeningActivity from "./activities/ListeningActivity";
import GrammarActivity from "./activities/GrammarActivity";
import SkillReviewActivity from "./activities/SkillReviewActiviy";

/* ---------------- Dashboard Component ---------------- */
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-gray-200 p-5 flex flex-col justify-between">
        <div>
          <div className="mb-6">
            <input
              className="w-full bg-white border border-gray-300 rounded px-2 py-1 text-sm font-semibold"
              value="LangMaster"
              readOnly
            />
          </div>

          <nav className="space-y-3">
            <DashboardItem />
            <PracticeItem />
            <AchievementsItem />
            <ProfileItem />
          </nav>
        </div>

        <div className="space-y-3">
          <SettingsItem />
          <LogoutItem />
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-extrabold">Good evening, Alex!</h1>
            <p className="text-sm text-gray-600 mt-1">Level 5</p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">⚡</button>
            <img src="https://via.placeholder.com/48" alt="profile" className="w-12 h-12 rounded-full object-cover" />
          </div>
        </header>

        {/* Progress */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-3">Your Progress</h2>
          <div className="flex items-center space-x-4">
            {[0,1,2,3].map(i => (
              <div key={i} className="h-16 w-16 rounded-full bg-gray-300 overflow-hidden flex-shrink-0" />
            ))}
            <button className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center">View</button>
          </div>
        </section>

        {/* Skill Assessment */}
        <section className="mb-6">
          <div className="bg-gray-200 rounded-xl p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Skill Assessment</h3>
              <p className="text-sm text-gray-700">Evaluate your language skills!</p>
            </div>
            <button className="px-4 py-2 bg-white rounded-full shadow">Start Test</button>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-6">
          <h3 className="font-semibold mb-3">Recent Activity</h3>
          <div className="bg-gray-200 rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="font-medium">Spanish</p>
              <p className="text-sm text-gray-700">Level 3</p>
            </div>
            <button className="px-4 py-2 bg-white rounded-full shadow">Start</button>
          </div>
        </section>

        {/* Activities */}
        <section>
          <h3 className="font-semibold mb-3">Activities</h3>
          <div className="flex items-center space-x-6">
            <ReadingActivity />
            <ListeningActivity />
            <GrammarActivity />
            <SkillReviewActivity />
          </div>
        </section>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="w-72 p-6">
        <div className="bg-gray-200 rounded-xl p-4 mb-6">
          <h4 className="font-semibold">Today's Challenge</h4>
          <p className="text-sm text-gray-700 my-3">Complete your daily tasks!</p>
          <button className="w-full py-2 bg-white rounded-full shadow">Get Started</button>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold">Leaderboard</h4>
            <button className="text-xs bg-black text-white px-2 py-1 rounded-full">See All</button>
          </div>

          <ul className="space-y-2">
            {[
              { name: "Jordan", points: 4500 },
              { name: "Sophie", points: 3200 },
              { name: "Liam", points: 2800 },
              { name: "You", points: 500 }
            ].map((u, i) => (
              <li key={u.name} className="flex justify-between items-center bg-gray-200 px-3 py-2 rounded-full">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gray-300" />
                  <div>
                    <div className="text-sm font-medium">#{i+1} {u.name}</div>
                  </div>
                </div>
                <div className="text-sm">{u.points} pts.</div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}



    
   
   
 
    
  
  