import { useState, useEffect, useCallback } from 'react';
import donorService from '../services/donorService';

export function useDonors() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDonors = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await donorService.getDonors();
      setDonors(data || []);
    } catch (err) {
      console.error('Error fetching donors:', err);
      const errorMessage = typeof err === 'string' 
        ? err 
        : err?.message || 'Terjadi kesalahan saat memuat data pendonor';
      setError(errorMessage);
      setDonors([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDonors();
  }, [fetchDonors]);

  return {
    donors,
    loading,
    error,
    refetch: fetchDonors,
  };
}

export function useDonor(id) {
  const [donor, setDonor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDonor = useCallback(async () => {
    if (!id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await donorService.getDonorById(id);
      setDonor(data);
    } catch (err) {
      console.error('Error fetching donor:', err);
      const errorMessage = typeof err === 'string' 
        ? err 
        : err?.message || 'Terjadi kesalahan saat memuat data pendonor';
      setError(errorMessage);
      setDonor(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDonor();
  }, [fetchDonor]);

  return {
    donor,
    loading,
    error,
    refetch: fetchDonor,
  };
}

export function useCreateDonor() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createDonor = async (donorData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      await donorService.createDonor(donorData);
      setSuccess(true);
      return { success: true };
    } catch (err) {
      console.error('Error creating donor:', err);
      const errorMessage = typeof err === 'string' 
        ? err 
        : err?.message || 'Gagal menambahkan pendonor';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    createDonor,
    loading,
    error,
    success,
  };
}

export function useUpdateDonor() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateDonor = async (id, donorData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      await donorService.updateDonor(id, donorData);
      setSuccess(true);
      return { success: true };
    } catch (err) {
      console.error('Error updating donor:', err);
      const errorMessage = typeof err === 'string' 
        ? err 
        : err?.message || 'Gagal memperbarui pendonor';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    updateDonor,
    loading,
    error,
    success,
  };
}

export function useDeleteDonor() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const deleteDonor = async (id) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      await donorService.deleteDonor(id);
      setSuccess(true);
      return { success: true };
    } catch (err) {
      console.error('Error deleting donor:', err);
      const errorMessage = typeof err === 'string' 
        ? err 
        : err?.message || 'Gagal menghapus pendonor';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteDonor,
    loading,
    error,
    success,
  };
}