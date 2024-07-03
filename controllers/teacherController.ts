import { Request, Response, NextFunction } from "express";
import TeachersService from "../service/teacherService";
import { CreateTeacherDto } from "../dtos/teacherDTO/CreateTeacherDto";
import { UpdateTeacherDto } from "../dtos/teacherDTO/UpdateTeacherDto";

class TeachersController {
  private teachersService: TeachersService;

  constructor() {
    this.teachersService = new TeachersService();
  }

  public findAllRank = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const ranks = await this.teachersService.findAllRank();
      res.json(ranks);
    } catch (error) {
      next(error);
    }
  };

  public createRank = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const rank = await this.teachersService.createRank(data);
      res.json(rank);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateTeacherDto = req.body;
      const teacher = await this.teachersService.create(data);
      res.json(teacher);
    } catch (error) {
      next(error);
    }
  };

  public findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teachers = await this.teachersService.findAll();
      res.json(teachers);
    } catch (error) {
      next(error);
    }
  };

  public findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const teacher = await this.teachersService.findOne(id);
      res.json(teacher);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: UpdateTeacherDto = req.body;
      const teacher = await this.teachersService.update(data);
      res.json(teacher);
    } catch (error) {
      next(error);
    }
  };

  public remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.body.id;
      await this.teachersService.remove(id);
      res.json({ message: "Teacher removed" });
    } catch (error) {
      next(error);
    }
  };
}

export default new TeachersController();
