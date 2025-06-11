import DashNav from '@/components/dashboard/DashNav'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/option'
import { getServerSession } from 'next-auth'
import CreateChat from '@/components/groupChat/CreateChat';
import { ChatGroupType } from '../../../types';
import { fetchChatGroups } from '@/fetch/groupFetch';
import GroupChatCard from '@/components/groupChat/GroupChatCard';
import { MessageCircle, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default async function Dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<ChatGroupType> | [] = await fetchChatGroups(session?.user?.token);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      
      <div className="container px-4 py-6">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your chat groups and conversations</p>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search chat groups..."
              className="pl-9 bg-white"
            />
          </div>
          <CreateChat user={session?.user!} />
        </div>

        {/* Chat Groups Grid */}
        {groups.length === 0 ? (
          <div className="rounded-lg border-2 border-dashed p-12 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">No chat groups</h3>
            <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
              Get started by creating your first chat group. It only takes a few seconds!
            </p>
            <CreateChat user={session?.user!} className="mt-6" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Create New Group Card */}
            <div className="rounded-lg border-2 border-dashed bg-white/50 p-6 text-center hover:bg-white/80 transition-colors cursor-pointer">
              <div className="mx-auto w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                <Plus className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Create New Group</h3>
              <p className="mt-2 text-sm text-gray-500">
                Start a new conversation with your team
              </p>
            </div>

            {/* Existing Groups */}
            {groups.map((item) => (
              <GroupChatCard
                group={item}
                key={item.id}
                user={session?.user!}
              />
            ))}
          </div>
        )}

        {/* Stats Section */}
        {groups.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-white p-6">
              <h4 className="text-sm font-medium text-gray-500">Total Groups</h4>
              <p className="mt-2 text-3xl font-bold text-gray-900">{groups.length}</p>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <h4 className="text-sm font-medium text-gray-500">Active Members</h4>
              <p className="mt-2 text-3xl font-bold text-gray-900">-</p>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <h4 className="text-sm font-medium text-gray-500">Total Messages</h4>
              <p className="mt-2 text-3xl font-bold text-gray-900">-</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}