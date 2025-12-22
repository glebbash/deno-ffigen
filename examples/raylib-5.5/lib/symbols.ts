// deno-fmt-ignore-file

export const Raylib_SYMBOLS = {
  InitWindow: {
    name: "InitWindow",
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },
  CloseWindow: {
    name: "CloseWindow",
    parameters: [],
    result: "void",
  },
  WindowShouldClose: {
    name: "WindowShouldClose",
    parameters: [],
    result: "bool",
  },
  IsWindowReady: {
    name: "IsWindowReady",
    parameters: [],
    result: "bool",
  },
  IsWindowFullscreen: {
    name: "IsWindowFullscreen",
    parameters: [],
    result: "bool",
  },
  IsWindowHidden: {
    name: "IsWindowHidden",
    parameters: [],
    result: "bool",
  },
  IsWindowMinimized: {
    name: "IsWindowMinimized",
    parameters: [],
    result: "bool",
  },
  IsWindowMaximized: {
    name: "IsWindowMaximized",
    parameters: [],
    result: "bool",
  },
  IsWindowFocused: {
    name: "IsWindowFocused",
    parameters: [],
    result: "bool",
  },
  IsWindowResized: {
    name: "IsWindowResized",
    parameters: [],
    result: "bool",
  },
  IsWindowState: {
    name: "IsWindowState",
    parameters: ["u64"],
    result: "bool",
  },
  SetWindowState: {
    name: "SetWindowState",
    parameters: ["u64"],
    result: "void",
  },
  ClearWindowState: {
    name: "ClearWindowState",
    parameters: ["u64"],
    result: "void",
  },
  ToggleFullscreen: {
    name: "ToggleFullscreen",
    parameters: [],
    result: "void",
  },
  ToggleBorderlessWindowed: {
    name: "ToggleBorderlessWindowed",
    parameters: [],
    result: "void",
  },
  MaximizeWindow: {
    name: "MaximizeWindow",
    parameters: [],
    result: "void",
  },
  MinimizeWindow: {
    name: "MinimizeWindow",
    parameters: [],
    result: "void",
  },
  RestoreWindow: {
    name: "RestoreWindow",
    parameters: [],
    result: "void",
  },
  SetWindowIcon: {
    name: "SetWindowIcon",
    parameters: ["pointer"],
    result: "void",
  },
  SetWindowIcons: {
    name: "SetWindowIcons",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  SetWindowTitle: {
    name: "SetWindowTitle",
    parameters: ["pointer"],
    result: "void",
  },
  SetWindowPosition: {
    name: "SetWindowPosition",
    parameters: ["i32", "i32"],
    result: "void",
  },
  SetWindowMonitor: {
    name: "SetWindowMonitor",
    parameters: ["i32"],
    result: "void",
  },
  SetWindowMinSize: {
    name: "SetWindowMinSize",
    parameters: ["i32", "i32"],
    result: "void",
  },
  SetWindowMaxSize: {
    name: "SetWindowMaxSize",
    parameters: ["i32", "i32"],
    result: "void",
  },
  SetWindowSize: {
    name: "SetWindowSize",
    parameters: ["i32", "i32"],
    result: "void",
  },
  SetWindowOpacity: {
    name: "SetWindowOpacity",
    parameters: ["f64"],
    result: "void",
  },
  SetWindowFocused: {
    name: "SetWindowFocused",
    parameters: [],
    result: "void",
  },
  GetWindowHandle: {
    name: "GetWindowHandle",
    parameters: [],
    result: "pointer",
  },
  GetScreenWidth: {
    name: "GetScreenWidth",
    parameters: [],
    result: "i32",
  },
  GetScreenHeight: {
    name: "GetScreenHeight",
    parameters: [],
    result: "i32",
  },
  GetRenderWidth: {
    name: "GetRenderWidth",
    parameters: [],
    result: "i32",
  },
  GetRenderHeight: {
    name: "GetRenderHeight",
    parameters: [],
    result: "i32",
  },
  GetMonitorCount: {
    name: "GetMonitorCount",
    parameters: [],
    result: "i32",
  },
  GetCurrentMonitor: {
    name: "GetCurrentMonitor",
    parameters: [],
    result: "i32",
  },
  GetMonitorPosition: {
    name: "GetMonitorPosition",
    parameters: ["i32"],
    result: "pointer",
  },
  GetMonitorWidth: {
    name: "GetMonitorWidth",
    parameters: ["i32"],
    result: "i32",
  },
  GetMonitorHeight: {
    name: "GetMonitorHeight",
    parameters: ["i32"],
    result: "i32",
  },
  GetMonitorPhysicalWidth: {
    name: "GetMonitorPhysicalWidth",
    parameters: ["i32"],
    result: "i32",
  },
  GetMonitorPhysicalHeight: {
    name: "GetMonitorPhysicalHeight",
    parameters: ["i32"],
    result: "i32",
  },
  GetMonitorRefreshRate: {
    name: "GetMonitorRefreshRate",
    parameters: ["i32"],
    result: "i32",
  },
  GetWindowPosition: {
    name: "GetWindowPosition",
    parameters: [],
    result: "pointer",
  },
  GetWindowScaleDPI: {
    name: "GetWindowScaleDPI",
    parameters: [],
    result: "pointer",
  },
  GetMonitorName: {
    name: "GetMonitorName",
    parameters: ["i32"],
    result: "pointer",
  },
  SetClipboardText: {
    name: "SetClipboardText",
    parameters: ["pointer"],
    result: "void",
  },
  GetClipboardText: {
    name: "GetClipboardText",
    parameters: [],
    result: "pointer",
  },
  GetClipboardImage: {
    name: "GetClipboardImage",
    parameters: [],
    result: "pointer",
  },
  EnableEventWaiting: {
    name: "EnableEventWaiting",
    parameters: [],
    result: "void",
  },
  DisableEventWaiting: {
    name: "DisableEventWaiting",
    parameters: [],
    result: "void",
  },
  ShowCursor: {
    name: "ShowCursor",
    parameters: [],
    result: "void",
  },
  HideCursor: {
    name: "HideCursor",
    parameters: [],
    result: "void",
  },
  IsCursorHidden: {
    name: "IsCursorHidden",
    parameters: [],
    result: "bool",
  },
  EnableCursor: {
    name: "EnableCursor",
    parameters: [],
    result: "void",
  },
  DisableCursor: {
    name: "DisableCursor",
    parameters: [],
    result: "void",
  },
  IsCursorOnScreen: {
    name: "IsCursorOnScreen",
    parameters: [],
    result: "bool",
  },
  ClearBackground: {
    name: "ClearBackground",
    parameters: ["pointer"],
    result: "void",
  },
  BeginDrawing: {
    name: "BeginDrawing",
    parameters: [],
    result: "void",
  },
  EndDrawing: {
    name: "EndDrawing",
    parameters: [],
    result: "void",
  },
  BeginMode2D: {
    name: "BeginMode2D",
    parameters: ["pointer"],
    result: "void",
  },
  EndMode2D: {
    name: "EndMode2D",
    parameters: [],
    result: "void",
  },
  BeginMode3D: {
    name: "BeginMode3D",
    parameters: ["pointer"],
    result: "void",
  },
  EndMode3D: {
    name: "EndMode3D",
    parameters: [],
    result: "void",
  },
  BeginTextureMode: {
    name: "BeginTextureMode",
    parameters: ["pointer"],
    result: "void",
  },
  EndTextureMode: {
    name: "EndTextureMode",
    parameters: [],
    result: "void",
  },
  BeginShaderMode: {
    name: "BeginShaderMode",
    parameters: ["pointer"],
    result: "void",
  },
  EndShaderMode: {
    name: "EndShaderMode",
    parameters: [],
    result: "void",
  },
  BeginBlendMode: {
    name: "BeginBlendMode",
    parameters: ["i32"],
    result: "void",
  },
  EndBlendMode: {
    name: "EndBlendMode",
    parameters: [],
    result: "void",
  },
  BeginScissorMode: {
    name: "BeginScissorMode",
    parameters: ["i32", "i32", "i32", "i32"],
    result: "void",
  },
  EndScissorMode: {
    name: "EndScissorMode",
    parameters: [],
    result: "void",
  },
  BeginVrStereoMode: {
    name: "BeginVrStereoMode",
    parameters: ["pointer"],
    result: "void",
  },
  EndVrStereoMode: {
    name: "EndVrStereoMode",
    parameters: [],
    result: "void",
  },
  LoadVrStereoConfig: {
    name: "LoadVrStereoConfig",
    parameters: ["pointer"],
    result: "pointer",
  },
  UnloadVrStereoConfig: {
    name: "UnloadVrStereoConfig",
    parameters: ["pointer"],
    result: "void",
  },
  LoadShader: {
    name: "LoadShader",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  LoadShaderFromMemory: {
    name: "LoadShaderFromMemory",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  IsShaderValid: {
    name: "IsShaderValid",
    parameters: ["pointer"],
    result: "bool",
  },
  GetShaderLocation: {
    name: "GetShaderLocation",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  GetShaderLocationAttrib: {
    name: "GetShaderLocationAttrib",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  SetShaderValue: {
    name: "SetShaderValue",
    parameters: ["pointer", "i32", "pointer", "i32"],
    result: "void",
  },
  SetShaderValueV: {
    name: "SetShaderValueV",
    parameters: ["pointer", "i32", "pointer", "i32", "i32"],
    result: "void",
  },
  SetShaderValueMatrix: {
    name: "SetShaderValueMatrix",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  SetShaderValueTexture: {
    name: "SetShaderValueTexture",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  UnloadShader: {
    name: "UnloadShader",
    parameters: ["pointer"],
    result: "void",
  },
  GetScreenToWorldRay: {
    name: "GetScreenToWorldRay",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  GetScreenToWorldRayEx: {
    name: "GetScreenToWorldRayEx",
    parameters: ["pointer", "pointer", "i32", "i32"],
    result: "pointer",
  },
  GetWorldToScreen: {
    name: "GetWorldToScreen",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  GetWorldToScreenEx: {
    name: "GetWorldToScreenEx",
    parameters: ["pointer", "pointer", "i32", "i32"],
    result: "pointer",
  },
  GetWorldToScreen2D: {
    name: "GetWorldToScreen2D",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  GetScreenToWorld2D: {
    name: "GetScreenToWorld2D",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  GetCameraMatrix: {
    name: "GetCameraMatrix",
    parameters: ["pointer"],
    result: "pointer",
  },
  GetCameraMatrix2D: {
    name: "GetCameraMatrix2D",
    parameters: ["pointer"],
    result: "pointer",
  },
  SetTargetFPS: {
    name: "SetTargetFPS",
    parameters: ["i32"],
    result: "void",
  },
  GetFrameTime: {
    name: "GetFrameTime",
    parameters: [],
    result: "f64",
  },
  GetTime: {
    name: "GetTime",
    parameters: [],
    result: "f64",
  },
  GetFPS: {
    name: "GetFPS",
    parameters: [],
    result: "i32",
  },
  SwapScreenBuffer: {
    name: "SwapScreenBuffer",
    parameters: [],
    result: "void",
  },
  PollInputEvents: {
    name: "PollInputEvents",
    parameters: [],
    result: "void",
  },
  WaitTime: {
    name: "WaitTime",
    parameters: ["f64"],
    result: "void",
  },
  SetRandomSeed: {
    name: "SetRandomSeed",
    parameters: ["u64"],
    result: "void",
  },
  GetRandomValue: {
    name: "GetRandomValue",
    parameters: ["i32", "i32"],
    result: "i32",
  },
  LoadRandomSequence: {
    name: "LoadRandomSequence",
    parameters: ["u64", "i32", "i32"],
    result: "pointer",
  },
  UnloadRandomSequence: {
    name: "UnloadRandomSequence",
    parameters: ["pointer"],
    result: "void",
  },
  TakeScreenshot: {
    name: "TakeScreenshot",
    parameters: ["pointer"],
    result: "void",
  },
  SetConfigFlags: {
    name: "SetConfigFlags",
    parameters: ["u64"],
    result: "void",
  },
  OpenURL: {
    name: "OpenURL",
    parameters: ["pointer"],
    result: "void",
  },
  TraceLog: {
    name: "TraceLog",
    parameters: ["i32", "pointer"],
    result: "void",
  },
  SetTraceLogLevel: {
    name: "SetTraceLogLevel",
    parameters: ["i32"],
    result: "void",
  },
  MemAlloc: {
    name: "MemAlloc",
    parameters: ["u64"],
    result: "pointer",
  },
  MemRealloc: {
    name: "MemRealloc",
    parameters: ["pointer", "u64"],
    result: "pointer",
  },
  MemFree: {
    name: "MemFree",
    parameters: ["pointer"],
    result: "void",
  },
  SetTraceLogCallback: {
    name: "SetTraceLogCallback",
    parameters: ["function"],
    result: "void",
  },
  SetLoadFileDataCallback: {
    name: "SetLoadFileDataCallback",
    parameters: ["function"],
    result: "void",
  },
  SetSaveFileDataCallback: {
    name: "SetSaveFileDataCallback",
    parameters: ["function"],
    result: "void",
  },
  SetLoadFileTextCallback: {
    name: "SetLoadFileTextCallback",
    parameters: ["function"],
    result: "void",
  },
  SetSaveFileTextCallback: {
    name: "SetSaveFileTextCallback",
    parameters: ["function"],
    result: "void",
  },
  LoadFileData: {
    name: "LoadFileData",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  UnloadFileData: {
    name: "UnloadFileData",
    parameters: ["pointer"],
    result: "void",
  },
  SaveFileData: {
    name: "SaveFileData",
    parameters: ["pointer", "pointer", "i32"],
    result: "bool",
  },
  ExportDataAsCode: {
    name: "ExportDataAsCode",
    parameters: ["pointer", "i32", "pointer"],
    result: "bool",
  },
  LoadFileText: {
    name: "LoadFileText",
    parameters: ["pointer"],
    result: "pointer",
  },
  UnloadFileText: {
    name: "UnloadFileText",
    parameters: ["pointer"],
    result: "void",
  },
  SaveFileText: {
    name: "SaveFileText",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  FileExists: {
    name: "FileExists",
    parameters: ["pointer"],
    result: "bool",
  },
  DirectoryExists: {
    name: "DirectoryExists",
    parameters: ["pointer"],
    result: "bool",
  },
  IsFileExtension: {
    name: "IsFileExtension",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  GetFileLength: {
    name: "GetFileLength",
    parameters: ["pointer"],
    result: "i32",
  },
  GetFileExtension: {
    name: "GetFileExtension",
    parameters: ["pointer"],
    result: "pointer",
  },
  GetFileName: {
    name: "GetFileName",
    parameters: ["pointer"],
    result: "pointer",
  },
  GetFileNameWithoutExt: {
    name: "GetFileNameWithoutExt",
    parameters: ["pointer"],
    result: "pointer",
  },
  GetDirectoryPath: {
    name: "GetDirectoryPath",
    parameters: ["pointer"],
    result: "pointer",
  },
  GetPrevDirectoryPath: {
    name: "GetPrevDirectoryPath",
    parameters: ["pointer"],
    result: "pointer",
  },
  GetWorkingDirectory: {
    name: "GetWorkingDirectory",
    parameters: [],
    result: "pointer",
  },
  GetApplicationDirectory: {
    name: "GetApplicationDirectory",
    parameters: [],
    result: "pointer",
  },
  MakeDirectory: {
    name: "MakeDirectory",
    parameters: ["pointer"],
    result: "i32",
  },
  ChangeDirectory: {
    name: "ChangeDirectory",
    parameters: ["pointer"],
    result: "bool",
  },
  IsPathFile: {
    name: "IsPathFile",
    parameters: ["pointer"],
    result: "bool",
  },
  IsFileNameValid: {
    name: "IsFileNameValid",
    parameters: ["pointer"],
    result: "bool",
  },
  LoadDirectoryFiles: {
    name: "LoadDirectoryFiles",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadDirectoryFilesEx: {
    name: "LoadDirectoryFilesEx",
    parameters: ["pointer", "pointer", "bool"],
    result: "pointer",
  },
  UnloadDirectoryFiles: {
    name: "UnloadDirectoryFiles",
    parameters: ["pointer"],
    result: "void",
  },
  IsFileDropped: {
    name: "IsFileDropped",
    parameters: [],
    result: "bool",
  },
  LoadDroppedFiles: {
    name: "LoadDroppedFiles",
    parameters: [],
    result: "pointer",
  },
  UnloadDroppedFiles: {
    name: "UnloadDroppedFiles",
    parameters: ["pointer"],
    result: "void",
  },
  GetFileModTime: {
    name: "GetFileModTime",
    parameters: ["pointer"],
    result: "i64",
  },
  CompressData: {
    name: "CompressData",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  DecompressData: {
    name: "DecompressData",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  EncodeDataBase64: {
    name: "EncodeDataBase64",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  DecodeDataBase64: {
    name: "DecodeDataBase64",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  ComputeCRC32: {
    name: "ComputeCRC32",
    parameters: ["pointer", "i32"],
    result: "u64",
  },
  ComputeMD5: {
    name: "ComputeMD5",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  ComputeSHA1: {
    name: "ComputeSHA1",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  LoadAutomationEventList: {
    name: "LoadAutomationEventList",
    parameters: ["pointer"],
    result: "pointer",
  },
  UnloadAutomationEventList: {
    name: "UnloadAutomationEventList",
    parameters: ["pointer"],
    result: "void",
  },
  ExportAutomationEventList: {
    name: "ExportAutomationEventList",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  SetAutomationEventList: {
    name: "SetAutomationEventList",
    parameters: ["pointer"],
    result: "void",
  },
  SetAutomationEventBaseFrame: {
    name: "SetAutomationEventBaseFrame",
    parameters: ["i32"],
    result: "void",
  },
  StartAutomationEventRecording: {
    name: "StartAutomationEventRecording",
    parameters: [],
    result: "void",
  },
  StopAutomationEventRecording: {
    name: "StopAutomationEventRecording",
    parameters: [],
    result: "void",
  },
  PlayAutomationEvent: {
    name: "PlayAutomationEvent",
    parameters: ["pointer"],
    result: "void",
  },
  IsKeyPressed: {
    name: "IsKeyPressed",
    parameters: ["i32"],
    result: "bool",
  },
  IsKeyPressedRepeat: {
    name: "IsKeyPressedRepeat",
    parameters: ["i32"],
    result: "bool",
  },
  IsKeyDown: {
    name: "IsKeyDown",
    parameters: ["i32"],
    result: "bool",
  },
  IsKeyReleased: {
    name: "IsKeyReleased",
    parameters: ["i32"],
    result: "bool",
  },
  IsKeyUp: {
    name: "IsKeyUp",
    parameters: ["i32"],
    result: "bool",
  },
  GetKeyPressed: {
    name: "GetKeyPressed",
    parameters: [],
    result: "i32",
  },
  GetCharPressed: {
    name: "GetCharPressed",
    parameters: [],
    result: "i32",
  },
  SetExitKey: {
    name: "SetExitKey",
    parameters: ["i32"],
    result: "void",
  },
  IsGamepadAvailable: {
    name: "IsGamepadAvailable",
    parameters: ["i32"],
    result: "bool",
  },
  GetGamepadName: {
    name: "GetGamepadName",
    parameters: ["i32"],
    result: "pointer",
  },
  IsGamepadButtonPressed: {
    name: "IsGamepadButtonPressed",
    parameters: ["i32", "i32"],
    result: "bool",
  },
  IsGamepadButtonDown: {
    name: "IsGamepadButtonDown",
    parameters: ["i32", "i32"],
    result: "bool",
  },
  IsGamepadButtonReleased: {
    name: "IsGamepadButtonReleased",
    parameters: ["i32", "i32"],
    result: "bool",
  },
  IsGamepadButtonUp: {
    name: "IsGamepadButtonUp",
    parameters: ["i32", "i32"],
    result: "bool",
  },
  GetGamepadButtonPressed: {
    name: "GetGamepadButtonPressed",
    parameters: [],
    result: "i32",
  },
  GetGamepadAxisCount: {
    name: "GetGamepadAxisCount",
    parameters: ["i32"],
    result: "i32",
  },
  GetGamepadAxisMovement: {
    name: "GetGamepadAxisMovement",
    parameters: ["i32", "i32"],
    result: "f64",
  },
  SetGamepadMappings: {
    name: "SetGamepadMappings",
    parameters: ["pointer"],
    result: "i32",
  },
  SetGamepadVibration: {
    name: "SetGamepadVibration",
    parameters: ["i32", "f64", "f64", "f64"],
    result: "void",
  },
  IsMouseButtonPressed: {
    name: "IsMouseButtonPressed",
    parameters: ["i32"],
    result: "bool",
  },
  IsMouseButtonDown: {
    name: "IsMouseButtonDown",
    parameters: ["i32"],
    result: "bool",
  },
  IsMouseButtonReleased: {
    name: "IsMouseButtonReleased",
    parameters: ["i32"],
    result: "bool",
  },
  IsMouseButtonUp: {
    name: "IsMouseButtonUp",
    parameters: ["i32"],
    result: "bool",
  },
  GetMouseX: {
    name: "GetMouseX",
    parameters: [],
    result: "i32",
  },
  GetMouseY: {
    name: "GetMouseY",
    parameters: [],
    result: "i32",
  },
  GetMousePosition: {
    name: "GetMousePosition",
    parameters: [],
    result: "pointer",
  },
  GetMouseDelta: {
    name: "GetMouseDelta",
    parameters: [],
    result: "pointer",
  },
  SetMousePosition: {
    name: "SetMousePosition",
    parameters: ["i32", "i32"],
    result: "void",
  },
  SetMouseOffset: {
    name: "SetMouseOffset",
    parameters: ["i32", "i32"],
    result: "void",
  },
  SetMouseScale: {
    name: "SetMouseScale",
    parameters: ["f64", "f64"],
    result: "void",
  },
  GetMouseWheelMove: {
    name: "GetMouseWheelMove",
    parameters: [],
    result: "f64",
  },
  GetMouseWheelMoveV: {
    name: "GetMouseWheelMoveV",
    parameters: [],
    result: "pointer",
  },
  SetMouseCursor: {
    name: "SetMouseCursor",
    parameters: ["i32"],
    result: "void",
  },
  GetTouchX: {
    name: "GetTouchX",
    parameters: [],
    result: "i32",
  },
  GetTouchY: {
    name: "GetTouchY",
    parameters: [],
    result: "i32",
  },
  GetTouchPosition: {
    name: "GetTouchPosition",
    parameters: ["i32"],
    result: "pointer",
  },
  GetTouchPointId: {
    name: "GetTouchPointId",
    parameters: ["i32"],
    result: "i32",
  },
  GetTouchPointCount: {
    name: "GetTouchPointCount",
    parameters: [],
    result: "i32",
  },
  SetGesturesEnabled: {
    name: "SetGesturesEnabled",
    parameters: ["u64"],
    result: "void",
  },
  IsGestureDetected: {
    name: "IsGestureDetected",
    parameters: ["u64"],
    result: "bool",
  },
  GetGestureDetected: {
    name: "GetGestureDetected",
    parameters: [],
    result: "i32",
  },
  GetGestureHoldDuration: {
    name: "GetGestureHoldDuration",
    parameters: [],
    result: "f64",
  },
  GetGestureDragVector: {
    name: "GetGestureDragVector",
    parameters: [],
    result: "pointer",
  },
  GetGestureDragAngle: {
    name: "GetGestureDragAngle",
    parameters: [],
    result: "f64",
  },
  GetGesturePinchVector: {
    name: "GetGesturePinchVector",
    parameters: [],
    result: "pointer",
  },
  GetGesturePinchAngle: {
    name: "GetGesturePinchAngle",
    parameters: [],
    result: "f64",
  },
  UpdateCamera: {
    name: "UpdateCamera",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  UpdateCameraPro: {
    name: "UpdateCameraPro",
    parameters: ["pointer", "pointer", "pointer", "f64"],
    result: "void",
  },
  SetShapesTexture: {
    name: "SetShapesTexture",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  GetShapesTexture: {
    name: "GetShapesTexture",
    parameters: [],
    result: "pointer",
  },
  GetShapesTextureRectangle: {
    name: "GetShapesTextureRectangle",
    parameters: [],
    result: "pointer",
  },
  DrawPixel: {
    name: "DrawPixel",
    parameters: ["i32", "i32", "pointer"],
    result: "void",
  },
  DrawPixelV: {
    name: "DrawPixelV",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  DrawLine: {
    name: "DrawLine",
    parameters: ["i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  DrawLineV: {
    name: "DrawLineV",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawLineEx: {
    name: "DrawLineEx",
    parameters: ["pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawLineStrip: {
    name: "DrawLineStrip",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  DrawLineBezier: {
    name: "DrawLineBezier",
    parameters: ["pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawCircle: {
    name: "DrawCircle",
    parameters: ["i32", "i32", "f64", "pointer"],
    result: "void",
  },
  DrawCircleSector: {
    name: "DrawCircleSector",
    parameters: ["pointer", "f64", "f64", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawCircleSectorLines: {
    name: "DrawCircleSectorLines",
    parameters: ["pointer", "f64", "f64", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawCircleGradient: {
    name: "DrawCircleGradient",
    parameters: ["i32", "i32", "f64", "pointer", "pointer"],
    result: "void",
  },
  DrawCircleV: {
    name: "DrawCircleV",
    parameters: ["pointer", "f64", "pointer"],
    result: "void",
  },
  DrawCircleLines: {
    name: "DrawCircleLines",
    parameters: ["i32", "i32", "f64", "pointer"],
    result: "void",
  },
  DrawCircleLinesV: {
    name: "DrawCircleLinesV",
    parameters: ["pointer", "f64", "pointer"],
    result: "void",
  },
  DrawEllipse: {
    name: "DrawEllipse",
    parameters: ["i32", "i32", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawEllipseLines: {
    name: "DrawEllipseLines",
    parameters: ["i32", "i32", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawRing: {
    name: "DrawRing",
    parameters: ["pointer", "f64", "f64", "f64", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawRingLines: {
    name: "DrawRingLines",
    parameters: ["pointer", "f64", "f64", "f64", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawRectangle: {
    name: "DrawRectangle",
    parameters: ["i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  DrawRectangleV: {
    name: "DrawRectangleV",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawRectangleRec: {
    name: "DrawRectangleRec",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  DrawRectanglePro: {
    name: "DrawRectanglePro",
    parameters: ["pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawRectangleGradientV: {
    name: "DrawRectangleGradientV",
    parameters: ["i32", "i32", "i32", "i32", "pointer", "pointer"],
    result: "void",
  },
  DrawRectangleGradientH: {
    name: "DrawRectangleGradientH",
    parameters: ["i32", "i32", "i32", "i32", "pointer", "pointer"],
    result: "void",
  },
  DrawRectangleGradientEx: {
    name: "DrawRectangleGradientEx",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawRectangleLines: {
    name: "DrawRectangleLines",
    parameters: ["i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  DrawRectangleLinesEx: {
    name: "DrawRectangleLinesEx",
    parameters: ["pointer", "f64", "pointer"],
    result: "void",
  },
  DrawRectangleRounded: {
    name: "DrawRectangleRounded",
    parameters: ["pointer", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawRectangleRoundedLines: {
    name: "DrawRectangleRoundedLines",
    parameters: ["pointer", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawRectangleRoundedLinesEx: {
    name: "DrawRectangleRoundedLinesEx",
    parameters: ["pointer", "f64", "i32", "f64", "pointer"],
    result: "void",
  },
  DrawTriangle: {
    name: "DrawTriangle",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawTriangleLines: {
    name: "DrawTriangleLines",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawTriangleFan: {
    name: "DrawTriangleFan",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  DrawTriangleStrip: {
    name: "DrawTriangleStrip",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  DrawPoly: {
    name: "DrawPoly",
    parameters: ["pointer", "i32", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawPolyLines: {
    name: "DrawPolyLines",
    parameters: ["pointer", "i32", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawPolyLinesEx: {
    name: "DrawPolyLinesEx",
    parameters: ["pointer", "i32", "f64", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawSplineLinear: {
    name: "DrawSplineLinear",
    parameters: ["pointer", "i32", "f64", "pointer"],
    result: "void",
  },
  DrawSplineBasis: {
    name: "DrawSplineBasis",
    parameters: ["pointer", "i32", "f64", "pointer"],
    result: "void",
  },
  DrawSplineCatmullRom: {
    name: "DrawSplineCatmullRom",
    parameters: ["pointer", "i32", "f64", "pointer"],
    result: "void",
  },
  DrawSplineBezierQuadratic: {
    name: "DrawSplineBezierQuadratic",
    parameters: ["pointer", "i32", "f64", "pointer"],
    result: "void",
  },
  DrawSplineBezierCubic: {
    name: "DrawSplineBezierCubic",
    parameters: ["pointer", "i32", "f64", "pointer"],
    result: "void",
  },
  DrawSplineSegmentLinear: {
    name: "DrawSplineSegmentLinear",
    parameters: ["pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawSplineSegmentBasis: {
    name: "DrawSplineSegmentBasis",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawSplineSegmentCatmullRom: {
    name: "DrawSplineSegmentCatmullRom",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawSplineSegmentBezierQuadratic: {
    name: "DrawSplineSegmentBezierQuadratic",
    parameters: ["pointer", "pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawSplineSegmentBezierCubic: {
    name: "DrawSplineSegmentBezierCubic",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  GetSplinePointLinear: {
    name: "GetSplinePointLinear",
    parameters: ["pointer", "pointer", "f64"],
    result: "pointer",
  },
  GetSplinePointBasis: {
    name: "GetSplinePointBasis",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64"],
    result: "pointer",
  },
  GetSplinePointCatmullRom: {
    name: "GetSplinePointCatmullRom",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64"],
    result: "pointer",
  },
  GetSplinePointBezierQuad: {
    name: "GetSplinePointBezierQuad",
    parameters: ["pointer", "pointer", "pointer", "f64"],
    result: "pointer",
  },
  GetSplinePointBezierCubic: {
    name: "GetSplinePointBezierCubic",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64"],
    result: "pointer",
  },
  CheckCollisionRecs: {
    name: "CheckCollisionRecs",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  CheckCollisionCircles: {
    name: "CheckCollisionCircles",
    parameters: ["pointer", "f64", "pointer", "f64"],
    result: "bool",
  },
  CheckCollisionCircleRec: {
    name: "CheckCollisionCircleRec",
    parameters: ["pointer", "f64", "pointer"],
    result: "bool",
  },
  CheckCollisionCircleLine: {
    name: "CheckCollisionCircleLine",
    parameters: ["pointer", "f64", "pointer", "pointer"],
    result: "bool",
  },
  CheckCollisionPointRec: {
    name: "CheckCollisionPointRec",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  CheckCollisionPointCircle: {
    name: "CheckCollisionPointCircle",
    parameters: ["pointer", "pointer", "f64"],
    result: "bool",
  },
  CheckCollisionPointTriangle: {
    name: "CheckCollisionPointTriangle",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "bool",
  },
  CheckCollisionPointLine: {
    name: "CheckCollisionPointLine",
    parameters: ["pointer", "pointer", "pointer", "i32"],
    result: "bool",
  },
  CheckCollisionPointPoly: {
    name: "CheckCollisionPointPoly",
    parameters: ["pointer", "pointer", "i32"],
    result: "bool",
  },
  CheckCollisionLines: {
    name: "CheckCollisionLines",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "bool",
  },
  GetCollisionRec: {
    name: "GetCollisionRec",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  LoadImage: {
    name: "LoadImage",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadImageRaw: {
    name: "LoadImageRaw",
    parameters: ["pointer", "i32", "i32", "i32", "i32"],
    result: "pointer",
  },
  LoadImageAnim: {
    name: "LoadImageAnim",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  LoadImageAnimFromMemory: {
    name: "LoadImageAnimFromMemory",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "pointer",
  },
  LoadImageFromMemory: {
    name: "LoadImageFromMemory",
    parameters: ["pointer", "pointer", "i32"],
    result: "pointer",
  },
  LoadImageFromTexture: {
    name: "LoadImageFromTexture",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadImageFromScreen: {
    name: "LoadImageFromScreen",
    parameters: [],
    result: "pointer",
  },
  IsImageValid: {
    name: "IsImageValid",
    parameters: ["pointer"],
    result: "bool",
  },
  UnloadImage: {
    name: "UnloadImage",
    parameters: ["pointer"],
    result: "void",
  },
  ExportImage: {
    name: "ExportImage",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  ExportImageToMemory: {
    name: "ExportImageToMemory",
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  ExportImageAsCode: {
    name: "ExportImageAsCode",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  GenImageColor: {
    name: "GenImageColor",
    parameters: ["i32", "i32", "pointer"],
    result: "pointer",
  },
  GenImageGradientLinear: {
    name: "GenImageGradientLinear",
    parameters: ["i32", "i32", "i32", "pointer", "pointer"],
    result: "pointer",
  },
  GenImageGradientRadial: {
    name: "GenImageGradientRadial",
    parameters: ["i32", "i32", "f64", "pointer", "pointer"],
    result: "pointer",
  },
  GenImageGradientSquare: {
    name: "GenImageGradientSquare",
    parameters: ["i32", "i32", "f64", "pointer", "pointer"],
    result: "pointer",
  },
  GenImageChecked: {
    name: "GenImageChecked",
    parameters: ["i32", "i32", "i32", "i32", "pointer", "pointer"],
    result: "pointer",
  },
  GenImageWhiteNoise: {
    name: "GenImageWhiteNoise",
    parameters: ["i32", "i32", "f64"],
    result: "pointer",
  },
  GenImagePerlinNoise: {
    name: "GenImagePerlinNoise",
    parameters: ["i32", "i32", "i32", "i32", "f64"],
    result: "pointer",
  },
  GenImageCellular: {
    name: "GenImageCellular",
    parameters: ["i32", "i32", "i32"],
    result: "pointer",
  },
  GenImageText: {
    name: "GenImageText",
    parameters: ["i32", "i32", "pointer"],
    result: "pointer",
  },
  ImageCopy: {
    name: "ImageCopy",
    parameters: ["pointer"],
    result: "pointer",
  },
  ImageFromImage: {
    name: "ImageFromImage",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  ImageFromChannel: {
    name: "ImageFromChannel",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  ImageText: {
    name: "ImageText",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  ImageTextEx: {
    name: "ImageTextEx",
    parameters: ["pointer", "pointer", "f64", "f64", "pointer"],
    result: "pointer",
  },
  ImageFormat: {
    name: "ImageFormat",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  ImageToPOT: {
    name: "ImageToPOT",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  ImageCrop: {
    name: "ImageCrop",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  ImageAlphaCrop: {
    name: "ImageAlphaCrop",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  ImageAlphaClear: {
    name: "ImageAlphaClear",
    parameters: ["pointer", "pointer", "f64"],
    result: "void",
  },
  ImageAlphaMask: {
    name: "ImageAlphaMask",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  ImageAlphaPremultiply: {
    name: "ImageAlphaPremultiply",
    parameters: ["pointer"],
    result: "void",
  },
  ImageBlurGaussian: {
    name: "ImageBlurGaussian",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  ImageKernelConvolution: {
    name: "ImageKernelConvolution",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  ImageResize: {
    name: "ImageResize",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  ImageResizeNN: {
    name: "ImageResizeNN",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  ImageResizeCanvas: {
    name: "ImageResizeCanvas",
    parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  ImageMipmaps: {
    name: "ImageMipmaps",
    parameters: ["pointer"],
    result: "void",
  },
  ImageDither: {
    name: "ImageDither",
    parameters: ["pointer", "i32", "i32", "i32", "i32"],
    result: "void",
  },
  ImageFlipVertical: {
    name: "ImageFlipVertical",
    parameters: ["pointer"],
    result: "void",
  },
  ImageFlipHorizontal: {
    name: "ImageFlipHorizontal",
    parameters: ["pointer"],
    result: "void",
  },
  ImageRotate: {
    name: "ImageRotate",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  ImageRotateCW: {
    name: "ImageRotateCW",
    parameters: ["pointer"],
    result: "void",
  },
  ImageRotateCCW: {
    name: "ImageRotateCCW",
    parameters: ["pointer"],
    result: "void",
  },
  ImageColorTint: {
    name: "ImageColorTint",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  ImageColorInvert: {
    name: "ImageColorInvert",
    parameters: ["pointer"],
    result: "void",
  },
  ImageColorGrayscale: {
    name: "ImageColorGrayscale",
    parameters: ["pointer"],
    result: "void",
  },
  ImageColorContrast: {
    name: "ImageColorContrast",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  ImageColorBrightness: {
    name: "ImageColorBrightness",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  ImageColorReplace: {
    name: "ImageColorReplace",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  LoadImageColors: {
    name: "LoadImageColors",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadImagePalette: {
    name: "LoadImagePalette",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  UnloadImageColors: {
    name: "UnloadImageColors",
    parameters: ["pointer"],
    result: "void",
  },
  UnloadImagePalette: {
    name: "UnloadImagePalette",
    parameters: ["pointer"],
    result: "void",
  },
  GetImageAlphaBorder: {
    name: "GetImageAlphaBorder",
    parameters: ["pointer", "f64"],
    result: "pointer",
  },
  GetImageColor: {
    name: "GetImageColor",
    parameters: ["pointer", "i32", "i32"],
    result: "pointer",
  },
  ImageClearBackground: {
    name: "ImageClearBackground",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  ImageDrawPixel: {
    name: "ImageDrawPixel",
    parameters: ["pointer", "i32", "i32", "pointer"],
    result: "void",
  },
  ImageDrawPixelV: {
    name: "ImageDrawPixelV",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  ImageDrawLine: {
    name: "ImageDrawLine",
    parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  ImageDrawLineV: {
    name: "ImageDrawLineV",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  ImageDrawLineEx: {
    name: "ImageDrawLineEx",
    parameters: ["pointer", "pointer", "pointer", "i32", "pointer"],
    result: "void",
  },
  ImageDrawCircle: {
    name: "ImageDrawCircle",
    parameters: ["pointer", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  ImageDrawCircleV: {
    name: "ImageDrawCircleV",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "void",
  },
  ImageDrawCircleLines: {
    name: "ImageDrawCircleLines",
    parameters: ["pointer", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  ImageDrawCircleLinesV: {
    name: "ImageDrawCircleLinesV",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "void",
  },
  ImageDrawRectangle: {
    name: "ImageDrawRectangle",
    parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  ImageDrawRectangleV: {
    name: "ImageDrawRectangleV",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  ImageDrawRectangleRec: {
    name: "ImageDrawRectangleRec",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  ImageDrawRectangleLines: {
    name: "ImageDrawRectangleLines",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "void",
  },
  ImageDrawTriangle: {
    name: "ImageDrawTriangle",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  ImageDrawTriangleEx: {
    name: "ImageDrawTriangleEx",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  ImageDrawTriangleLines: {
    name: "ImageDrawTriangleLines",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  ImageDrawTriangleFan: {
    name: "ImageDrawTriangleFan",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "void",
  },
  ImageDrawTriangleStrip: {
    name: "ImageDrawTriangleStrip",
    parameters: ["pointer", "pointer", "i32", "pointer"],
    result: "void",
  },
  ImageDraw: {
    name: "ImageDraw",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  ImageDrawText: {
    name: "ImageDrawText",
    parameters: ["pointer", "pointer", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  ImageDrawTextEx: {
    name: "ImageDrawTextEx",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64", "f64", "pointer"],
    result: "void",
  },
  LoadTexture: {
    name: "LoadTexture",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadTextureFromImage: {
    name: "LoadTextureFromImage",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadTextureCubemap: {
    name: "LoadTextureCubemap",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  LoadRenderTexture: {
    name: "LoadRenderTexture",
    parameters: ["i32", "i32"],
    result: "pointer",
  },
  IsTextureValid: {
    name: "IsTextureValid",
    parameters: ["pointer"],
    result: "bool",
  },
  UnloadTexture: {
    name: "UnloadTexture",
    parameters: ["pointer"],
    result: "void",
  },
  IsRenderTextureValid: {
    name: "IsRenderTextureValid",
    parameters: ["pointer"],
    result: "bool",
  },
  UnloadRenderTexture: {
    name: "UnloadRenderTexture",
    parameters: ["pointer"],
    result: "void",
  },
  UpdateTexture: {
    name: "UpdateTexture",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  UpdateTextureRec: {
    name: "UpdateTextureRec",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  GenTextureMipmaps: {
    name: "GenTextureMipmaps",
    parameters: ["pointer"],
    result: "void",
  },
  SetTextureFilter: {
    name: "SetTextureFilter",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  SetTextureWrap: {
    name: "SetTextureWrap",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  DrawTexture: {
    name: "DrawTexture",
    parameters: ["pointer", "i32", "i32", "pointer"],
    result: "void",
  },
  DrawTextureV: {
    name: "DrawTextureV",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawTextureEx: {
    name: "DrawTextureEx",
    parameters: ["pointer", "pointer", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawTextureRec: {
    name: "DrawTextureRec",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawTexturePro: {
    name: "DrawTexturePro",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawTextureNPatch: {
    name: "DrawTextureNPatch",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  ColorIsEqual: {
    name: "ColorIsEqual",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  Fade: {
    name: "Fade",
    parameters: ["pointer", "f64"],
    result: "pointer",
  },
  ColorToInt: {
    name: "ColorToInt",
    parameters: ["pointer"],
    result: "i32",
  },
  ColorNormalize: {
    name: "ColorNormalize",
    parameters: ["pointer"],
    result: "pointer",
  },
  ColorFromNormalized: {
    name: "ColorFromNormalized",
    parameters: ["pointer"],
    result: "pointer",
  },
  ColorToHSV: {
    name: "ColorToHSV",
    parameters: ["pointer"],
    result: "pointer",
  },
  ColorFromHSV: {
    name: "ColorFromHSV",
    parameters: ["f64", "f64", "f64"],
    result: "pointer",
  },
  ColorTint: {
    name: "ColorTint",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  ColorBrightness: {
    name: "ColorBrightness",
    parameters: ["pointer", "f64"],
    result: "pointer",
  },
  ColorContrast: {
    name: "ColorContrast",
    parameters: ["pointer", "f64"],
    result: "pointer",
  },
  ColorAlpha: {
    name: "ColorAlpha",
    parameters: ["pointer", "f64"],
    result: "pointer",
  },
  ColorAlphaBlend: {
    name: "ColorAlphaBlend",
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  ColorLerp: {
    name: "ColorLerp",
    parameters: ["pointer", "pointer", "f64"],
    result: "pointer",
  },
  GetColor: {
    name: "GetColor",
    parameters: ["u64"],
    result: "pointer",
  },
  GetPixelColor: {
    name: "GetPixelColor",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  SetPixelColor: {
    name: "SetPixelColor",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  GetPixelDataSize: {
    name: "GetPixelDataSize",
    parameters: ["i32", "i32", "i32"],
    result: "i32",
  },
  GetFontDefault: {
    name: "GetFontDefault",
    parameters: [],
    result: "pointer",
  },
  LoadFont: {
    name: "LoadFont",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadFontEx: {
    name: "LoadFontEx",
    parameters: ["pointer", "i32", "pointer", "i32"],
    result: "pointer",
  },
  LoadFontFromImage: {
    name: "LoadFontFromImage",
    parameters: ["pointer", "pointer", "i32"],
    result: "pointer",
  },
  LoadFontFromMemory: {
    name: "LoadFontFromMemory",
    parameters: ["pointer", "pointer", "i32", "i32", "pointer", "i32"],
    result: "pointer",
  },
  IsFontValid: {
    name: "IsFontValid",
    parameters: ["pointer"],
    result: "bool",
  },
  LoadFontData: {
    name: "LoadFontData",
    parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"],
    result: "pointer",
  },
  GenImageFontAtlas: {
    name: "GenImageFontAtlas",
    parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32"],
    result: "pointer",
  },
  UnloadFontData: {
    name: "UnloadFontData",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  UnloadFont: {
    name: "UnloadFont",
    parameters: ["pointer"],
    result: "void",
  },
  ExportFontAsCode: {
    name: "ExportFontAsCode",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  DrawFPS: {
    name: "DrawFPS",
    parameters: ["i32", "i32"],
    result: "void",
  },
  DrawText: {
    name: "DrawText",
    parameters: ["pointer", "i32", "i32", "i32", "pointer"],
    result: "void",
  },
  DrawTextEx: {
    name: "DrawTextEx",
    parameters: ["pointer", "pointer", "pointer", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawTextPro: {
    name: "DrawTextPro",
    parameters: ["pointer", "pointer", "pointer", "pointer", "f64", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawTextCodepoint: {
    name: "DrawTextCodepoint",
    parameters: ["pointer", "i32", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawTextCodepoints: {
    name: "DrawTextCodepoints",
    parameters: ["pointer", "pointer", "i32", "pointer", "f64", "f64", "pointer"],
    result: "void",
  },
  SetTextLineSpacing: {
    name: "SetTextLineSpacing",
    parameters: ["i32"],
    result: "void",
  },
  MeasureText: {
    name: "MeasureText",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  MeasureTextEx: {
    name: "MeasureTextEx",
    parameters: ["pointer", "pointer", "f64", "f64"],
    result: "pointer",
  },
  GetGlyphIndex: {
    name: "GetGlyphIndex",
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  GetGlyphInfo: {
    name: "GetGlyphInfo",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  GetGlyphAtlasRec: {
    name: "GetGlyphAtlasRec",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  LoadUTF8: {
    name: "LoadUTF8",
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  UnloadUTF8: {
    name: "UnloadUTF8",
    parameters: ["pointer"],
    result: "void",
  },
  LoadCodepoints: {
    name: "LoadCodepoints",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  UnloadCodepoints: {
    name: "UnloadCodepoints",
    parameters: ["pointer"],
    result: "void",
  },
  GetCodepointCount: {
    name: "GetCodepointCount",
    parameters: ["pointer"],
    result: "i32",
  },
  GetCodepoint: {
    name: "GetCodepoint",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  GetCodepointNext: {
    name: "GetCodepointNext",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  GetCodepointPrevious: {
    name: "GetCodepointPrevious",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  CodepointToUTF8: {
    name: "CodepointToUTF8",
    parameters: ["i32", "pointer"],
    result: "pointer",
  },
  TextCopy: {
    name: "TextCopy",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  TextIsEqual: {
    name: "TextIsEqual",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  TextLength: {
    name: "TextLength",
    parameters: ["pointer"],
    result: "u64",
  },
  TextFormat: {
    name: "TextFormat",
    parameters: ["pointer"],
    result: "pointer",
  },
  TextSubtext: {
    name: "TextSubtext",
    parameters: ["pointer", "i32", "i32"],
    result: "pointer",
  },
  TextReplace: {
    name: "TextReplace",
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  TextInsert: {
    name: "TextInsert",
    parameters: ["pointer", "pointer", "i32"],
    result: "pointer",
  },
  TextJoin: {
    name: "TextJoin",
    parameters: ["pointer", "i32", "pointer"],
    result: "pointer",
  },
  TextSplit: {
    name: "TextSplit",
    parameters: ["pointer", "i8", "pointer"],
    result: "pointer",
  },
  TextAppend: {
    name: "TextAppend",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  TextFindIndex: {
    name: "TextFindIndex",
    parameters: ["pointer", "pointer"],
    result: "i32",
  },
  TextToUpper: {
    name: "TextToUpper",
    parameters: ["pointer"],
    result: "pointer",
  },
  TextToLower: {
    name: "TextToLower",
    parameters: ["pointer"],
    result: "pointer",
  },
  TextToPascal: {
    name: "TextToPascal",
    parameters: ["pointer"],
    result: "pointer",
  },
  TextToSnake: {
    name: "TextToSnake",
    parameters: ["pointer"],
    result: "pointer",
  },
  TextToCamel: {
    name: "TextToCamel",
    parameters: ["pointer"],
    result: "pointer",
  },
  TextToInteger: {
    name: "TextToInteger",
    parameters: ["pointer"],
    result: "i32",
  },
  TextToFloat: {
    name: "TextToFloat",
    parameters: ["pointer"],
    result: "f64",
  },
  DrawLine3D: {
    name: "DrawLine3D",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawPoint3D: {
    name: "DrawPoint3D",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  DrawCircle3D: {
    name: "DrawCircle3D",
    parameters: ["pointer", "f64", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawTriangle3D: {
    name: "DrawTriangle3D",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawTriangleStrip3D: {
    name: "DrawTriangleStrip3D",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  DrawCube: {
    name: "DrawCube",
    parameters: ["pointer", "f64", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawCubeV: {
    name: "DrawCubeV",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawCubeWires: {
    name: "DrawCubeWires",
    parameters: ["pointer", "f64", "f64", "f64", "pointer"],
    result: "void",
  },
  DrawCubeWiresV: {
    name: "DrawCubeWiresV",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawSphere: {
    name: "DrawSphere",
    parameters: ["pointer", "f64", "pointer"],
    result: "void",
  },
  DrawSphereEx: {
    name: "DrawSphereEx",
    parameters: ["pointer", "f64", "i32", "i32", "pointer"],
    result: "void",
  },
  DrawSphereWires: {
    name: "DrawSphereWires",
    parameters: ["pointer", "f64", "i32", "i32", "pointer"],
    result: "void",
  },
  DrawCylinder: {
    name: "DrawCylinder",
    parameters: ["pointer", "f64", "f64", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawCylinderEx: {
    name: "DrawCylinderEx",
    parameters: ["pointer", "pointer", "f64", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawCylinderWires: {
    name: "DrawCylinderWires",
    parameters: ["pointer", "f64", "f64", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawCylinderWiresEx: {
    name: "DrawCylinderWiresEx",
    parameters: ["pointer", "pointer", "f64", "f64", "i32", "pointer"],
    result: "void",
  },
  DrawCapsule: {
    name: "DrawCapsule",
    parameters: ["pointer", "pointer", "f64", "i32", "i32", "pointer"],
    result: "void",
  },
  DrawCapsuleWires: {
    name: "DrawCapsuleWires",
    parameters: ["pointer", "pointer", "f64", "i32", "i32", "pointer"],
    result: "void",
  },
  DrawPlane: {
    name: "DrawPlane",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawRay: {
    name: "DrawRay",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  DrawGrid: {
    name: "DrawGrid",
    parameters: ["i32", "f64"],
    result: "void",
  },
  LoadModel: {
    name: "LoadModel",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadModelFromMesh: {
    name: "LoadModelFromMesh",
    parameters: ["pointer"],
    result: "pointer",
  },
  IsModelValid: {
    name: "IsModelValid",
    parameters: ["pointer"],
    result: "bool",
  },
  UnloadModel: {
    name: "UnloadModel",
    parameters: ["pointer"],
    result: "void",
  },
  GetModelBoundingBox: {
    name: "GetModelBoundingBox",
    parameters: ["pointer"],
    result: "pointer",
  },
  DrawModel: {
    name: "DrawModel",
    parameters: ["pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawModelEx: {
    name: "DrawModelEx",
    parameters: ["pointer", "pointer", "pointer", "f64", "pointer", "pointer"],
    result: "void",
  },
  DrawModelWires: {
    name: "DrawModelWires",
    parameters: ["pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawModelWiresEx: {
    name: "DrawModelWiresEx",
    parameters: ["pointer", "pointer", "pointer", "f64", "pointer", "pointer"],
    result: "void",
  },
  DrawModelPoints: {
    name: "DrawModelPoints",
    parameters: ["pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawModelPointsEx: {
    name: "DrawModelPointsEx",
    parameters: ["pointer", "pointer", "pointer", "f64", "pointer", "pointer"],
    result: "void",
  },
  DrawBoundingBox: {
    name: "DrawBoundingBox",
    parameters: ["pointer", "pointer"],
    result: "void",
  },
  DrawBillboard: {
    name: "DrawBillboard",
    parameters: ["pointer", "pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  DrawBillboardRec: {
    name: "DrawBillboardRec",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawBillboardPro: {
    name: "DrawBillboardPro",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "f64", "pointer"],
    result: "void",
  },
  UploadMesh: {
    name: "UploadMesh",
    parameters: ["pointer", "bool"],
    result: "void",
  },
  UpdateMeshBuffer: {
    name: "UpdateMeshBuffer",
    parameters: ["pointer", "i32", "pointer", "i32", "i32"],
    result: "void",
  },
  UnloadMesh: {
    name: "UnloadMesh",
    parameters: ["pointer"],
    result: "void",
  },
  DrawMesh: {
    name: "DrawMesh",
    parameters: ["pointer", "pointer", "pointer"],
    result: "void",
  },
  DrawMeshInstanced: {
    name: "DrawMeshInstanced",
    parameters: ["pointer", "pointer", "pointer", "i32"],
    result: "void",
  },
  GetMeshBoundingBox: {
    name: "GetMeshBoundingBox",
    parameters: ["pointer"],
    result: "pointer",
  },
  GenMeshTangents: {
    name: "GenMeshTangents",
    parameters: ["pointer"],
    result: "void",
  },
  ExportMesh: {
    name: "ExportMesh",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  ExportMeshAsCode: {
    name: "ExportMeshAsCode",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  GenMeshPoly: {
    name: "GenMeshPoly",
    parameters: ["i32", "f64"],
    result: "pointer",
  },
  GenMeshPlane: {
    name: "GenMeshPlane",
    parameters: ["f64", "f64", "i32", "i32"],
    result: "pointer",
  },
  GenMeshCube: {
    name: "GenMeshCube",
    parameters: ["f64", "f64", "f64"],
    result: "pointer",
  },
  GenMeshSphere: {
    name: "GenMeshSphere",
    parameters: ["f64", "i32", "i32"],
    result: "pointer",
  },
  GenMeshHemiSphere: {
    name: "GenMeshHemiSphere",
    parameters: ["f64", "i32", "i32"],
    result: "pointer",
  },
  GenMeshCylinder: {
    name: "GenMeshCylinder",
    parameters: ["f64", "f64", "i32"],
    result: "pointer",
  },
  GenMeshCone: {
    name: "GenMeshCone",
    parameters: ["f64", "f64", "i32"],
    result: "pointer",
  },
  GenMeshTorus: {
    name: "GenMeshTorus",
    parameters: ["f64", "f64", "i32", "i32"],
    result: "pointer",
  },
  GenMeshKnot: {
    name: "GenMeshKnot",
    parameters: ["f64", "f64", "i32", "i32"],
    result: "pointer",
  },
  GenMeshHeightmap: {
    name: "GenMeshHeightmap",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  GenMeshCubicmap: {
    name: "GenMeshCubicmap",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  LoadMaterials: {
    name: "LoadMaterials",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  LoadMaterialDefault: {
    name: "LoadMaterialDefault",
    parameters: [],
    result: "pointer",
  },
  IsMaterialValid: {
    name: "IsMaterialValid",
    parameters: ["pointer"],
    result: "bool",
  },
  UnloadMaterial: {
    name: "UnloadMaterial",
    parameters: ["pointer"],
    result: "void",
  },
  SetMaterialTexture: {
    name: "SetMaterialTexture",
    parameters: ["pointer", "i32", "pointer"],
    result: "void",
  },
  SetModelMeshMaterial: {
    name: "SetModelMeshMaterial",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  LoadModelAnimations: {
    name: "LoadModelAnimations",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  UpdateModelAnimation: {
    name: "UpdateModelAnimation",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  UpdateModelAnimationBones: {
    name: "UpdateModelAnimationBones",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  UnloadModelAnimation: {
    name: "UnloadModelAnimation",
    parameters: ["pointer"],
    result: "void",
  },
  UnloadModelAnimations: {
    name: "UnloadModelAnimations",
    parameters: ["pointer", "i32"],
    result: "void",
  },
  IsModelAnimationValid: {
    name: "IsModelAnimationValid",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  CheckCollisionSpheres: {
    name: "CheckCollisionSpheres",
    parameters: ["pointer", "f64", "pointer", "f64"],
    result: "bool",
  },
  CheckCollisionBoxes: {
    name: "CheckCollisionBoxes",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  CheckCollisionBoxSphere: {
    name: "CheckCollisionBoxSphere",
    parameters: ["pointer", "pointer", "f64"],
    result: "bool",
  },
  GetRayCollisionSphere: {
    name: "GetRayCollisionSphere",
    parameters: ["pointer", "pointer", "f64"],
    result: "pointer",
  },
  GetRayCollisionBox: {
    name: "GetRayCollisionBox",
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
  GetRayCollisionMesh: {
    name: "GetRayCollisionMesh",
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  GetRayCollisionTriangle: {
    name: "GetRayCollisionTriangle",
    parameters: ["pointer", "pointer", "pointer", "pointer"],
    result: "pointer",
  },
  GetRayCollisionQuad: {
    name: "GetRayCollisionQuad",
    parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
    result: "pointer",
  },
  InitAudioDevice: {
    name: "InitAudioDevice",
    parameters: [],
    result: "void",
  },
  CloseAudioDevice: {
    name: "CloseAudioDevice",
    parameters: [],
    result: "void",
  },
  IsAudioDeviceReady: {
    name: "IsAudioDeviceReady",
    parameters: [],
    result: "bool",
  },
  SetMasterVolume: {
    name: "SetMasterVolume",
    parameters: ["f64"],
    result: "void",
  },
  GetMasterVolume: {
    name: "GetMasterVolume",
    parameters: [],
    result: "f64",
  },
  LoadWave: {
    name: "LoadWave",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadWaveFromMemory: {
    name: "LoadWaveFromMemory",
    parameters: ["pointer", "pointer", "i32"],
    result: "pointer",
  },
  IsWaveValid: {
    name: "IsWaveValid",
    parameters: ["pointer"],
    result: "bool",
  },
  LoadSound: {
    name: "LoadSound",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadSoundFromWave: {
    name: "LoadSoundFromWave",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadSoundAlias: {
    name: "LoadSoundAlias",
    parameters: ["pointer"],
    result: "pointer",
  },
  IsSoundValid: {
    name: "IsSoundValid",
    parameters: ["pointer"],
    result: "bool",
  },
  UpdateSound: {
    name: "UpdateSound",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  UnloadWave: {
    name: "UnloadWave",
    parameters: ["pointer"],
    result: "void",
  },
  UnloadSound: {
    name: "UnloadSound",
    parameters: ["pointer"],
    result: "void",
  },
  UnloadSoundAlias: {
    name: "UnloadSoundAlias",
    parameters: ["pointer"],
    result: "void",
  },
  ExportWave: {
    name: "ExportWave",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  ExportWaveAsCode: {
    name: "ExportWaveAsCode",
    parameters: ["pointer", "pointer"],
    result: "bool",
  },
  PlaySound: {
    name: "PlaySound",
    parameters: ["pointer"],
    result: "void",
  },
  StopSound: {
    name: "StopSound",
    parameters: ["pointer"],
    result: "void",
  },
  PauseSound: {
    name: "PauseSound",
    parameters: ["pointer"],
    result: "void",
  },
  ResumeSound: {
    name: "ResumeSound",
    parameters: ["pointer"],
    result: "void",
  },
  IsSoundPlaying: {
    name: "IsSoundPlaying",
    parameters: ["pointer"],
    result: "bool",
  },
  SetSoundVolume: {
    name: "SetSoundVolume",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  SetSoundPitch: {
    name: "SetSoundPitch",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  SetSoundPan: {
    name: "SetSoundPan",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  WaveCopy: {
    name: "WaveCopy",
    parameters: ["pointer"],
    result: "pointer",
  },
  WaveCrop: {
    name: "WaveCrop",
    parameters: ["pointer", "i32", "i32"],
    result: "void",
  },
  WaveFormat: {
    name: "WaveFormat",
    parameters: ["pointer", "i32", "i32", "i32"],
    result: "void",
  },
  LoadWaveSamples: {
    name: "LoadWaveSamples",
    parameters: ["pointer"],
    result: "pointer",
  },
  UnloadWaveSamples: {
    name: "UnloadWaveSamples",
    parameters: ["pointer"],
    result: "void",
  },
  LoadMusicStream: {
    name: "LoadMusicStream",
    parameters: ["pointer"],
    result: "pointer",
  },
  LoadMusicStreamFromMemory: {
    name: "LoadMusicStreamFromMemory",
    parameters: ["pointer", "pointer", "i32"],
    result: "pointer",
  },
  IsMusicValid: {
    name: "IsMusicValid",
    parameters: ["pointer"],
    result: "bool",
  },
  UnloadMusicStream: {
    name: "UnloadMusicStream",
    parameters: ["pointer"],
    result: "void",
  },
  PlayMusicStream: {
    name: "PlayMusicStream",
    parameters: ["pointer"],
    result: "void",
  },
  IsMusicStreamPlaying: {
    name: "IsMusicStreamPlaying",
    parameters: ["pointer"],
    result: "bool",
  },
  UpdateMusicStream: {
    name: "UpdateMusicStream",
    parameters: ["pointer"],
    result: "void",
  },
  StopMusicStream: {
    name: "StopMusicStream",
    parameters: ["pointer"],
    result: "void",
  },
  PauseMusicStream: {
    name: "PauseMusicStream",
    parameters: ["pointer"],
    result: "void",
  },
  ResumeMusicStream: {
    name: "ResumeMusicStream",
    parameters: ["pointer"],
    result: "void",
  },
  SeekMusicStream: {
    name: "SeekMusicStream",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  SetMusicVolume: {
    name: "SetMusicVolume",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  SetMusicPitch: {
    name: "SetMusicPitch",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  SetMusicPan: {
    name: "SetMusicPan",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  GetMusicTimeLength: {
    name: "GetMusicTimeLength",
    parameters: ["pointer"],
    result: "f64",
  },
  GetMusicTimePlayed: {
    name: "GetMusicTimePlayed",
    parameters: ["pointer"],
    result: "f64",
  },
  LoadAudioStream: {
    name: "LoadAudioStream",
    parameters: ["u64", "u64", "u64"],
    result: "pointer",
  },
  IsAudioStreamValid: {
    name: "IsAudioStreamValid",
    parameters: ["pointer"],
    result: "bool",
  },
  UnloadAudioStream: {
    name: "UnloadAudioStream",
    parameters: ["pointer"],
    result: "void",
  },
  UpdateAudioStream: {
    name: "UpdateAudioStream",
    parameters: ["pointer", "pointer", "i32"],
    result: "void",
  },
  IsAudioStreamProcessed: {
    name: "IsAudioStreamProcessed",
    parameters: ["pointer"],
    result: "bool",
  },
  PlayAudioStream: {
    name: "PlayAudioStream",
    parameters: ["pointer"],
    result: "void",
  },
  PauseAudioStream: {
    name: "PauseAudioStream",
    parameters: ["pointer"],
    result: "void",
  },
  ResumeAudioStream: {
    name: "ResumeAudioStream",
    parameters: ["pointer"],
    result: "void",
  },
  IsAudioStreamPlaying: {
    name: "IsAudioStreamPlaying",
    parameters: ["pointer"],
    result: "bool",
  },
  StopAudioStream: {
    name: "StopAudioStream",
    parameters: ["pointer"],
    result: "void",
  },
  SetAudioStreamVolume: {
    name: "SetAudioStreamVolume",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  SetAudioStreamPitch: {
    name: "SetAudioStreamPitch",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  SetAudioStreamPan: {
    name: "SetAudioStreamPan",
    parameters: ["pointer", "f64"],
    result: "void",
  },
  SetAudioStreamBufferSizeDefault: {
    name: "SetAudioStreamBufferSizeDefault",
    parameters: ["i32"],
    result: "void",
  },
  SetAudioStreamCallback: {
    name: "SetAudioStreamCallback",
    parameters: ["pointer", "function"],
    result: "void",
  },
  AttachAudioStreamProcessor: {
    name: "AttachAudioStreamProcessor",
    parameters: ["pointer", "function"],
    result: "void",
  },
  DetachAudioStreamProcessor: {
    name: "DetachAudioStreamProcessor",
    parameters: ["pointer", "function"],
    result: "void",
  },
  AttachAudioMixedProcessor: {
    name: "AttachAudioMixedProcessor",
    parameters: ["function"],
    result: "void",
  },
  DetachAudioMixedProcessor: {
    name: "DetachAudioMixedProcessor",
    parameters: ["function"],
    result: "void",
  },
} as const satisfies Deno.ForeignLibraryInterface;
