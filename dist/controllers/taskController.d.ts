import { Request, Response } from "express";
export declare const getTasks: (req: Request, res: Response) => Promise<void>;
export declare const postTask: (req: Request, res: Response) => Promise<void>;
export declare const putTask: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteTask: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=taskController.d.ts.map