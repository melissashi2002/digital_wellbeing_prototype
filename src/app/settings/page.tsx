"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { 
  FiSettings, 
  FiMoon, 
  FiSun, 
  FiBell, 
  FiEye, 
  FiShield, 
  FiDownload, 
  FiTrash2,
  FiHelpCircle
} from 'react-icons/fi';

// 客户端组件
'use client';

export default function Settings() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-4 pb-20 md:pb-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">设置</h1>
        </section>
        
        <section className="mb-8">
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">外观</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FiSun className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="font-medium">浅色模式</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-700">
                  <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FiMoon className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="font-medium">深色模式</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FiSettings className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="font-medium">跟随系统</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-700">
                  <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">通知</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FiBell className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="font-medium">应用通知</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-medium">每周报告</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">每周日发送使用报告</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-medium">目标达成通知</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">达成设定目标时通知</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">隐私与数据</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FiEye className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="font-medium">仅在本地存储数据</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FiShield className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-medium">数据加密</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500">
                  <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                </button>
              </div>
              
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <FiDownload className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="font-medium">导出我的数据</span>
                </div>
                <button className="btn btn-outline text-sm">导出</button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiTrash2 className="h-5 w-5 text-red-500 mr-2" />
                  <span className="font-medium">删除所有数据</span>
                </div>
                <button className="btn text-sm text-red-500 border border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                  删除
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-20 md:mb-8">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">关于</h2>
            
            <div className="space-y-4">
              <div>
                <span className="font-medium">版本</span>
                <p className="text-sm text-gray-500 dark:text-gray-400">0.1.0 (Beta)</p>
              </div>
              
              <div>
                <span className="font-medium">开发者</span>
                <p className="text-sm text-gray-500 dark:text-gray-400">数字健康研究团队</p>
              </div>
              
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <FiHelpCircle className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="font-medium">帮助与反馈</span>
                </div>
                <button className="btn btn-outline text-sm">联系我们</button>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                © 2023 数字健康研究原型。本应用仅用于研究目的，不用于商业用途。
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Navbar />
    </main>
  );
} 