/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2018 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#ifdef USE_TI_UILISTVIEW

#import "TiUIListViewProxy.h"
#import "TiUIView.h"

#if IS_XCODE_8
// Add support for iOS 10 table-view prefetching
@interface TiUIListView : TiUIView <UITableViewDelegate, UITableViewDataSource, UITableViewDataSourcePrefetching, UIScrollViewDelegate, UIGestureRecognizerDelegate, UISearchBarDelegate, UISearchResultsUpdating, UISearchControllerDelegate, TiScrolling, TiProxyObserver, TiUIListViewDelegateView>
#else
@interface TiUIListView : TiUIView <UITableViewDelegate, UITableViewDataSource, UIScrollViewDelegate, UIGestureRecognizerDelegate, UISearchBarDelegate, UISearchResultsUpdating, UISearchControllerDelegate, TiScrolling, TiProxyObserver, TiUIListViewDelegateView>
#endif

#pragma mark - Private APIs

@property (nonatomic, readonly) UITableView *tableView;
@property (nonatomic, readonly) BOOL isSearchActive;

- (void)setDictTemplates_:(id)args;
- (void)setContentOffset_:(id)value withObject:(id)args;
- (void)setContentInsets_:(id)value withObject:(id)props;
- (void)deselectAll:(BOOL)animated;
- (void)updateIndicesForVisibleRows;
- (void)viewResignFocus;
- (void)viewGetFocus;

+ (UITableViewRowAnimation)animationStyleForProperties:(NSDictionary *)properties;
- (NSIndexPath *)pathForSearchPath:(NSIndexPath *)indexPath;

@end

#endif
