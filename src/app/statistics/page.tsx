'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { FiBarChart2, FiPieChart, FiTrendingUp, FiDownload } from 'react-icons/fi';
import { useAppData } from '@/contexts/AppDataContext';

// 这是一个客户端组件，因为它需要使用钩子

export default function Statistics() {
  const { appUsage, screenTimeData } = useAppData();
  
  // 生成图表数据示例
  const usageTrendData = {
    labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    datasets: [
      {
        label: '屏幕时间 (小时)',
        data: [3.5, 4.2, 3.8, 5.1, 4.7, 6.3, 4.5],
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.5)',
      },
    ],
  };
  
  const appCategoryData = {
    labels: ['社交', '工作', '娱乐', '学习', '通讯'],
    datasets: [
      {
        label: '使用时间 (小时)',
        data: [2.5, 1.8, 1.2, 0.8, 0.5],
        backgroundColor: [
          'rgba(139, 92, 246, 0.7)',
          'rgba(14, 165, 233, 0.7)',
          'rgba(249, 115, 22, 0.7)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(236, 72, 153, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const hourlyUsageData = {
    labels: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    datasets: [
      {
        label: '活跃时间 (分钟)',
        data: [10, 25, 45, 30, 50, 40, 35, 60, 45],
        backgroundColor: 'rgba(14, 165, 233, 0.7)',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-4 pb-20 md:pb-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">使用统计</h1>
            
            <div className="flex items-center space-x-2">
              <select className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
                <option>今日</option>
                <option>本周</option>
                <option>本月</option>
              </select>
              
              <button className="btn btn-outline inline-flex items-center text-sm">
                <FiDownload className="mr-1 h-4 w-4" />
                导出报告
              </button>
            </div>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center mb-4">
              <FiTrendingUp className="h-5 w-5 text-primary-500 mr-2" />
              <h2 className="text-xl font-semibold">使用趋势</h2>
            </div>
            
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">这里将显示每天使用趋势的图表</p>
            </div>
            
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              <p>与上周相比: <span className="text-green-500">-5.2%</span></p>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center mb-4">
              <FiPieChart className="h-5 w-5 text-secondary-500 mr-2" />
              <h2 className="text-xl font-semibold">应用类别分布</h2>
            </div>
            
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">这里将显示应用类别分布的饼图</p>
            </div>
            
            <div className="mt-4">
              <p className="text-sm font-medium">主要使用类别: <span className="text-secondary-500">社交</span></p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <div className="card">
            <div className="flex items-center mb-4">
              <FiBarChart2 className="h-5 w-5 text-green-500 mr-2" />
              <h2 className="text-xl font-semibold">每小时使用情况</h2>
            </div>
            
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">这里将显示每小时使用情况的柱状图</p>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">高峰使用时间</p>
                <p className="font-semibold">20:00</p>
              </div>
              
              <div>
                <p className="text-gray-500 dark:text-gray-400">高峰使用持续时间</p>
                <p className="font-semibold">60分钟</p>
              </div>
              
              <div>
                <p className="text-gray-500 dark:text-gray-400">空闲时段</p>
                <p className="font-semibold">02:00 - 06:00</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-20 md:mb-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">洞察与建议</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-medium text-blue-700 dark:text-blue-300 mb-2">使用模式洞察</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">您在晚上8点至10点之间的使用时间最长。考虑在这个时间段设置专注模式，减少分心。</p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-medium text-purple-700 dark:text-purple-300 mb-2">应用使用建议</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">社交媒体应用占用了您大部分屏幕时间(32%)。尝试设置每日限制，逐步减少使用时间。</p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-medium text-green-700 dark:text-green-300 mb-2">健康习惯提示</h3>
                <p className="text-sm text-green-600 dark:text-green-400">长时间连续使用设备可能导致眼睛疲劳。每20分钟注视远处20秒，保护眼睛健康。</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Navbar />
    </main>
  );
} 