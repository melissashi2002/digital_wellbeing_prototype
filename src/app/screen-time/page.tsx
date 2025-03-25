import React from 'react';
import Navbar from '@/components/Navbar';
import { FiClock, FiPhone, FiMessageCircle, FiChrome, FiMusic } from 'react-icons/fi';

export default function ScreenTime() {
  // 假设的应用使用数据
  const appUsageData = [
    { id: 1, name: '微信', icon: <FiMessageCircle className="h-6 w-6 text-green-500" />, time: '1h 25m', percentage: 32 },
    { id: 2, name: '浏览器', icon: <FiChrome className="h-6 w-6 text-blue-500" />, time: '52m', percentage: 19 },
    { id: 3, name: '抖音', icon: <FiMusic className="h-6 w-6 text-pink-500" />, time: '43m', percentage: 16 },
    { id: 4, name: '微博', icon: <FiMessageCircle className="h-6 w-6 text-red-500" />, time: '26m', percentage: 10 },
    { id: 5, name: '电话', icon: <FiPhone className="h-6 w-6 text-green-600" />, time: '18m', percentage: 7 },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-4 pb-20 md:pb-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">屏幕时间</h1>
            
            <div className="flex space-x-2">
              <button className="btn btn-outline text-sm">今天</button>
              <button className="btn btn-outline text-sm">本周</button>
              <button className="btn btn-outline text-sm">本月</button>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">今日总览</h2>
              <div className="flex items-center text-2xl font-bold text-primary-500">
                <FiClock className="mr-2" />
                <span>4h 32m</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">解锁次数</p>
                <p className="text-2xl font-bold">47</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">首次使用时间</p>
                <p className="text-2xl font-bold">07:32</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">最后使用时间</p>
                <p className="text-2xl font-bold">22:15</p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">最长使用时段</p>
                <p className="text-2xl font-bold">42m</p>
              </div>
            </div>
            
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
              <p className="text-gray-500">这里将显示每小时使用情况的图表</p>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>与昨日相比</span>
              <span className="text-green-500">-15分钟 (5.2%)</span>
            </div>
          </div>
        </section>
        
        <section className="mb-20 md:mb-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">应用使用详情</h2>
            
            <div className="space-y-6">
              {appUsageData.map((app) => (
                <div key={app.id} className="flex items-center">
                  <div className="flex-shrink-0 mr-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                    {app.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{app.name}</span>
                      <span>{app.time}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full" 
                        style={{ width: `${app.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn btn-outline w-full mt-6">查看所有应用</button>
          </div>
        </section>
      </div>
      
      <Navbar />
    </main>
  );
} 