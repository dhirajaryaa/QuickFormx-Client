import { setActiveTab } from '@/app/features/uiSlice';
import Layout from '@/layout/Layout';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSelector } from 'react-redux';

function UserProfile() {
  const dispatch = useDispatch();
  const [showKey, setShowKey] = useState(false);
  const {user} =  useSelector(state=>state.user);

  useEffect(() => {
    dispatch(setActiveTab("Profile"));
  }, [dispatch]);

  const handleCopy = () => {
    navigator.clipboard.writeText(user.apiKey);
    toast.success("API Key copied to clipboard!");
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleString("en-IN", {
      dateStyle: "long",
      timeStyle: "short",
    });

  return (
    <Layout>
      <section className="max-w-5xl mx-auto p-6 space-y-10">
        {/* Top Header */}
        <div className="flex items-center gap-6 flex-col">
          <Avatar className="size-26 ring-2 ring-primary shadow-lg">
            <AvatarImage src="/user.png" alt="User" />
            <AvatarFallback className={"text-2xl"}>U</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground text-sm text-center">{user.email}</p>
          </div>
        </div>

        {/* User Info */}
        <div className="grid sm:grid-cols-2 gap-6 ">
         
        </div>

        {/* API Key Section */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">API Key</label>
          <div className="relative">
            <Input
              type={showKey ? "text" : "password"}
              value={user.apiKey}
              readOnly
              className="pr-24"
            />
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowKey(!showKey)}
              className="absolute right-14 top-1/2 -translate-y-1/2"
            >
              {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopy}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default UserProfile;
