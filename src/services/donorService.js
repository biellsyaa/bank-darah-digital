import { supabaseClient } from '../config/supabase';

class DonorService {

  async getDonors() {
    try {
      const response = await supabaseClient.get('/donors?select=*&order=created_at.desc');
      return response;
    } catch (error) {
      console.error('Error in getDonors:', error);
      throw error;
    }
  }

  async getDonorById(id) {
    try {
      const response = await supabaseClient.get(`/donors?id=eq.${id}&select=*`);
      return response[0];
    } catch (error) {
      console.error('Error in getDonorById:', error);
      throw error;
    }
  }

  async createDonor(donorData) {
    try {
      const response = await supabaseClient.post('/donors', donorData);
      return response;
    } catch (error) {
      console.error('Error in createDonor:', error);
      throw error;
    }
  }

  async updateDonor(id, donorData) {
    try {
      const response = await supabaseClient.patch(`/donors?id=eq.${id}`, donorData);
      return response;
    } catch (error) {
      console.error('Error in updateDonor:', error);
      throw error;
    }
  }

  async deleteDonor(id) {
    try {
      await supabaseClient.delete(`/donors?id=eq.${id}`);
      return { success: true };
    } catch (error) {
      console.error('Error in deleteDonor:', error);
      throw error;
    }
  }

  async searchDonors(query) {
    try {
      const response = await supabaseClient.get(
        `/donors?nama=ilike.*${query}*&select=*&order=created_at.desc`
      );
      return response;
    } catch (error) {
      console.error('Error in searchDonors:', error);
      throw error;
    }
  }

  async filterByBloodType(bloodType) {
    try {
      const response = await supabaseClient.get(
        `/donors?golongan_darah=eq.${bloodType}&select=*&order=created_at.desc`
      );
      return response;
    } catch (error) {
      console.error('Error in filterByBloodType:', error);
      throw error;
    }
  }
}

export default new DonorService();