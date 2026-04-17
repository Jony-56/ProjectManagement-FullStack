import api from './axios';

export const getMe = () => api.get('/users/me');
export const updateMe = (data) => api.put('/users/me', data);
export const changePassword = (data) => api.put('/users/me/change-password', data);

// ✅ Now calls /api/users instead of /api/admin/users
export const getAllUsers = () => api.get('/users');

// Keep admin endpoint separately for admin panel
export const getAllUsersAdmin = () => api.get('/admin/users');