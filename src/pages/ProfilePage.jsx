import React, { useState } from 'react';
import { User, Mail, Phone, Building2, Heart, Droplet, Users, MapPin, Calendar, Edit2, Save, X } from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'dr. biell',
    email: 'biellsyaa@pmi.id',
    phone: '081234567890',
    role: 'Administrator PMI',
    location: 'PMI Kota Semarang',
    joinDate: 'Januari 2024',
    bloodType: 'A+'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Modern Header with Cover */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-red-500 via-red-600 to-rose-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Droplet className="w-24 h-24 text-white opacity-20" />
          </div>
        </div>
        
        {/* Profile Header */}
        <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg ring-4 ring-white">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
                <p className="text-red-600 font-semibold mt-1">{profile.role}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Bergabung {profile.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Droplet className="w-4 h-4" />
                    <span>Golongan Darah {profile.bloodType}</span>
                  </div>
                </div>
              </div>
              
              {/* Edit Button */}
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                {isEditing ? (
                  <>
                    <X className="w-5 h-5" />
                    Batal
                  </>
                ) : (
                  <>
                    <Edit2 className="w-5 h-5" />
                    Edit Profil
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Profile Details Card */}
        {isEditing ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-bold text-gray-800 mb-6 text-xl">Edit Informasi Pribadi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">No. Telepon</label>
                <input 
                  type="tel" 
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Golongan Darah</label>
                <select 
                  value={profile.bloodType}
                  onChange={(e) => setProfile({...profile, bloodType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Lokasi Unit</label>
                <input 
                  type="text" 
                  value={profile.location}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button 
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Batal
              </button>
              <button 
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                <Save className="w-5 h-5" />
                Simpan Perubahan
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-bold text-gray-800 mb-6 text-xl">Informasi Pribadi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Nama Lengkap</p>
                  <p className="text-gray-800 font-semibold mt-1">{profile.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-gray-800 font-semibold mt-1">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">No. Telepon</p>
                  <p className="text-gray-800 font-semibold mt-1">{profile.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Unit Kerja</p>
                  <p className="text-gray-800 font-semibold mt-1">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* App Info Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-center">
            <Droplet className="w-20 h-20 text-white mx-auto mb-4 drop-shadow-lg" />
            <h2 className="text-3xl font-bold text-white mb-2">Bank Darah Digital</h2>
            <p className="text-red-100">Sistem Manajemen Donor Darah</p>
          </div>

          <div className="p-8 space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">Tentang Aplikasi</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank Darah Digital adalah aplikasi Progressive Web App (PWA) yang dirancang untuk 
                memudahkan pengelolaan data pendonor darah dan stok darah. Aplikasi ini membantu 
                Palang Merah Indonesia (PMI) dan rumah sakit dalam mengelola ketersediaan darah 
                dengan lebih efisien dan terorganisir.
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Fitur Utama</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Manajemen Pendonor</p>
                    <p className="text-sm text-gray-600">Kelola data pendonor darah secara lengkap dan terstruktur</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Monitoring Stok Darah</p>
                    <p className="text-sm text-gray-600">Pantau ketersediaan stok darah secara real-time</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Peringatan Kadaluarsa</p>
                    <p className="text-sm text-gray-600">Notifikasi otomatis untuk stok yang akan kadaluarsa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Multi-Platform</p>
                    <p className="text-sm text-gray-600">Akses dari desktop, tablet, atau smartphone</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Teknologi</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Supabase</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">PWA</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Vite</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Kontak</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">admin@bankdarah.id</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">(021) 1234-5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">Palang Merah Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm py-4">
          <p>&copy; 2024 Bank Darah Digital</p>
        </div>
      </main>
    </div>
  );
}