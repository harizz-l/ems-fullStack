package com.example.ems_backend.controller;

import com.example.ems_backend.dto.EmployeeDto;
import com.example.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/employees")
public class EmployeeController {
    EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto>createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedemployeee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedemployeee, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> listEmployee(@PathVariable("id")Long id){
        EmployeeDto getEmployeeById = employeeService.getEmployeeById(id);
        return new ResponseEntity<>(getEmployeeById,HttpStatus.OK);
    }

    @GetMapping
        public ResponseEntity <List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto>employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees,HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id")Long employeeId,
                                                      @RequestBody EmployeeDto employeeDto){
        EmployeeDto updateEmployee = employeeService.updateEmployee(employeeId,employeeDto);
        return new ResponseEntity<>(updateEmployee,HttpStatus.OK);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id")Long id){
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee Deleted Successfully");
    }
}
