import TeacherModel from "../models/teacher_module";
import { CreateTeacherDto } from "../dtos/teacherDTO/CreateTeacherDto";
import { UpdateTeacherDto } from "../dtos/teacherDTO/UpdateTeacherDto";

class TeachersService {
  //   public async findAllRank() {
  //     return TeacherModel.find().select("rank").distinct("rank");
  //   }

  //   public async createRank(data: { title: string }) {
  //     // Implement rank creation logic
  //   }

  //   public async create(data: CreateTeacherDto) {
  //     const teacher = new TeacherModel(data);
  //     return teacher.save();
  //   }

  public async findAll() {
    return TeacherModel.find();
  }

  //   public async findOne(id: string) {
  //     return TeacherModel.findById(id);
  //   }

  //   public async update(data: UpdateTeacherDto) {
  //     return TeacherModel.findByIdAndUpdate(data._id, data, { new: true });
  //   }

  //   public async remove(id: string) {
  //     return TeacherModel.findByIdAndDelete(id);
  //   }
}

export default TeachersService;
