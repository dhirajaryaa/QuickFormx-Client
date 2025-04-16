import { Outlet, Navigate } from "react-router-dom"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetUserProfileMutation } from '@/app/services/userApi';
import { useEffect } from "react";
import { setUser } from "@/app/features/userSlice";
import { Loader2 } from "lucide-react";

function ProtectedRoute() {
    const { user, isAuthorized } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [fetchUserProfile, { isLoading, isError }] = useGetUserProfileMutation();
    const [isChecking, setIsChecking] = useState(false);

    useEffect(() => {
        // get user data 
        if (!user && !isChecking) {
            setIsChecking(true);
            fetchUserProfile().unwrap()
                .then((data) => {
                    dispatch(setUser({ user: data }));
                })
                .catch((err) => {
                    console.error("profile fetch Error:", err);
                })
                .finally(() => {
                    setIsChecking(false);
                })
        }
    }, [dispatch, user, isChecking])

    if (isLoading || isChecking) {
        return <main className="w-full h-screen z-50 flex items-center justify-center">
            <Loader2 className="size-12 animate-spin" />
        </main>
    };
    if (isError) return <Navigate to="/login" replace />

    if (!isAuthorized && isChecking) {
        return <Navigate to="/login" replace />
    };
    return <Outlet />


}

export default ProtectedRoute
