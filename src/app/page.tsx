"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { FiClock, FiTarget, FiBell, FiTrendingUp } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-4 pb-20 md:pb-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">数字健康</h1>
          
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg p-6 text-white mb-8">
            <h2 className="text-xl font-semibold mb-2">今日概览</h2>
            <p className="mb-4">你今天已经使用手机4小时32分钟，较昨日减少了15分钟。</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold">4h 32m</span>
                <p className="text-sm opacity-80">总屏幕时间</p>
              </div>
              <div>
                <span className="text-2xl font-bold">47</span>
                <p className="text-sm opacity-80">解锁次数</p>
              </div>
              <div>
                <span className="text-2xl font-bold">2h 15m</span>
                <p className="text-sm opacity-80">社交应用</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="grid grid-cols-2 gap-4 mb-8">
          <Link href="/screen-time" className="card flex flex-col items-center justify-center py-8">
            <FiClock className="h-8 w-8 text-primary-500 mb-2" />
            <h3 className="text-lg font-medium">屏幕时间</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">追踪您的设备使用情况</p>
          </Link>
          
          <Link href="/focus" className="card flex flex-col items-center justify-center py-8">
            <FiTarget className="h-8 w-8 text-secondary-500 mb-2" />
            <h3 className="text-lg font-medium">专注模式</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">减少分心，提高生产力</p>
          </Link>
          
          <Link href="/reminders" className="card flex flex-col items-center justify-center py-8">
            <FiBell className="h-8 w-8 text-yellow-500 mb-2" />
            <h3 className="text-lg font-medium">休息提醒</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">设置定期休息提醒</p>
          </Link>
          
          <Link href="/statistics" className="card flex flex-col items-center justify-center py-8">
            <FiTrendingUp className="h-8 w-8 text-green-500 mb-2" />
            <h3 className="text-lg font-medium">使用统计</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">分析您的使用习惯</p>
          </Link>
        </section>
        
        <section className="mb-20 md:mb-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">您的数字健康目标</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>每日屏幕时间限制</span>
                  <span>4h / 5h</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>社交媒体使用限制</span>
                  <span>2h 15m / 2h 30m</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-secondary-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>专注模式目标</span>
                  <span>1h 30m / 2h</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary w-full mt-6">设置新目标</button>
          </div>
        </section>
      </div>
      
      <Navbar />
    </main>
  );
} 