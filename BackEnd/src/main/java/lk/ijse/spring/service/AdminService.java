package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;

import java.util.List;

public interface AdminService {
    void saveAdmin(AdminDTO adminDTO);

    void deleteAdmin(String adminId);

    void  updateAdmin(AdminDTO adminDTO);

    AdminDTO searchAdmin(String id);

    List<AdminDTO> getAllAdmin();

    String generateAdminId ();
}
