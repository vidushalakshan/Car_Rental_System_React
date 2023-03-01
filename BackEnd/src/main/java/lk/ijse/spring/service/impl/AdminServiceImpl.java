package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.repo.AdminRepo;
import lk.ijse.spring.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void saveAdmin(AdminDTO adminDTO) {
        if (!adminRepo.existsById(adminDTO.getAdmin_Id())){
            adminRepo.save(modelMapper.map(adminDTO, Admin.class));
        }else {
            throw new RuntimeException("Admin Already Exist..");
        }
    }

    @Override
    public void deleteAdmin(String adminId) {
        if (adminRepo.existsById(adminId)){
            adminRepo.deleteById(adminId);
        }else {
            throw new RuntimeException("Please check the Admin ID.. No Such Admin..!");
        }
    }

    @Override
    public void updateAdmin(AdminDTO adminDTO) {
        if (adminRepo.existsById(adminDTO.getAdmin_Id())){
            adminRepo.save(modelMapper.map(adminDTO,Admin.class));
        }else {
            throw new RuntimeException("Please check the Admin ID... No Such Admin to Update..!");
        }
    }

    @Override
    public AdminDTO searchAdmin(String id) {
        return null;
    }

    @Override
    public List<AdminDTO> getAllAdmin() {
        return null;
    }

    @Override
    public String generateAdminId() {
        return null;
    }
}
