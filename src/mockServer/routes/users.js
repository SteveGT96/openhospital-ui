import { dashboardSettingDTO } from "mockServer/fixtures/dashboardSettingDTO";
import permissionList from "../fixtures/permissionList";
import { usersDTO } from "../fixtures/usersDTO";

export const userRoutes = (server) => {
  server.namespace("/users", () => {
    server.get("/me").intercept((_req, res) => {
      res.status(200).json({
        userName: "admin",
        permissions: permissionList,
        userGroupName: "ADMIN",
        userDesc: "John Doe",
      });
    });
    server.get("/settings").intercept((req, res) => {
      res
        .status(200)
        .json([{ id: 1, configName: "landing", configValue: "/" }]);
    });
    server.get("/").intercept((_req, res) => {
      res.status(200).json(usersDTO);
    });
    server.get("/:username").intercept((_req, res) => {
      res.status(200).json(usersDTO[0]);
    });
    server.post("/").intercept((_req, res) => {
      res.status(200).json(usersDTO[0]);
    });
    server.put("/:username").intercept((_req, res) => {
      res.status(200).json(_req.jsonBody());
    });
    server.get("/:username/settings/dashboard").intercept((req, res) => {
      res.status(200).json(dashboardSettingDTO);
    });
    server.put("/settings/:code").intercept((req, res) => {
      res.status(200).json(req.body);
    });
    server.post("/settings").intercept((req, res) => {
      res.status(200).json(req.body);
    });
  });
};
