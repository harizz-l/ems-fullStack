package com.example.ems_backend.service;

import com.example.ems_backend.dto.EmployeeDto;
import org.springframework.http.ResponseEntity;
import java.util.*;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();
}
