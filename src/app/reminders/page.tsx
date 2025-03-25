"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { FiBell, FiEye, FiClock, FiToggleLeft, FiToggleRight, FiPlus } from 'react-icons/fi';

// 客户端组件
'use client';

export default function Reminders() {
  // 示例提醒数据
  const reminders = [
    { id: 1, type: '眼部休息', interval: 20, unit: '分钟', enabled: true, message: '看看远处，眨眨眼睛' },
    { id: 2, type: '伸展休息', interval: 45, unit: '分钟', enabled: true, message: '站起来伸展一下' },
    { id: 3, type: '喝水提醒', interval: 60, unit: '分钟', enabled: false, message: '记得喝水' },
    { id: 4, type: '深呼吸', interval: 90, unit: '分钟', enabled: true, message: '做三次深呼吸' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-4 pb-20 md:pb-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">休息提醒</h1>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              定期休息对减轻数字疲劳和保护眼睛健康非常重要。我们建议您每20分钟休息20秒，并遵循20-20-20法则：每20分钟，看20英尺（约6米）外的物体20秒。
            </p>
          </div>
          
          <div className="card mb-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <FiEye className="h-5 w-5 text-primary-500 mr-2" />
                <h2 className="text-xl font-semibold">20-20-20法则</h2>
              </div>
              <button className={`relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500`}>
                <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-medium">提醒间隔</span>
              <div className="flex items-center">
                <input 
                  type="number" 
                  className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-700 rounded-md mr-2 bg-white dark:bg-gray-800" 
                  defaultValue={20}
                  min={1}
                />
                <span>分钟</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">自定义提醒</h2>
            <button className="btn btn-outline inline-flex items-center text-sm">
              <FiPlus className="mr-1 h-4 w-4" /> 
              添加提醒
            </button>
          </div>
          
          <div className="space-y-4">
            {reminders.map(reminder => (
              <div key={reminder.id} className="card p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <FiBell className="h-5 w-5 text-secondary-500 mr-2" />
                    <span className="font-medium">{reminder.type}</span>
                  </div>
                  <button className={`relative inline-flex h-6 w-11 items-center rounded-full ${reminder.enabled ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-700'}`}>
                    <span className={`${reminder.enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                  </button>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <FiClock className="h-4 w-4 mr-1" />
                    <span>每 {reminder.interval} {reminder.unit}</span>
                  </div>
                  <button className="text-primary-500 hover:underline">编辑</button>
                </div>
                
                <p className="mt-2 text-sm">{reminder.message}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-20 md:mb-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">提醒设置</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-medium">免打扰时段</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">在此时段内不发送提醒</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">开始时间</label>
                  <input 
                    type="time" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800" 
                    defaultValue="22:00"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">结束时间</label>
                  <input 
                    type="time" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800" 
                    defaultValue="08:00"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col">
                  <span className="font-medium">智能提醒</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">根据使用习惯自动调整提醒频率</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-700">
                  <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col">
                  <span className="font-medium">显示提醒内容</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">在提醒通知中显示详细内容</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Navbar />
    </main>
  );
} 