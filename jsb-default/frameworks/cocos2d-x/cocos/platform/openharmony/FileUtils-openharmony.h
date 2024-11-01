/****************************************************************************
 Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
****************************************************************************/
#pragma once
//clang-format off
#include <cstdint>
//clang-format on
#include <rawfile/raw_dir.h>
#include <rawfile/raw_file.h>
#include <rawfile/raw_file_manager.h>
#include "cocos/platform/CCFileUtils.h"
#include <napi/native_api.h>

class NativeResourceManager;

namespace cocos2d {

class CC_DLL FileUtilsOpenHarmony : public FileUtils {
public:
    FileUtilsOpenHarmony();
    virtual ~FileUtilsOpenHarmony() override;
    static bool initResourceManager(napi_env env, napi_value info);

    bool init() override;

    bool isAbsolutePath(const std::string &strPath) const override;

    FileUtils::Status getRawFileDescriptor(const std::string &filename,RawFileDescriptor& descriptor);

    virtual std::string getWritablePath() const override;

    virtual FileUtils::Status getContents(const std::string &filename, ResizableBuffer *buffer) override;

    static std::string _ohWritablePath;

private:
    virtual bool isFileExistInternal(const std::string &strFilePath) const override;

    virtual bool isDirectoryExistInternal(const std::string &dirPath) const override;

    friend class FileUtils;
    static NativeResourceManager* _nativeResourceManager;
};

} // namespace cc
