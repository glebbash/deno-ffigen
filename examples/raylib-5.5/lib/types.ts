// deno-lint-ignore-file
// deno-fmt-ignore-file

import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";

export namespace Raylib {
  /** /usr/lib/clang/14.0.6/include/stdarg.h#L14 */
  export type va_list = bigint;

  /** /usr/lib/clang/14.0.6/include/stdarg.h#L32 */
  export type __gnuc_va_list = bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L218 */
  export type Vector2 = StructPointer<"Vector2">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L225 */
  export type Vector3 = StructPointer<"Vector3">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L233 */
  export type Vector4 = StructPointer<"Vector4">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L236 */
  export type Quaternion = Raylib.Vector4;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L244 */
  export type Matrix = StructPointer<"Matrix">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L252 */
  export type Color = StructPointer<"Color">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L260 */
  export type Rectangle = StructPointer<"Rectangle">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L269 */
  export type Image = StructPointer<"Image">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L278 */
  export type Texture = StructPointer<"Texture">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L281 */
  export type Texture2D = Raylib.Texture;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L284 */
  export type TextureCubemap = Raylib.Texture;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L291 */
  export type RenderTexture = StructPointer<"RenderTexture">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L294 */
  export type RenderTexture2D = Raylib.RenderTexture;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L304 */
  export type NPatchInfo = StructPointer<"NPatchInfo">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L313 */
  export type GlyphInfo = StructPointer<"GlyphInfo">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L323 */
  export type Font = StructPointer<"Font">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L332 */
  export type Camera3D = StructPointer<"Camera3D">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L334 */
  export type Camera = Raylib.Camera3D;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L342 */
  export type Camera2D = StructPointer<"Camera2D">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L369 */
  export type Mesh = StructPointer<"Mesh">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L375 */
  export type Shader = StructPointer<"Shader">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L382 */
  export type MaterialMap = StructPointer<"MaterialMap">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L389 */
  export type Material = StructPointer<"Material">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L396 */
  export type Transform = StructPointer<"Transform">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L402 */
  export type BoneInfo = StructPointer<"BoneInfo">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L418 */
  export type Model = StructPointer<"Model">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L427 */
  export type ModelAnimation = StructPointer<"ModelAnimation">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L433 */
  export type Ray = StructPointer<"Ray">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L441 */
  export type RayCollision = StructPointer<"RayCollision">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L447 */
  export type BoundingBox = StructPointer<"BoundingBox">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L456 */
  export type Wave = StructPointer<"Wave">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L460 */
  export type rAudioBuffer = StructPointer<"rAudioBuffer">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L461 */
  export type rAudioProcessor = StructPointer<"rAudioProcessor">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L471 */
  export type AudioStream = StructPointer<"AudioStream">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L477 */
  export type Sound = StructPointer<"Sound">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L487 */
  export type Music = StructPointer<"Music">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L500 */
  export type VrDeviceInfo = StructPointer<"VrDeviceInfo">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L512 */
  export type VrStereoConfig = StructPointer<"VrStereoConfig">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L519 */
  export type FilePathList = StructPointer<"FilePathList">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L526 */
  export type AutomationEvent = StructPointer<"AutomationEvent">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L533 */
  export type AutomationEventList = StructPointer<"AutomationEventList">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L948 */
  export type TraceLogCallback = FnPointer<"TraceLogCallback">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L949 */
  export type LoadFileDataCallback = FnPointer<"LoadFileDataCallback">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L950 */
  export type SaveFileDataCallback = FnPointer<"SaveFileDataCallback">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L951 */
  export type LoadFileTextCallback = FnPointer<"LoadFileTextCallback">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L952 */
  export type SaveFileTextCallback = FnPointer<"SaveFileTextCallback">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1624 */
  export type AudioCallback = FnPointer<"AudioCallback">;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L541 */
  export enum ConfigFlags {
    FLAG_VSYNC_HINT = 64,
    FLAG_FULLSCREEN_MODE = 2,
    FLAG_WINDOW_RESIZABLE = 4,
    FLAG_WINDOW_UNDECORATED = 8,
    FLAG_WINDOW_HIDDEN = 128,
    FLAG_WINDOW_MINIMIZED = 512,
    FLAG_WINDOW_MAXIMIZED = 1024,
    FLAG_WINDOW_UNFOCUSED = 2048,
    FLAG_WINDOW_TOPMOST = 4096,
    FLAG_WINDOW_ALWAYS_RUN = 256,
    FLAG_WINDOW_TRANSPARENT = 16,
    FLAG_WINDOW_HIGHDPI = 8192,
    FLAG_WINDOW_MOUSE_PASSTHROUGH = 16384,
    FLAG_BORDERLESS_WINDOWED_MODE = 32768,
    FLAG_MSAA_4X_HINT = 32,
    FLAG_INTERLACED_HINT = 65536,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L562 */
  export enum TraceLogLevel {
    LOG_ALL = 0,
    LOG_TRACE = 1,
    LOG_DEBUG = 2,
    LOG_INFO = 3,
    LOG_WARNING = 4,
    LOG_ERROR = 5,
    LOG_FATAL = 6,
    LOG_NONE = 7,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L576 */
  export enum KeyboardKey {
    KEY_NULL = 0,
    KEY_APOSTROPHE = 39,
    KEY_COMMA = 44,
    KEY_MINUS = 45,
    KEY_PERIOD = 46,
    KEY_SLASH = 47,
    KEY_ZERO = 48,
    KEY_ONE = 49,
    KEY_TWO = 50,
    KEY_THREE = 51,
    KEY_FOUR = 52,
    KEY_FIVE = 53,
    KEY_SIX = 54,
    KEY_SEVEN = 55,
    KEY_EIGHT = 56,
    KEY_NINE = 57,
    KEY_SEMICOLON = 59,
    KEY_EQUAL = 61,
    KEY_A = 65,
    KEY_B = 66,
    KEY_C = 67,
    KEY_D = 68,
    KEY_E = 69,
    KEY_F = 70,
    KEY_G = 71,
    KEY_H = 72,
    KEY_I = 73,
    KEY_J = 74,
    KEY_K = 75,
    KEY_L = 76,
    KEY_M = 77,
    KEY_N = 78,
    KEY_O = 79,
    KEY_P = 80,
    KEY_Q = 81,
    KEY_R = 82,
    KEY_S = 83,
    KEY_T = 84,
    KEY_U = 85,
    KEY_V = 86,
    KEY_W = 87,
    KEY_X = 88,
    KEY_Y = 89,
    KEY_Z = 90,
    KEY_LEFT_BRACKET = 91,
    KEY_BACKSLASH = 92,
    KEY_RIGHT_BRACKET = 93,
    KEY_GRAVE = 96,
    KEY_SPACE = 32,
    KEY_ESCAPE = 256,
    KEY_ENTER = 257,
    KEY_TAB = 258,
    KEY_BACKSPACE = 259,
    KEY_INSERT = 260,
    KEY_DELETE = 261,
    KEY_RIGHT = 262,
    KEY_LEFT = 263,
    KEY_DOWN = 264,
    KEY_UP = 265,
    KEY_PAGE_UP = 266,
    KEY_PAGE_DOWN = 267,
    KEY_HOME = 268,
    KEY_END = 269,
    KEY_CAPS_LOCK = 280,
    KEY_SCROLL_LOCK = 281,
    KEY_NUM_LOCK = 282,
    KEY_PRINT_SCREEN = 283,
    KEY_PAUSE = 284,
    KEY_F1 = 290,
    KEY_F2 = 291,
    KEY_F3 = 292,
    KEY_F4 = 293,
    KEY_F5 = 294,
    KEY_F6 = 295,
    KEY_F7 = 296,
    KEY_F8 = 297,
    KEY_F9 = 298,
    KEY_F10 = 299,
    KEY_F11 = 300,
    KEY_F12 = 301,
    KEY_LEFT_SHIFT = 340,
    KEY_LEFT_CONTROL = 341,
    KEY_LEFT_ALT = 342,
    KEY_LEFT_SUPER = 343,
    KEY_RIGHT_SHIFT = 344,
    KEY_RIGHT_CONTROL = 345,
    KEY_RIGHT_ALT = 346,
    KEY_RIGHT_SUPER = 347,
    KEY_KB_MENU = 348,
    KEY_KP_0 = 320,
    KEY_KP_1 = 321,
    KEY_KP_2 = 322,
    KEY_KP_3 = 323,
    KEY_KP_4 = 324,
    KEY_KP_5 = 325,
    KEY_KP_6 = 326,
    KEY_KP_7 = 327,
    KEY_KP_8 = 328,
    KEY_KP_9 = 329,
    KEY_KP_DECIMAL = 330,
    KEY_KP_DIVIDE = 331,
    KEY_KP_MULTIPLY = 332,
    KEY_KP_SUBTRACT = 333,
    KEY_KP_ADD = 334,
    KEY_KP_ENTER = 335,
    KEY_KP_EQUAL = 336,
    KEY_BACK = 4,
    KEY_MENU = 5,
    KEY_VOLUME_UP = 24,
    KEY_VOLUME_DOWN = 25,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L699 */
  export enum MouseButton {
    MOUSE_BUTTON_LEFT = 0,
    MOUSE_BUTTON_RIGHT = 1,
    MOUSE_BUTTON_MIDDLE = 2,
    MOUSE_BUTTON_SIDE = 3,
    MOUSE_BUTTON_EXTRA = 4,
    MOUSE_BUTTON_FORWARD = 5,
    MOUSE_BUTTON_BACK = 6,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L710 */
  export enum MouseCursor {
    MOUSE_CURSOR_DEFAULT = 0,
    MOUSE_CURSOR_ARROW = 1,
    MOUSE_CURSOR_IBEAM = 2,
    MOUSE_CURSOR_CROSSHAIR = 3,
    MOUSE_CURSOR_POINTING_HAND = 4,
    MOUSE_CURSOR_RESIZE_EW = 5,
    MOUSE_CURSOR_RESIZE_NS = 6,
    MOUSE_CURSOR_RESIZE_NWSE = 7,
    MOUSE_CURSOR_RESIZE_NESW = 8,
    MOUSE_CURSOR_RESIZE_ALL = 9,
    MOUSE_CURSOR_NOT_ALLOWED = 10,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L725 */
  export enum GamepadButton {
    GAMEPAD_BUTTON_UNKNOWN = 0,
    GAMEPAD_BUTTON_LEFT_FACE_UP = 1,
    GAMEPAD_BUTTON_LEFT_FACE_RIGHT = 2,
    GAMEPAD_BUTTON_LEFT_FACE_DOWN = 3,
    GAMEPAD_BUTTON_LEFT_FACE_LEFT = 4,
    GAMEPAD_BUTTON_RIGHT_FACE_UP = 5,
    GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6,
    GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7,
    GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8,
    GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9,
    GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10,
    GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = 11,
    GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = 12,
    GAMEPAD_BUTTON_MIDDLE_LEFT = 13,
    GAMEPAD_BUTTON_MIDDLE = 14,
    GAMEPAD_BUTTON_MIDDLE_RIGHT = 15,
    GAMEPAD_BUTTON_LEFT_THUMB = 16,
    GAMEPAD_BUTTON_RIGHT_THUMB = 17,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L747 */
  export enum GamepadAxis {
    GAMEPAD_AXIS_LEFT_X = 0,
    GAMEPAD_AXIS_LEFT_Y = 1,
    GAMEPAD_AXIS_RIGHT_X = 2,
    GAMEPAD_AXIS_RIGHT_Y = 3,
    GAMEPAD_AXIS_LEFT_TRIGGER = 4,
    GAMEPAD_AXIS_RIGHT_TRIGGER = 5,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L757 */
  export enum MaterialMapIndex {
    MATERIAL_MAP_ALBEDO = 0,
    MATERIAL_MAP_METALNESS = 1,
    MATERIAL_MAP_NORMAL = 2,
    MATERIAL_MAP_ROUGHNESS = 3,
    MATERIAL_MAP_OCCLUSION = 4,
    MATERIAL_MAP_EMISSION = 5,
    MATERIAL_MAP_HEIGHT = 6,
    MATERIAL_MAP_CUBEMAP = 7,
    MATERIAL_MAP_IRRADIANCE = 8,
    MATERIAL_MAP_PREFILTER = 9,
    MATERIAL_MAP_BRDF = 10,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L775 */
  export enum ShaderLocationIndex {
    SHADER_LOC_VERTEX_POSITION = 0,
    SHADER_LOC_VERTEX_TEXCOORD01 = 1,
    SHADER_LOC_VERTEX_TEXCOORD02 = 2,
    SHADER_LOC_VERTEX_NORMAL = 3,
    SHADER_LOC_VERTEX_TANGENT = 4,
    SHADER_LOC_VERTEX_COLOR = 5,
    SHADER_LOC_MATRIX_MVP = 6,
    SHADER_LOC_MATRIX_VIEW = 7,
    SHADER_LOC_MATRIX_PROJECTION = 8,
    SHADER_LOC_MATRIX_MODEL = 9,
    SHADER_LOC_MATRIX_NORMAL = 10,
    SHADER_LOC_VECTOR_VIEW = 11,
    SHADER_LOC_COLOR_DIFFUSE = 12,
    SHADER_LOC_COLOR_SPECULAR = 13,
    SHADER_LOC_COLOR_AMBIENT = 14,
    SHADER_LOC_MAP_ALBEDO = 15,
    SHADER_LOC_MAP_METALNESS = 16,
    SHADER_LOC_MAP_NORMAL = 17,
    SHADER_LOC_MAP_ROUGHNESS = 18,
    SHADER_LOC_MAP_OCCLUSION = 19,
    SHADER_LOC_MAP_EMISSION = 20,
    SHADER_LOC_MAP_HEIGHT = 21,
    SHADER_LOC_MAP_CUBEMAP = 22,
    SHADER_LOC_MAP_IRRADIANCE = 23,
    SHADER_LOC_MAP_PREFILTER = 24,
    SHADER_LOC_MAP_BRDF = 25,
    SHADER_LOC_VERTEX_BONEIDS = 26,
    SHADER_LOC_VERTEX_BONEWEIGHTS = 27,
    SHADER_LOC_BONE_MATRICES = 28,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L811 */
  export enum ShaderUniformDataType {
    SHADER_UNIFORM_FLOAT = 0,
    SHADER_UNIFORM_VEC2 = 1,
    SHADER_UNIFORM_VEC3 = 2,
    SHADER_UNIFORM_VEC4 = 3,
    SHADER_UNIFORM_INT = 4,
    SHADER_UNIFORM_IVEC2 = 5,
    SHADER_UNIFORM_IVEC3 = 6,
    SHADER_UNIFORM_IVEC4 = 7,
    SHADER_UNIFORM_SAMPLER2D = 8,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L824 */
  export enum ShaderAttributeDataType {
    SHADER_ATTRIB_FLOAT = 0,
    SHADER_ATTRIB_VEC2 = 1,
    SHADER_ATTRIB_VEC3 = 2,
    SHADER_ATTRIB_VEC4 = 3,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L833 */
  export enum PixelFormat {
    PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1,
    PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2,
    PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3,
    PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4,
    PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5,
    PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6,
    PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7,
    PIXELFORMAT_UNCOMPRESSED_R32 = 8,
    PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9,
    PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10,
    PIXELFORMAT_UNCOMPRESSED_R16 = 11,
    PIXELFORMAT_UNCOMPRESSED_R16G16B16 = 12,
    PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = 13,
    PIXELFORMAT_COMPRESSED_DXT1_RGB = 14,
    PIXELFORMAT_COMPRESSED_DXT1_RGBA = 15,
    PIXELFORMAT_COMPRESSED_DXT3_RGBA = 16,
    PIXELFORMAT_COMPRESSED_DXT5_RGBA = 17,
    PIXELFORMAT_COMPRESSED_ETC1_RGB = 18,
    PIXELFORMAT_COMPRESSED_ETC2_RGB = 19,
    PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 20,
    PIXELFORMAT_COMPRESSED_PVRT_RGB = 21,
    PIXELFORMAT_COMPRESSED_PVRT_RGBA = 22,
    PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 23,
    PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 24,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L863 */
  export enum TextureFilter {
    TEXTURE_FILTER_POINT = 0,
    TEXTURE_FILTER_BILINEAR = 1,
    TEXTURE_FILTER_TRILINEAR = 2,
    TEXTURE_FILTER_ANISOTROPIC_4X = 3,
    TEXTURE_FILTER_ANISOTROPIC_8X = 4,
    TEXTURE_FILTER_ANISOTROPIC_16X = 5,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L873 */
  export enum TextureWrap {
    TEXTURE_WRAP_REPEAT = 0,
    TEXTURE_WRAP_CLAMP = 1,
    TEXTURE_WRAP_MIRROR_REPEAT = 2,
    TEXTURE_WRAP_MIRROR_CLAMP = 3,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L881 */
  export enum CubemapLayout {
    CUBEMAP_LAYOUT_AUTO_DETECT = 0,
    CUBEMAP_LAYOUT_LINE_VERTICAL = 1,
    CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2,
    CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3,
    CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L890 */
  export enum FontType {
    FONT_DEFAULT = 0,
    FONT_BITMAP = 1,
    FONT_SDF = 2,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L897 */
  export enum BlendMode {
    BLEND_ALPHA = 0,
    BLEND_ADDITIVE = 1,
    BLEND_MULTIPLIED = 2,
    BLEND_ADD_COLORS = 3,
    BLEND_SUBTRACT_COLORS = 4,
    BLEND_ALPHA_PREMULTIPLY = 5,
    BLEND_CUSTOM = 6,
    BLEND_CUSTOM_SEPARATE = 7,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L910 */
  export enum Gesture {
    GESTURE_NONE = 0,
    GESTURE_TAP = 1,
    GESTURE_DOUBLETAP = 2,
    GESTURE_HOLD = 4,
    GESTURE_DRAG = 8,
    GESTURE_SWIPE_RIGHT = 16,
    GESTURE_SWIPE_LEFT = 32,
    GESTURE_SWIPE_UP = 64,
    GESTURE_SWIPE_DOWN = 128,
    GESTURE_PINCH_IN = 256,
    GESTURE_PINCH_OUT = 512,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L925 */
  export enum CameraMode {
    CAMERA_CUSTOM = 0,
    CAMERA_FREE = 1,
    CAMERA_ORBITAL = 2,
    CAMERA_FIRST_PERSON = 3,
    CAMERA_THIRD_PERSON = 4,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L934 */
  export enum CameraProjection {
    CAMERA_PERSPECTIVE = 0,
    CAMERA_ORTHOGRAPHIC = 1,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L940 */
  export enum NPatchLayout {
    NPATCH_NINE_PATCH = 0,
    NPATCH_THREE_PATCH_VERTICAL = 1,
    NPATCH_THREE_PATCH_HORIZONTAL = 2,
  }

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L968 */
  export declare function InitWindow(width: number, height: number, title: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L969 */
  export declare function CloseWindow(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L970 */
  export declare function WindowShouldClose(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L971 */
  export declare function IsWindowReady(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L972 */
  export declare function IsWindowFullscreen(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L973 */
  export declare function IsWindowHidden(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L974 */
  export declare function IsWindowMinimized(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L975 */
  export declare function IsWindowMaximized(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L976 */
  export declare function IsWindowFocused(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L977 */
  export declare function IsWindowResized(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L978 */
  export declare function IsWindowState(flag: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L979 */
  export declare function SetWindowState(flags: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L980 */
  export declare function ClearWindowState(flags: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L981 */
  export declare function ToggleFullscreen(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L982 */
  export declare function ToggleBorderlessWindowed(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L983 */
  export declare function MaximizeWindow(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L984 */
  export declare function MinimizeWindow(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L985 */
  export declare function RestoreWindow(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L986 */
  export declare function SetWindowIcon(image: Raylib.Image): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L987 */
  export declare function SetWindowIcons(images: Pointer<Raylib.Image>, count: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L988 */
  export declare function SetWindowTitle(title: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L989 */
  export declare function SetWindowPosition(x: number, y: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L990 */
  export declare function SetWindowMonitor(monitor: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L991 */
  export declare function SetWindowMinSize(width: number, height: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L992 */
  export declare function SetWindowMaxSize(width: number, height: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L993 */
  export declare function SetWindowSize(width: number, height: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L994 */
  export declare function SetWindowOpacity(opacity: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L995 */
  export declare function SetWindowFocused(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L996 */
  export declare function GetWindowHandle(): Pointer<void>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L997 */
  export declare function GetScreenWidth(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L998 */
  export declare function GetScreenHeight(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L999 */
  export declare function GetRenderWidth(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1000 */
  export declare function GetRenderHeight(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1001 */
  export declare function GetMonitorCount(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1002 */
  export declare function GetCurrentMonitor(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1003 */
  export declare function GetMonitorPosition(monitor: number): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1004 */
  export declare function GetMonitorWidth(monitor: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1005 */
  export declare function GetMonitorHeight(monitor: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1006 */
  export declare function GetMonitorPhysicalWidth(monitor: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1007 */
  export declare function GetMonitorPhysicalHeight(monitor: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1008 */
  export declare function GetMonitorRefreshRate(monitor: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1009 */
  export declare function GetWindowPosition(): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1010 */
  export declare function GetWindowScaleDPI(): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1011 */
  export declare function GetMonitorName(monitor: number): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1012 */
  export declare function SetClipboardText(text: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1013 */
  export declare function GetClipboardText(): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1014 */
  export declare function GetClipboardImage(): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1015 */
  export declare function EnableEventWaiting(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1016 */
  export declare function DisableEventWaiting(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1019 */
  export declare function ShowCursor(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1020 */
  export declare function HideCursor(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1021 */
  export declare function IsCursorHidden(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1022 */
  export declare function EnableCursor(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1023 */
  export declare function DisableCursor(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1024 */
  export declare function IsCursorOnScreen(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1027 */
  export declare function ClearBackground(color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1028 */
  export declare function BeginDrawing(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1029 */
  export declare function EndDrawing(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1030 */
  export declare function BeginMode2D(camera: Raylib.Camera2D): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1031 */
  export declare function EndMode2D(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1032 */
  export declare function BeginMode3D(camera: Raylib.Camera3D): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1033 */
  export declare function EndMode3D(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1034 */
  export declare function BeginTextureMode(target: Raylib.RenderTexture2D): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1035 */
  export declare function EndTextureMode(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1036 */
  export declare function BeginShaderMode(shader: Raylib.Shader): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1037 */
  export declare function EndShaderMode(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1038 */
  export declare function BeginBlendMode(mode: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1039 */
  export declare function EndBlendMode(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1040 */
  export declare function BeginScissorMode(x: number, y: number, width: number, height: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1041 */
  export declare function EndScissorMode(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1042 */
  export declare function BeginVrStereoMode(config: Raylib.VrStereoConfig): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1043 */
  export declare function EndVrStereoMode(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1046 */
  export declare function LoadVrStereoConfig(device: Raylib.VrDeviceInfo): Raylib.VrStereoConfig;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1047 */
  export declare function UnloadVrStereoConfig(config: Raylib.VrStereoConfig): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1051 */
  export declare function LoadShader(vsFileName: Pointer<number>, fsFileName: Pointer<number>): Raylib.Shader;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1052 */
  export declare function LoadShaderFromMemory(vsCode: Pointer<number>, fsCode: Pointer<number>): Raylib.Shader;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1053 */
  export declare function IsShaderValid(shader: Raylib.Shader): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1054 */
  export declare function GetShaderLocation(shader: Raylib.Shader, uniformName: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1055 */
  export declare function GetShaderLocationAttrib(shader: Raylib.Shader, attribName: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1056 */
  export declare function SetShaderValue(shader: Raylib.Shader, locIndex: number, value: Pointer<void>, uniformType: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1057 */
  export declare function SetShaderValueV(shader: Raylib.Shader, locIndex: number, value: Pointer<void>, uniformType: number, count: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1058 */
  export declare function SetShaderValueMatrix(shader: Raylib.Shader, locIndex: number, mat: Raylib.Matrix): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1059 */
  export declare function SetShaderValueTexture(shader: Raylib.Shader, locIndex: number, texture: Raylib.Texture2D): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1060 */
  export declare function UnloadShader(shader: Raylib.Shader): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1064 */
  export declare function GetScreenToWorldRay(position: Raylib.Vector2, camera: Raylib.Camera): Raylib.Ray;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1065 */
  export declare function GetScreenToWorldRayEx(position: Raylib.Vector2, camera: Raylib.Camera, width: number, height: number): Raylib.Ray;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1066 */
  export declare function GetWorldToScreen(position: Raylib.Vector3, camera: Raylib.Camera): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1067 */
  export declare function GetWorldToScreenEx(position: Raylib.Vector3, camera: Raylib.Camera, width: number, height: number): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1068 */
  export declare function GetWorldToScreen2D(position: Raylib.Vector2, camera: Raylib.Camera2D): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1069 */
  export declare function GetScreenToWorld2D(position: Raylib.Vector2, camera: Raylib.Camera2D): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1070 */
  export declare function GetCameraMatrix(camera: Raylib.Camera): Raylib.Matrix;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1071 */
  export declare function GetCameraMatrix2D(camera: Raylib.Camera2D): Raylib.Matrix;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1074 */
  export declare function SetTargetFPS(fps: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1075 */
  export declare function GetFrameTime(): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1076 */
  export declare function GetTime(): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1077 */
  export declare function GetFPS(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1083 */
  export declare function SwapScreenBuffer(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1084 */
  export declare function PollInputEvents(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1085 */
  export declare function WaitTime(seconds: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1088 */
  export declare function SetRandomSeed(seed: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1089 */
  export declare function GetRandomValue(min: number, max: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1090 */
  export declare function LoadRandomSequence(count: number, min: number, max: number): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1091 */
  export declare function UnloadRandomSequence(sequence: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1094 */
  export declare function TakeScreenshot(fileName: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1095 */
  export declare function SetConfigFlags(flags: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1096 */
  export declare function OpenURL(url: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1100 */
  export declare function TraceLog(logLevel: number, text: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1101 */
  export declare function SetTraceLogLevel(logLevel: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1102 */
  export declare function MemAlloc(size: number): Pointer<void>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1103 */
  export declare function MemRealloc(ptr: Pointer<void>, size: number): Pointer<void>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1104 */
  export declare function MemFree(ptr: Pointer<void>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1108 */
  export declare function SetTraceLogCallback(callback: Raylib.TraceLogCallback): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1109 */
  export declare function SetLoadFileDataCallback(callback: Raylib.LoadFileDataCallback): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1110 */
  export declare function SetSaveFileDataCallback(callback: Raylib.SaveFileDataCallback): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1111 */
  export declare function SetLoadFileTextCallback(callback: Raylib.LoadFileTextCallback): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1112 */
  export declare function SetSaveFileTextCallback(callback: Raylib.SaveFileTextCallback): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1115 */
  export declare function LoadFileData(fileName: Pointer<number>, dataSize: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1116 */
  export declare function UnloadFileData(data: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1117 */
  export declare function SaveFileData(fileName: Pointer<number>, data: Pointer<void>, dataSize: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1118 */
  export declare function ExportDataAsCode(data: Pointer<number>, dataSize: number, fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1119 */
  export declare function LoadFileText(fileName: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1120 */
  export declare function UnloadFileText(text: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1121 */
  export declare function SaveFileText(fileName: Pointer<number>, text: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1125 */
  export declare function FileExists(fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1126 */
  export declare function DirectoryExists(dirPath: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1127 */
  export declare function IsFileExtension(fileName: Pointer<number>, ext: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1128 */
  export declare function GetFileLength(fileName: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1129 */
  export declare function GetFileExtension(fileName: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1130 */
  export declare function GetFileName(filePath: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1131 */
  export declare function GetFileNameWithoutExt(filePath: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1132 */
  export declare function GetDirectoryPath(filePath: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1133 */
  export declare function GetPrevDirectoryPath(dirPath: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1134 */
  export declare function GetWorkingDirectory(): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1135 */
  export declare function GetApplicationDirectory(): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1136 */
  export declare function MakeDirectory(dirPath: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1137 */
  export declare function ChangeDirectory(dir: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1138 */
  export declare function IsPathFile(path: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1139 */
  export declare function IsFileNameValid(fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1140 */
  export declare function LoadDirectoryFiles(dirPath: Pointer<number>): Raylib.FilePathList;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1141 */
  export declare function LoadDirectoryFilesEx(basePath: Pointer<number>, filter: Pointer<number>, scanSubdirs: boolean): Raylib.FilePathList;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1142 */
  export declare function UnloadDirectoryFiles(files: Raylib.FilePathList): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1143 */
  export declare function IsFileDropped(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1144 */
  export declare function LoadDroppedFiles(): Raylib.FilePathList;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1145 */
  export declare function UnloadDroppedFiles(files: Raylib.FilePathList): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1146 */
  export declare function GetFileModTime(fileName: Pointer<number>): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1149 */
  export declare function CompressData(data: Pointer<number>, dataSize: number, compDataSize: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1150 */
  export declare function DecompressData(compData: Pointer<number>, compDataSize: number, dataSize: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1151 */
  export declare function EncodeDataBase64(data: Pointer<number>, dataSize: number, outputSize: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1152 */
  export declare function DecodeDataBase64(data: Pointer<number>, outputSize: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1153 */
  export declare function ComputeCRC32(data: Pointer<number>, dataSize: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1154 */
  export declare function ComputeMD5(data: Pointer<number>, dataSize: number): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1155 */
  export declare function ComputeSHA1(data: Pointer<number>, dataSize: number): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1159 */
  export declare function LoadAutomationEventList(fileName: Pointer<number>): Raylib.AutomationEventList;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1160 */
  export declare function UnloadAutomationEventList(list: Raylib.AutomationEventList): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1161 */
  export declare function ExportAutomationEventList(list: Raylib.AutomationEventList, fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1162 */
  export declare function SetAutomationEventList(list: Pointer<Raylib.AutomationEventList>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1163 */
  export declare function SetAutomationEventBaseFrame(frame: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1164 */
  export declare function StartAutomationEventRecording(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1165 */
  export declare function StopAutomationEventRecording(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1166 */
  export declare function PlayAutomationEvent(event: Raylib.AutomationEvent): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1173 */
  export declare function IsKeyPressed(key: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1174 */
  export declare function IsKeyPressedRepeat(key: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1175 */
  export declare function IsKeyDown(key: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1176 */
  export declare function IsKeyReleased(key: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1177 */
  export declare function IsKeyUp(key: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1178 */
  export declare function GetKeyPressed(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1179 */
  export declare function GetCharPressed(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1180 */
  export declare function SetExitKey(key: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1183 */
  export declare function IsGamepadAvailable(gamepad: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1184 */
  export declare function GetGamepadName(gamepad: number): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1185 */
  export declare function IsGamepadButtonPressed(gamepad: number, button: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1186 */
  export declare function IsGamepadButtonDown(gamepad: number, button: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1187 */
  export declare function IsGamepadButtonReleased(gamepad: number, button: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1188 */
  export declare function IsGamepadButtonUp(gamepad: number, button: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1189 */
  export declare function GetGamepadButtonPressed(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1190 */
  export declare function GetGamepadAxisCount(gamepad: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1191 */
  export declare function GetGamepadAxisMovement(gamepad: number, axis: number): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1192 */
  export declare function SetGamepadMappings(mappings: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1193 */
  export declare function SetGamepadVibration(gamepad: number, leftMotor: bigint, rightMotor: bigint, duration: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1196 */
  export declare function IsMouseButtonPressed(button: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1197 */
  export declare function IsMouseButtonDown(button: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1198 */
  export declare function IsMouseButtonReleased(button: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1199 */
  export declare function IsMouseButtonUp(button: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1200 */
  export declare function GetMouseX(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1201 */
  export declare function GetMouseY(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1202 */
  export declare function GetMousePosition(): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1203 */
  export declare function GetMouseDelta(): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1204 */
  export declare function SetMousePosition(x: number, y: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1205 */
  export declare function SetMouseOffset(offsetX: number, offsetY: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1206 */
  export declare function SetMouseScale(scaleX: bigint, scaleY: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1207 */
  export declare function GetMouseWheelMove(): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1208 */
  export declare function GetMouseWheelMoveV(): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1209 */
  export declare function SetMouseCursor(cursor: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1212 */
  export declare function GetTouchX(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1213 */
  export declare function GetTouchY(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1214 */
  export declare function GetTouchPosition(index: number): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1215 */
  export declare function GetTouchPointId(index: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1216 */
  export declare function GetTouchPointCount(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1221 */
  export declare function SetGesturesEnabled(flags: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1222 */
  export declare function IsGestureDetected(gesture: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1223 */
  export declare function GetGestureDetected(): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1224 */
  export declare function GetGestureHoldDuration(): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1225 */
  export declare function GetGestureDragVector(): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1226 */
  export declare function GetGestureDragAngle(): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1227 */
  export declare function GetGesturePinchVector(): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1228 */
  export declare function GetGesturePinchAngle(): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1233 */
  export declare function UpdateCamera(camera: Pointer<Raylib.Camera>, mode: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1234 */
  export declare function UpdateCameraPro(camera: Pointer<Raylib.Camera>, movement: Raylib.Vector3, rotation: Raylib.Vector3, zoom: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1242 */
  export declare function SetShapesTexture(texture: Raylib.Texture2D, source: Raylib.Rectangle): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1243 */
  export declare function GetShapesTexture(): Raylib.Texture2D;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1244 */
  export declare function GetShapesTextureRectangle(): Raylib.Rectangle;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1247 */
  export declare function DrawPixel(posX: number, posY: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1248 */
  export declare function DrawPixelV(position: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1249 */
  export declare function DrawLine(startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1250 */
  export declare function DrawLineV(startPos: Raylib.Vector2, endPos: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1251 */
  export declare function DrawLineEx(startPos: Raylib.Vector2, endPos: Raylib.Vector2, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1252 */
  export declare function DrawLineStrip(points: Pointer<Raylib.Vector2>, pointCount: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1253 */
  export declare function DrawLineBezier(startPos: Raylib.Vector2, endPos: Raylib.Vector2, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1254 */
  export declare function DrawCircle(centerX: number, centerY: number, radius: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1255 */
  export declare function DrawCircleSector(center: Raylib.Vector2, radius: bigint, startAngle: bigint, endAngle: bigint, segments: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1256 */
  export declare function DrawCircleSectorLines(center: Raylib.Vector2, radius: bigint, startAngle: bigint, endAngle: bigint, segments: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1257 */
  export declare function DrawCircleGradient(centerX: number, centerY: number, radius: bigint, inner: Raylib.Color, outer: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1258 */
  export declare function DrawCircleV(center: Raylib.Vector2, radius: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1259 */
  export declare function DrawCircleLines(centerX: number, centerY: number, radius: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1260 */
  export declare function DrawCircleLinesV(center: Raylib.Vector2, radius: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1261 */
  export declare function DrawEllipse(centerX: number, centerY: number, radiusH: bigint, radiusV: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1262 */
  export declare function DrawEllipseLines(centerX: number, centerY: number, radiusH: bigint, radiusV: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1263 */
  export declare function DrawRing(center: Raylib.Vector2, innerRadius: bigint, outerRadius: bigint, startAngle: bigint, endAngle: bigint, segments: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1264 */
  export declare function DrawRingLines(center: Raylib.Vector2, innerRadius: bigint, outerRadius: bigint, startAngle: bigint, endAngle: bigint, segments: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1265 */
  export declare function DrawRectangle(posX: number, posY: number, width: number, height: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1266 */
  export declare function DrawRectangleV(position: Raylib.Vector2, size: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1267 */
  export declare function DrawRectangleRec(rec: Raylib.Rectangle, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1268 */
  export declare function DrawRectanglePro(rec: Raylib.Rectangle, origin: Raylib.Vector2, rotation: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1269 */
  export declare function DrawRectangleGradientV(posX: number, posY: number, width: number, height: number, top: Raylib.Color, bottom: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1270 */
  export declare function DrawRectangleGradientH(posX: number, posY: number, width: number, height: number, left: Raylib.Color, right: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1271 */
  export declare function DrawRectangleGradientEx(rec: Raylib.Rectangle, topLeft: Raylib.Color, bottomLeft: Raylib.Color, topRight: Raylib.Color, bottomRight: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1272 */
  export declare function DrawRectangleLines(posX: number, posY: number, width: number, height: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1273 */
  export declare function DrawRectangleLinesEx(rec: Raylib.Rectangle, lineThick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1274 */
  export declare function DrawRectangleRounded(rec: Raylib.Rectangle, roundness: bigint, segments: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1275 */
  export declare function DrawRectangleRoundedLines(rec: Raylib.Rectangle, roundness: bigint, segments: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1276 */
  export declare function DrawRectangleRoundedLinesEx(rec: Raylib.Rectangle, roundness: bigint, segments: number, lineThick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1277 */
  export declare function DrawTriangle(v1: Raylib.Vector2, v2: Raylib.Vector2, v3: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1278 */
  export declare function DrawTriangleLines(v1: Raylib.Vector2, v2: Raylib.Vector2, v3: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1279 */
  export declare function DrawTriangleFan(points: Pointer<Raylib.Vector2>, pointCount: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1280 */
  export declare function DrawTriangleStrip(points: Pointer<Raylib.Vector2>, pointCount: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1281 */
  export declare function DrawPoly(center: Raylib.Vector2, sides: number, radius: bigint, rotation: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1282 */
  export declare function DrawPolyLines(center: Raylib.Vector2, sides: number, radius: bigint, rotation: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1283 */
  export declare function DrawPolyLinesEx(center: Raylib.Vector2, sides: number, radius: bigint, rotation: bigint, lineThick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1286 */
  export declare function DrawSplineLinear(points: Pointer<Raylib.Vector2>, pointCount: number, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1287 */
  export declare function DrawSplineBasis(points: Pointer<Raylib.Vector2>, pointCount: number, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1288 */
  export declare function DrawSplineCatmullRom(points: Pointer<Raylib.Vector2>, pointCount: number, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1289 */
  export declare function DrawSplineBezierQuadratic(points: Pointer<Raylib.Vector2>, pointCount: number, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1290 */
  export declare function DrawSplineBezierCubic(points: Pointer<Raylib.Vector2>, pointCount: number, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1291 */
  export declare function DrawSplineSegmentLinear(p1: Raylib.Vector2, p2: Raylib.Vector2, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1292 */
  export declare function DrawSplineSegmentBasis(p1: Raylib.Vector2, p2: Raylib.Vector2, p3: Raylib.Vector2, p4: Raylib.Vector2, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1293 */
  export declare function DrawSplineSegmentCatmullRom(p1: Raylib.Vector2, p2: Raylib.Vector2, p3: Raylib.Vector2, p4: Raylib.Vector2, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1294 */
  export declare function DrawSplineSegmentBezierQuadratic(p1: Raylib.Vector2, c2: Raylib.Vector2, p3: Raylib.Vector2, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1295 */
  export declare function DrawSplineSegmentBezierCubic(p1: Raylib.Vector2, c2: Raylib.Vector2, c3: Raylib.Vector2, p4: Raylib.Vector2, thick: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1298 */
  export declare function GetSplinePointLinear(startPos: Raylib.Vector2, endPos: Raylib.Vector2, t: bigint): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1299 */
  export declare function GetSplinePointBasis(p1: Raylib.Vector2, p2: Raylib.Vector2, p3: Raylib.Vector2, p4: Raylib.Vector2, t: bigint): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1300 */
  export declare function GetSplinePointCatmullRom(p1: Raylib.Vector2, p2: Raylib.Vector2, p3: Raylib.Vector2, p4: Raylib.Vector2, t: bigint): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1301 */
  export declare function GetSplinePointBezierQuad(p1: Raylib.Vector2, c2: Raylib.Vector2, p3: Raylib.Vector2, t: bigint): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1302 */
  export declare function GetSplinePointBezierCubic(p1: Raylib.Vector2, c2: Raylib.Vector2, c3: Raylib.Vector2, p4: Raylib.Vector2, t: bigint): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1305 */
  export declare function CheckCollisionRecs(rec1: Raylib.Rectangle, rec2: Raylib.Rectangle): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1306 */
  export declare function CheckCollisionCircles(center1: Raylib.Vector2, radius1: bigint, center2: Raylib.Vector2, radius2: bigint): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1307 */
  export declare function CheckCollisionCircleRec(center: Raylib.Vector2, radius: bigint, rec: Raylib.Rectangle): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1308 */
  export declare function CheckCollisionCircleLine(center: Raylib.Vector2, radius: bigint, p1: Raylib.Vector2, p2: Raylib.Vector2): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1309 */
  export declare function CheckCollisionPointRec(point: Raylib.Vector2, rec: Raylib.Rectangle): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1310 */
  export declare function CheckCollisionPointCircle(point: Raylib.Vector2, center: Raylib.Vector2, radius: bigint): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1311 */
  export declare function CheckCollisionPointTriangle(point: Raylib.Vector2, p1: Raylib.Vector2, p2: Raylib.Vector2, p3: Raylib.Vector2): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1312 */
  export declare function CheckCollisionPointLine(point: Raylib.Vector2, p1: Raylib.Vector2, p2: Raylib.Vector2, threshold: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1313 */
  export declare function CheckCollisionPointPoly(point: Raylib.Vector2, points: Pointer<Raylib.Vector2>, pointCount: number): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1314 */
  export declare function CheckCollisionLines(startPos1: Raylib.Vector2, endPos1: Raylib.Vector2, startPos2: Raylib.Vector2, endPos2: Raylib.Vector2, collisionPoint: Pointer<Raylib.Vector2>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1315 */
  export declare function GetCollisionRec(rec1: Raylib.Rectangle, rec2: Raylib.Rectangle): Raylib.Rectangle;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1323 */
  export declare function LoadImage(fileName: Pointer<number>): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1324 */
  export declare function LoadImageRaw(fileName: Pointer<number>, width: number, height: number, format: number, headerSize: number): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1325 */
  export declare function LoadImageAnim(fileName: Pointer<number>, frames: Pointer<number>): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1326 */
  export declare function LoadImageAnimFromMemory(fileType: Pointer<number>, fileData: Pointer<number>, dataSize: number, frames: Pointer<number>): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1327 */
  export declare function LoadImageFromMemory(fileType: Pointer<number>, fileData: Pointer<number>, dataSize: number): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1328 */
  export declare function LoadImageFromTexture(texture: Raylib.Texture2D): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1329 */
  export declare function LoadImageFromScreen(): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1330 */
  export declare function IsImageValid(image: Raylib.Image): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1331 */
  export declare function UnloadImage(image: Raylib.Image): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1332 */
  export declare function ExportImage(image: Raylib.Image, fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1333 */
  export declare function ExportImageToMemory(image: Raylib.Image, fileType: Pointer<number>, fileSize: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1334 */
  export declare function ExportImageAsCode(image: Raylib.Image, fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1337 */
  export declare function GenImageColor(width: number, height: number, color: Raylib.Color): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1338 */
  export declare function GenImageGradientLinear(width: number, height: number, direction: number, start: Raylib.Color, end: Raylib.Color): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1339 */
  export declare function GenImageGradientRadial(width: number, height: number, density: bigint, inner: Raylib.Color, outer: Raylib.Color): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1340 */
  export declare function GenImageGradientSquare(width: number, height: number, density: bigint, inner: Raylib.Color, outer: Raylib.Color): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1341 */
  export declare function GenImageChecked(width: number, height: number, checksX: number, checksY: number, col1: Raylib.Color, col2: Raylib.Color): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1342 */
  export declare function GenImageWhiteNoise(width: number, height: number, factor: bigint): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1343 */
  export declare function GenImagePerlinNoise(width: number, height: number, offsetX: number, offsetY: number, scale: bigint): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1344 */
  export declare function GenImageCellular(width: number, height: number, tileSize: number): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1345 */
  export declare function GenImageText(width: number, height: number, text: Pointer<number>): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1348 */
  export declare function ImageCopy(image: Raylib.Image): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1349 */
  export declare function ImageFromImage(image: Raylib.Image, rec: Raylib.Rectangle): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1350 */
  export declare function ImageFromChannel(image: Raylib.Image, selectedChannel: number): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1351 */
  export declare function ImageText(text: Pointer<number>, fontSize: number, color: Raylib.Color): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1352 */
  export declare function ImageTextEx(font: Raylib.Font, text: Pointer<number>, fontSize: bigint, spacing: bigint, tint: Raylib.Color): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1353 */
  export declare function ImageFormat(image: Pointer<Raylib.Image>, newFormat: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1354 */
  export declare function ImageToPOT(image: Pointer<Raylib.Image>, fill: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1355 */
  export declare function ImageCrop(image: Pointer<Raylib.Image>, crop: Raylib.Rectangle): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1356 */
  export declare function ImageAlphaCrop(image: Pointer<Raylib.Image>, threshold: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1357 */
  export declare function ImageAlphaClear(image: Pointer<Raylib.Image>, color: Raylib.Color, threshold: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1358 */
  export declare function ImageAlphaMask(image: Pointer<Raylib.Image>, alphaMask: Raylib.Image): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1359 */
  export declare function ImageAlphaPremultiply(image: Pointer<Raylib.Image>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1360 */
  export declare function ImageBlurGaussian(image: Pointer<Raylib.Image>, blurSize: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1361 */
  export declare function ImageKernelConvolution(image: Pointer<Raylib.Image>, kernel: Pointer<bigint>, kernelSize: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1362 */
  export declare function ImageResize(image: Pointer<Raylib.Image>, newWidth: number, newHeight: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1363 */
  export declare function ImageResizeNN(image: Pointer<Raylib.Image>, newWidth: number, newHeight: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1364 */
  export declare function ImageResizeCanvas(image: Pointer<Raylib.Image>, newWidth: number, newHeight: number, offsetX: number, offsetY: number, fill: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1365 */
  export declare function ImageMipmaps(image: Pointer<Raylib.Image>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1366 */
  export declare function ImageDither(image: Pointer<Raylib.Image>, rBpp: number, gBpp: number, bBpp: number, aBpp: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1367 */
  export declare function ImageFlipVertical(image: Pointer<Raylib.Image>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1368 */
  export declare function ImageFlipHorizontal(image: Pointer<Raylib.Image>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1369 */
  export declare function ImageRotate(image: Pointer<Raylib.Image>, degrees: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1370 */
  export declare function ImageRotateCW(image: Pointer<Raylib.Image>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1371 */
  export declare function ImageRotateCCW(image: Pointer<Raylib.Image>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1372 */
  export declare function ImageColorTint(image: Pointer<Raylib.Image>, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1373 */
  export declare function ImageColorInvert(image: Pointer<Raylib.Image>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1374 */
  export declare function ImageColorGrayscale(image: Pointer<Raylib.Image>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1375 */
  export declare function ImageColorContrast(image: Pointer<Raylib.Image>, contrast: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1376 */
  export declare function ImageColorBrightness(image: Pointer<Raylib.Image>, brightness: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1377 */
  export declare function ImageColorReplace(image: Pointer<Raylib.Image>, color: Raylib.Color, replace: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1378 */
  export declare function LoadImageColors(image: Raylib.Image): Pointer<Raylib.Color>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1379 */
  export declare function LoadImagePalette(image: Raylib.Image, maxPaletteSize: number, colorCount: Pointer<number>): Pointer<Raylib.Color>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1380 */
  export declare function UnloadImageColors(colors: Pointer<Raylib.Color>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1381 */
  export declare function UnloadImagePalette(colors: Pointer<Raylib.Color>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1382 */
  export declare function GetImageAlphaBorder(image: Raylib.Image, threshold: bigint): Raylib.Rectangle;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1383 */
  export declare function GetImageColor(image: Raylib.Image, x: number, y: number): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1387 */
  export declare function ImageClearBackground(dst: Pointer<Raylib.Image>, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1388 */
  export declare function ImageDrawPixel(dst: Pointer<Raylib.Image>, posX: number, posY: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1389 */
  export declare function ImageDrawPixelV(dst: Pointer<Raylib.Image>, position: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1390 */
  export declare function ImageDrawLine(dst: Pointer<Raylib.Image>, startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1391 */
  export declare function ImageDrawLineV(dst: Pointer<Raylib.Image>, start: Raylib.Vector2, end: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1392 */
  export declare function ImageDrawLineEx(dst: Pointer<Raylib.Image>, start: Raylib.Vector2, end: Raylib.Vector2, thick: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1393 */
  export declare function ImageDrawCircle(dst: Pointer<Raylib.Image>, centerX: number, centerY: number, radius: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1394 */
  export declare function ImageDrawCircleV(dst: Pointer<Raylib.Image>, center: Raylib.Vector2, radius: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1395 */
  export declare function ImageDrawCircleLines(dst: Pointer<Raylib.Image>, centerX: number, centerY: number, radius: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1396 */
  export declare function ImageDrawCircleLinesV(dst: Pointer<Raylib.Image>, center: Raylib.Vector2, radius: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1397 */
  export declare function ImageDrawRectangle(dst: Pointer<Raylib.Image>, posX: number, posY: number, width: number, height: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1398 */
  export declare function ImageDrawRectangleV(dst: Pointer<Raylib.Image>, position: Raylib.Vector2, size: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1399 */
  export declare function ImageDrawRectangleRec(dst: Pointer<Raylib.Image>, rec: Raylib.Rectangle, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1400 */
  export declare function ImageDrawRectangleLines(dst: Pointer<Raylib.Image>, rec: Raylib.Rectangle, thick: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1401 */
  export declare function ImageDrawTriangle(dst: Pointer<Raylib.Image>, v1: Raylib.Vector2, v2: Raylib.Vector2, v3: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1402 */
  export declare function ImageDrawTriangleEx(dst: Pointer<Raylib.Image>, v1: Raylib.Vector2, v2: Raylib.Vector2, v3: Raylib.Vector2, c1: Raylib.Color, c2: Raylib.Color, c3: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1403 */
  export declare function ImageDrawTriangleLines(dst: Pointer<Raylib.Image>, v1: Raylib.Vector2, v2: Raylib.Vector2, v3: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1404 */
  export declare function ImageDrawTriangleFan(dst: Pointer<Raylib.Image>, points: Pointer<Raylib.Vector2>, pointCount: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1405 */
  export declare function ImageDrawTriangleStrip(dst: Pointer<Raylib.Image>, points: Pointer<Raylib.Vector2>, pointCount: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1406 */
  export declare function ImageDraw(dst: Pointer<Raylib.Image>, src: Raylib.Image, srcRec: Raylib.Rectangle, dstRec: Raylib.Rectangle, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1407 */
  export declare function ImageDrawText(dst: Pointer<Raylib.Image>, text: Pointer<number>, posX: number, posY: number, fontSize: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1408 */
  export declare function ImageDrawTextEx(dst: Pointer<Raylib.Image>, font: Raylib.Font, text: Pointer<number>, position: Raylib.Vector2, fontSize: bigint, spacing: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1412 */
  export declare function LoadTexture(fileName: Pointer<number>): Raylib.Texture2D;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1413 */
  export declare function LoadTextureFromImage(image: Raylib.Image): Raylib.Texture2D;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1414 */
  export declare function LoadTextureCubemap(image: Raylib.Image, layout: number): Raylib.TextureCubemap;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1415 */
  export declare function LoadRenderTexture(width: number, height: number): Raylib.RenderTexture2D;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1416 */
  export declare function IsTextureValid(texture: Raylib.Texture2D): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1417 */
  export declare function UnloadTexture(texture: Raylib.Texture2D): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1418 */
  export declare function IsRenderTextureValid(target: Raylib.RenderTexture2D): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1419 */
  export declare function UnloadRenderTexture(target: Raylib.RenderTexture2D): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1420 */
  export declare function UpdateTexture(texture: Raylib.Texture2D, pixels: Pointer<void>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1421 */
  export declare function UpdateTextureRec(texture: Raylib.Texture2D, rec: Raylib.Rectangle, pixels: Pointer<void>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1424 */
  export declare function GenTextureMipmaps(texture: Pointer<Raylib.Texture2D>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1425 */
  export declare function SetTextureFilter(texture: Raylib.Texture2D, filter: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1426 */
  export declare function SetTextureWrap(texture: Raylib.Texture2D, wrap: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1429 */
  export declare function DrawTexture(texture: Raylib.Texture2D, posX: number, posY: number, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1430 */
  export declare function DrawTextureV(texture: Raylib.Texture2D, position: Raylib.Vector2, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1431 */
  export declare function DrawTextureEx(texture: Raylib.Texture2D, position: Raylib.Vector2, rotation: bigint, scale: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1432 */
  export declare function DrawTextureRec(texture: Raylib.Texture2D, source: Raylib.Rectangle, position: Raylib.Vector2, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1433 */
  export declare function DrawTexturePro(texture: Raylib.Texture2D, source: Raylib.Rectangle, dest: Raylib.Rectangle, origin: Raylib.Vector2, rotation: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1434 */
  export declare function DrawTextureNPatch(texture: Raylib.Texture2D, nPatchInfo: Raylib.NPatchInfo, dest: Raylib.Rectangle, origin: Raylib.Vector2, rotation: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1437 */
  export declare function ColorIsEqual(col1: Raylib.Color, col2: Raylib.Color): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1438 */
  export declare function Fade(color: Raylib.Color, alpha: bigint): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1439 */
  export declare function ColorToInt(color: Raylib.Color): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1440 */
  export declare function ColorNormalize(color: Raylib.Color): Raylib.Vector4;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1441 */
  export declare function ColorFromNormalized(normalized: Raylib.Vector4): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1442 */
  export declare function ColorToHSV(color: Raylib.Color): Raylib.Vector3;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1443 */
  export declare function ColorFromHSV(hue: bigint, saturation: bigint, value: bigint): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1444 */
  export declare function ColorTint(color: Raylib.Color, tint: Raylib.Color): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1445 */
  export declare function ColorBrightness(color: Raylib.Color, factor: bigint): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1446 */
  export declare function ColorContrast(color: Raylib.Color, contrast: bigint): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1447 */
  export declare function ColorAlpha(color: Raylib.Color, alpha: bigint): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1448 */
  export declare function ColorAlphaBlend(dst: Raylib.Color, src: Raylib.Color, tint: Raylib.Color): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1449 */
  export declare function ColorLerp(color1: Raylib.Color, color2: Raylib.Color, factor: bigint): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1450 */
  export declare function GetColor(hexValue: number): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1451 */
  export declare function GetPixelColor(srcPtr: Pointer<void>, format: number): Raylib.Color;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1452 */
  export declare function SetPixelColor(dstPtr: Pointer<void>, color: Raylib.Color, format: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1453 */
  export declare function GetPixelDataSize(width: number, height: number, format: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1460 */
  export declare function GetFontDefault(): Raylib.Font;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1461 */
  export declare function LoadFont(fileName: Pointer<number>): Raylib.Font;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1462 */
  export declare function LoadFontEx(fileName: Pointer<number>, fontSize: number, codepoints: Pointer<number>, codepointCount: number): Raylib.Font;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1463 */
  export declare function LoadFontFromImage(image: Raylib.Image, key: Raylib.Color, firstChar: number): Raylib.Font;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1464 */
  export declare function LoadFontFromMemory(fileType: Pointer<number>, fileData: Pointer<number>, dataSize: number, fontSize: number, codepoints: Pointer<number>, codepointCount: number): Raylib.Font;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1465 */
  export declare function IsFontValid(font: Raylib.Font): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1466 */
  export declare function LoadFontData(fileData: Pointer<number>, dataSize: number, fontSize: number, codepoints: Pointer<number>, codepointCount: number, type: number): Pointer<Raylib.GlyphInfo>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1467 */
  export declare function GenImageFontAtlas(glyphs: Pointer<Raylib.GlyphInfo>, glyphRecs: Pointer<Pointer<Raylib.Rectangle>>, glyphCount: number, fontSize: number, padding: number, packMethod: number): Raylib.Image;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1468 */
  export declare function UnloadFontData(glyphs: Pointer<Raylib.GlyphInfo>, glyphCount: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1469 */
  export declare function UnloadFont(font: Raylib.Font): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1470 */
  export declare function ExportFontAsCode(font: Raylib.Font, fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1473 */
  export declare function DrawFPS(posX: number, posY: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1474 */
  export declare function DrawText(text: Pointer<number>, posX: number, posY: number, fontSize: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1475 */
  export declare function DrawTextEx(font: Raylib.Font, text: Pointer<number>, position: Raylib.Vector2, fontSize: bigint, spacing: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1476 */
  export declare function DrawTextPro(font: Raylib.Font, text: Pointer<number>, position: Raylib.Vector2, origin: Raylib.Vector2, rotation: bigint, fontSize: bigint, spacing: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1477 */
  export declare function DrawTextCodepoint(font: Raylib.Font, codepoint: number, position: Raylib.Vector2, fontSize: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1478 */
  export declare function DrawTextCodepoints(font: Raylib.Font, codepoints: Pointer<number>, codepointCount: number, position: Raylib.Vector2, fontSize: bigint, spacing: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1481 */
  export declare function SetTextLineSpacing(spacing: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1482 */
  export declare function MeasureText(text: Pointer<number>, fontSize: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1483 */
  export declare function MeasureTextEx(font: Raylib.Font, text: Pointer<number>, fontSize: bigint, spacing: bigint): Raylib.Vector2;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1484 */
  export declare function GetGlyphIndex(font: Raylib.Font, codepoint: number): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1485 */
  export declare function GetGlyphInfo(font: Raylib.Font, codepoint: number): Raylib.GlyphInfo;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1486 */
  export declare function GetGlyphAtlasRec(font: Raylib.Font, codepoint: number): Raylib.Rectangle;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1489 */
  export declare function LoadUTF8(codepoints: Pointer<number>, length: number): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1490 */
  export declare function UnloadUTF8(text: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1491 */
  export declare function LoadCodepoints(text: Pointer<number>, count: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1492 */
  export declare function UnloadCodepoints(codepoints: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1493 */
  export declare function GetCodepointCount(text: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1494 */
  export declare function GetCodepoint(text: Pointer<number>, codepointSize: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1495 */
  export declare function GetCodepointNext(text: Pointer<number>, codepointSize: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1496 */
  export declare function GetCodepointPrevious(text: Pointer<number>, codepointSize: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1497 */
  export declare function CodepointToUTF8(codepoint: number, utf8Size: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1501 */
  export declare function TextCopy(dst: Pointer<number>, src: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1502 */
  export declare function TextIsEqual(text1: Pointer<number>, text2: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1503 */
  export declare function TextLength(text: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1504 */
  export declare function TextFormat(text: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1505 */
  export declare function TextSubtext(text: Pointer<number>, position: number, length: number): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1506 */
  export declare function TextReplace(text: Pointer<number>, replace: Pointer<number>, by: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1507 */
  export declare function TextInsert(text: Pointer<number>, insert: Pointer<number>, position: number): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1508 */
  export declare function TextJoin(textList: Pointer<Pointer<number>>, count: number, delimiter: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1509 */
  export declare function TextSplit(text: Pointer<number>, delimiter: number, count: Pointer<number>): Pointer<Pointer<number>>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1510 */
  export declare function TextAppend(text: Pointer<number>, append: Pointer<number>, position: Pointer<number>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1511 */
  export declare function TextFindIndex(text: Pointer<number>, find: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1512 */
  export declare function TextToUpper(text: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1513 */
  export declare function TextToLower(text: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1514 */
  export declare function TextToPascal(text: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1515 */
  export declare function TextToSnake(text: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1516 */
  export declare function TextToCamel(text: Pointer<number>): Pointer<number>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1518 */
  export declare function TextToInteger(text: Pointer<number>): number;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1519 */
  export declare function TextToFloat(text: Pointer<number>): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1526 */
  export declare function DrawLine3D(startPos: Raylib.Vector3, endPos: Raylib.Vector3, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1527 */
  export declare function DrawPoint3D(position: Raylib.Vector3, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1528 */
  export declare function DrawCircle3D(center: Raylib.Vector3, radius: bigint, rotationAxis: Raylib.Vector3, rotationAngle: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1529 */
  export declare function DrawTriangle3D(v1: Raylib.Vector3, v2: Raylib.Vector3, v3: Raylib.Vector3, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1530 */
  export declare function DrawTriangleStrip3D(points: Pointer<Raylib.Vector3>, pointCount: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1531 */
  export declare function DrawCube(position: Raylib.Vector3, width: bigint, height: bigint, length: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1532 */
  export declare function DrawCubeV(position: Raylib.Vector3, size: Raylib.Vector3, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1533 */
  export declare function DrawCubeWires(position: Raylib.Vector3, width: bigint, height: bigint, length: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1534 */
  export declare function DrawCubeWiresV(position: Raylib.Vector3, size: Raylib.Vector3, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1535 */
  export declare function DrawSphere(centerPos: Raylib.Vector3, radius: bigint, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1536 */
  export declare function DrawSphereEx(centerPos: Raylib.Vector3, radius: bigint, rings: number, slices: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1537 */
  export declare function DrawSphereWires(centerPos: Raylib.Vector3, radius: bigint, rings: number, slices: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1538 */
  export declare function DrawCylinder(position: Raylib.Vector3, radiusTop: bigint, radiusBottom: bigint, height: bigint, slices: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1539 */
  export declare function DrawCylinderEx(startPos: Raylib.Vector3, endPos: Raylib.Vector3, startRadius: bigint, endRadius: bigint, sides: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1540 */
  export declare function DrawCylinderWires(position: Raylib.Vector3, radiusTop: bigint, radiusBottom: bigint, height: bigint, slices: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1541 */
  export declare function DrawCylinderWiresEx(startPos: Raylib.Vector3, endPos: Raylib.Vector3, startRadius: bigint, endRadius: bigint, sides: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1542 */
  export declare function DrawCapsule(startPos: Raylib.Vector3, endPos: Raylib.Vector3, radius: bigint, slices: number, rings: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1543 */
  export declare function DrawCapsuleWires(startPos: Raylib.Vector3, endPos: Raylib.Vector3, radius: bigint, slices: number, rings: number, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1544 */
  export declare function DrawPlane(centerPos: Raylib.Vector3, size: Raylib.Vector2, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1545 */
  export declare function DrawRay(ray: Raylib.Ray, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1546 */
  export declare function DrawGrid(slices: number, spacing: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1553 */
  export declare function LoadModel(fileName: Pointer<number>): Raylib.Model;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1554 */
  export declare function LoadModelFromMesh(mesh: Raylib.Mesh): Raylib.Model;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1555 */
  export declare function IsModelValid(model: Raylib.Model): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1556 */
  export declare function UnloadModel(model: Raylib.Model): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1557 */
  export declare function GetModelBoundingBox(model: Raylib.Model): Raylib.BoundingBox;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1560 */
  export declare function DrawModel(model: Raylib.Model, position: Raylib.Vector3, scale: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1561 */
  export declare function DrawModelEx(model: Raylib.Model, position: Raylib.Vector3, rotationAxis: Raylib.Vector3, rotationAngle: bigint, scale: Raylib.Vector3, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1562 */
  export declare function DrawModelWires(model: Raylib.Model, position: Raylib.Vector3, scale: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1563 */
  export declare function DrawModelWiresEx(model: Raylib.Model, position: Raylib.Vector3, rotationAxis: Raylib.Vector3, rotationAngle: bigint, scale: Raylib.Vector3, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1564 */
  export declare function DrawModelPoints(model: Raylib.Model, position: Raylib.Vector3, scale: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1565 */
  export declare function DrawModelPointsEx(model: Raylib.Model, position: Raylib.Vector3, rotationAxis: Raylib.Vector3, rotationAngle: bigint, scale: Raylib.Vector3, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1566 */
  export declare function DrawBoundingBox(box: Raylib.BoundingBox, color: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1567 */
  export declare function DrawBillboard(camera: Raylib.Camera, texture: Raylib.Texture2D, position: Raylib.Vector3, scale: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1568 */
  export declare function DrawBillboardRec(camera: Raylib.Camera, texture: Raylib.Texture2D, source: Raylib.Rectangle, position: Raylib.Vector3, size: Raylib.Vector2, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1569 */
  export declare function DrawBillboardPro(camera: Raylib.Camera, texture: Raylib.Texture2D, source: Raylib.Rectangle, position: Raylib.Vector3, up: Raylib.Vector3, size: Raylib.Vector2, origin: Raylib.Vector2, rotation: bigint, tint: Raylib.Color): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1572 */
  export declare function UploadMesh(mesh: Pointer<Raylib.Mesh>, dynamic: boolean): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1573 */
  export declare function UpdateMeshBuffer(mesh: Raylib.Mesh, index: number, data: Pointer<void>, dataSize: number, offset: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1574 */
  export declare function UnloadMesh(mesh: Raylib.Mesh): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1575 */
  export declare function DrawMesh(mesh: Raylib.Mesh, material: Raylib.Material, transform: Raylib.Matrix): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1576 */
  export declare function DrawMeshInstanced(mesh: Raylib.Mesh, material: Raylib.Material, transforms: Pointer<Raylib.Matrix>, instances: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1577 */
  export declare function GetMeshBoundingBox(mesh: Raylib.Mesh): Raylib.BoundingBox;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1578 */
  export declare function GenMeshTangents(mesh: Pointer<Raylib.Mesh>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1579 */
  export declare function ExportMesh(mesh: Raylib.Mesh, fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1580 */
  export declare function ExportMeshAsCode(mesh: Raylib.Mesh, fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1583 */
  export declare function GenMeshPoly(sides: number, radius: bigint): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1584 */
  export declare function GenMeshPlane(width: bigint, length: bigint, resX: number, resZ: number): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1585 */
  export declare function GenMeshCube(width: bigint, height: bigint, length: bigint): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1586 */
  export declare function GenMeshSphere(radius: bigint, rings: number, slices: number): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1587 */
  export declare function GenMeshHemiSphere(radius: bigint, rings: number, slices: number): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1588 */
  export declare function GenMeshCylinder(radius: bigint, height: bigint, slices: number): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1589 */
  export declare function GenMeshCone(radius: bigint, height: bigint, slices: number): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1590 */
  export declare function GenMeshTorus(radius: bigint, size: bigint, radSeg: number, sides: number): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1591 */
  export declare function GenMeshKnot(radius: bigint, size: bigint, radSeg: number, sides: number): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1592 */
  export declare function GenMeshHeightmap(heightmap: Raylib.Image, size: Raylib.Vector3): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1593 */
  export declare function GenMeshCubicmap(cubicmap: Raylib.Image, cubeSize: Raylib.Vector3): Raylib.Mesh;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1596 */
  export declare function LoadMaterials(fileName: Pointer<number>, materialCount: Pointer<number>): Pointer<Raylib.Material>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1597 */
  export declare function LoadMaterialDefault(): Raylib.Material;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1598 */
  export declare function IsMaterialValid(material: Raylib.Material): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1599 */
  export declare function UnloadMaterial(material: Raylib.Material): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1600 */
  export declare function SetMaterialTexture(material: Pointer<Raylib.Material>, mapType: number, texture: Raylib.Texture2D): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1601 */
  export declare function SetModelMeshMaterial(model: Pointer<Raylib.Model>, meshId: number, materialId: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1604 */
  export declare function LoadModelAnimations(fileName: Pointer<number>, animCount: Pointer<number>): Pointer<Raylib.ModelAnimation>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1605 */
  export declare function UpdateModelAnimation(model: Raylib.Model, anim: Raylib.ModelAnimation, frame: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1606 */
  export declare function UpdateModelAnimationBones(model: Raylib.Model, anim: Raylib.ModelAnimation, frame: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1607 */
  export declare function UnloadModelAnimation(anim: Raylib.ModelAnimation): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1608 */
  export declare function UnloadModelAnimations(animations: Pointer<Raylib.ModelAnimation>, animCount: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1609 */
  export declare function IsModelAnimationValid(model: Raylib.Model, anim: Raylib.ModelAnimation): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1612 */
  export declare function CheckCollisionSpheres(center1: Raylib.Vector3, radius1: bigint, center2: Raylib.Vector3, radius2: bigint): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1613 */
  export declare function CheckCollisionBoxes(box1: Raylib.BoundingBox, box2: Raylib.BoundingBox): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1614 */
  export declare function CheckCollisionBoxSphere(box: Raylib.BoundingBox, center: Raylib.Vector3, radius: bigint): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1615 */
  export declare function GetRayCollisionSphere(ray: Raylib.Ray, center: Raylib.Vector3, radius: bigint): Raylib.RayCollision;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1616 */
  export declare function GetRayCollisionBox(ray: Raylib.Ray, box: Raylib.BoundingBox): Raylib.RayCollision;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1617 */
  export declare function GetRayCollisionMesh(ray: Raylib.Ray, mesh: Raylib.Mesh, transform: Raylib.Matrix): Raylib.RayCollision;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1618 */
  export declare function GetRayCollisionTriangle(ray: Raylib.Ray, p1: Raylib.Vector3, p2: Raylib.Vector3, p3: Raylib.Vector3): Raylib.RayCollision;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1619 */
  export declare function GetRayCollisionQuad(ray: Raylib.Ray, p1: Raylib.Vector3, p2: Raylib.Vector3, p3: Raylib.Vector3, p4: Raylib.Vector3): Raylib.RayCollision;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1627 */
  export declare function InitAudioDevice(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1628 */
  export declare function CloseAudioDevice(): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1629 */
  export declare function IsAudioDeviceReady(): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1630 */
  export declare function SetMasterVolume(volume: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1631 */
  export declare function GetMasterVolume(): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1634 */
  export declare function LoadWave(fileName: Pointer<number>): Raylib.Wave;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1635 */
  export declare function LoadWaveFromMemory(fileType: Pointer<number>, fileData: Pointer<number>, dataSize: number): Raylib.Wave;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1636 */
  export declare function IsWaveValid(wave: Raylib.Wave): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1637 */
  export declare function LoadSound(fileName: Pointer<number>): Raylib.Sound;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1638 */
  export declare function LoadSoundFromWave(wave: Raylib.Wave): Raylib.Sound;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1639 */
  export declare function LoadSoundAlias(source: Raylib.Sound): Raylib.Sound;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1640 */
  export declare function IsSoundValid(sound: Raylib.Sound): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1641 */
  export declare function UpdateSound(sound: Raylib.Sound, data: Pointer<void>, sampleCount: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1642 */
  export declare function UnloadWave(wave: Raylib.Wave): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1643 */
  export declare function UnloadSound(sound: Raylib.Sound): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1644 */
  export declare function UnloadSoundAlias(alias: Raylib.Sound): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1645 */
  export declare function ExportWave(wave: Raylib.Wave, fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1646 */
  export declare function ExportWaveAsCode(wave: Raylib.Wave, fileName: Pointer<number>): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1649 */
  export declare function PlaySound(sound: Raylib.Sound): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1650 */
  export declare function StopSound(sound: Raylib.Sound): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1651 */
  export declare function PauseSound(sound: Raylib.Sound): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1652 */
  export declare function ResumeSound(sound: Raylib.Sound): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1653 */
  export declare function IsSoundPlaying(sound: Raylib.Sound): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1654 */
  export declare function SetSoundVolume(sound: Raylib.Sound, volume: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1655 */
  export declare function SetSoundPitch(sound: Raylib.Sound, pitch: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1656 */
  export declare function SetSoundPan(sound: Raylib.Sound, pan: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1657 */
  export declare function WaveCopy(wave: Raylib.Wave): Raylib.Wave;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1658 */
  export declare function WaveCrop(wave: Pointer<Raylib.Wave>, initFrame: number, finalFrame: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1659 */
  export declare function WaveFormat(wave: Pointer<Raylib.Wave>, sampleRate: number, sampleSize: number, channels: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1660 */
  export declare function LoadWaveSamples(wave: Raylib.Wave): Pointer<bigint>;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1661 */
  export declare function UnloadWaveSamples(samples: Pointer<bigint>): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1664 */
  export declare function LoadMusicStream(fileName: Pointer<number>): Raylib.Music;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1665 */
  export declare function LoadMusicStreamFromMemory(fileType: Pointer<number>, data: Pointer<number>, dataSize: number): Raylib.Music;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1666 */
  export declare function IsMusicValid(music: Raylib.Music): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1667 */
  export declare function UnloadMusicStream(music: Raylib.Music): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1668 */
  export declare function PlayMusicStream(music: Raylib.Music): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1669 */
  export declare function IsMusicStreamPlaying(music: Raylib.Music): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1670 */
  export declare function UpdateMusicStream(music: Raylib.Music): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1671 */
  export declare function StopMusicStream(music: Raylib.Music): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1672 */
  export declare function PauseMusicStream(music: Raylib.Music): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1673 */
  export declare function ResumeMusicStream(music: Raylib.Music): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1674 */
  export declare function SeekMusicStream(music: Raylib.Music, position: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1675 */
  export declare function SetMusicVolume(music: Raylib.Music, volume: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1676 */
  export declare function SetMusicPitch(music: Raylib.Music, pitch: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1677 */
  export declare function SetMusicPan(music: Raylib.Music, pan: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1678 */
  export declare function GetMusicTimeLength(music: Raylib.Music): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1679 */
  export declare function GetMusicTimePlayed(music: Raylib.Music): bigint;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1682 */
  export declare function LoadAudioStream(sampleRate: number, sampleSize: number, channels: number): Raylib.AudioStream;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1683 */
  export declare function IsAudioStreamValid(stream: Raylib.AudioStream): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1684 */
  export declare function UnloadAudioStream(stream: Raylib.AudioStream): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1685 */
  export declare function UpdateAudioStream(stream: Raylib.AudioStream, data: Pointer<void>, frameCount: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1686 */
  export declare function IsAudioStreamProcessed(stream: Raylib.AudioStream): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1687 */
  export declare function PlayAudioStream(stream: Raylib.AudioStream): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1688 */
  export declare function PauseAudioStream(stream: Raylib.AudioStream): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1689 */
  export declare function ResumeAudioStream(stream: Raylib.AudioStream): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1690 */
  export declare function IsAudioStreamPlaying(stream: Raylib.AudioStream): boolean;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1691 */
  export declare function StopAudioStream(stream: Raylib.AudioStream): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1692 */
  export declare function SetAudioStreamVolume(stream: Raylib.AudioStream, volume: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1693 */
  export declare function SetAudioStreamPitch(stream: Raylib.AudioStream, pitch: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1694 */
  export declare function SetAudioStreamPan(stream: Raylib.AudioStream, pan: bigint): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1695 */
  export declare function SetAudioStreamBufferSizeDefault(size: number): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1696 */
  export declare function SetAudioStreamCallback(stream: Raylib.AudioStream, callback: Raylib.AudioCallback): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1698 */
  export declare function AttachAudioStreamProcessor(stream: Raylib.AudioStream, processor: Raylib.AudioCallback): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1699 */
  export declare function DetachAudioStreamProcessor(stream: Raylib.AudioStream, processor: Raylib.AudioCallback): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1701 */
  export declare function AttachAudioMixedProcessor(processor: Raylib.AudioCallback): void;

  /** https://github.com/raysan5/raylib/blob/5.5/src/raylib.h#L1702 */
  export declare function DetachAudioMixedProcessor(processor: Raylib.AudioCallback): void;

  export declare function $$close(): void;
}
