/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2017 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#ifdef USE_TI_MEDIASOUND

#import "TiProxy.h"
#import "TiFile.h"
#if IS_XCODE_8
#import <AVFoundation/AVFAudio.h>
#else
#import <AVFoundation/AVAudioPlayer.h>
#endif

@interface TiMediaSoundProxy : TiProxy<AVAudioPlayerDelegate> 
{
@private
	NSURL *url;
	TiFile *tempFile;
	AVAudioPlayer * player;
	BOOL paused;
	BOOL looping;
	CGFloat volume;
	CGFloat resumeTime;
}

@property (nonatomic,readwrite,assign) NSNumber *volume;
@property (nonatomic,readonly) NSURL *url;

@property (nonatomic,readwrite,assign) NSNumber *looping;
@property (nonatomic,readwrite,assign)  NSNumber *paused;
@property (nonatomic,readonly) NSNumber *playing;

@property (nonatomic,readonly) NSNumber *duration;
@property (nonatomic,readwrite,assign) NSNumber *time;

@end


#endif
