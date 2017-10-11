//
//  Appcelerator Titanium Mobile
//  WARNING: this is a generated file and should not be modified
//

#import <UIKit/UIKit.h>
#define _QUOTEME(x) #x
#define STRING(x) _QUOTEME(x)

NSString * const TI_APPLICATION_DEPLOYTYPE = @"development";
NSString * const TI_APPLICATION_ID = @"com.bd.commonJS";
NSString * const TI_APPLICATION_PUBLISHER = @"user";
NSString * const TI_APPLICATION_URL = @"undefined";
NSString * const TI_APPLICATION_NAME = @"commonJSApp";
NSString * const TI_APPLICATION_VERSION = @"1.0";
NSString * const TI_APPLICATION_DESCRIPTION = @"undefined";
NSString * const TI_APPLICATION_COPYRIGHT = @"2017 by user";
NSString * const TI_APPLICATION_GUID = @"b66febe4-381b-48b7-9444-7ebabacda635";
BOOL const TI_APPLICATION_ANALYTICS = true;
BOOL const TI_APPLICATION_SHOW_ERROR_CONTROLLER = true;
NSString * const TI_APPLICATION_BUILD_TYPE = @"";

#ifdef TARGET_IPHONE_SIMULATOR
NSString * const TI_APPLICATION_RESOURCE_DIR = @"";
#endif

int main(int argc, char *argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

	int retVal = UIApplicationMain(argc, argv, nil, @"TiApp");
    [pool release];
    return retVal;
}
