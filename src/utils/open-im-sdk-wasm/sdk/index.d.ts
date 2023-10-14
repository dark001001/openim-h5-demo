import Emitter from '../utils/emitter';
import { AccessFriendParams, AccessGroupParams, AccessMessageParams, AddFriendParams, AdvancedMsgParams, AdvancedQuoteMsgParams, AtMsgParams, ChangeGroupMemberMuteParams, ChangeGroupMuteParams, CreateGroupParams, CustomMsgParams, FaceMessageParams, FileMsgFullParams, FileMsgParams, FindMessageParams, GetAdvancedHistoryMsgParams, GetGroupMemberByTimeParams, GetGroupMemberParams, GetHistoryMsgParams, GetOneConversationParams, GetOneCveParams, GroupBaseInfo, ImageMsgParams, InitAndLoginConfig, InsertGroupMsgParams, InsertSingleMsgParams, InviteGroupParams, isRecvParams, JoinGroupParams, LocationMsgParams, MarkNotiParams, MemberExParams, MemberNameParams, MergerMsgParams, PartialUserItem, PinCveParams, QuoteMsgParams, RemarkFriendParams, SearchFriendParams, SearchGroupMemberParams, SearchGroupParams, SearchLocalParams, SendMsgParams, setBurnDurationParams, SetDraftParams, SetGroupRoleParams, SetGroupVerificationParams, SetMemberAuthParams, SetMessageLocalExParams, setPrvParams, SoundMsgParams, SouondMsgFullParams, SplitParams, TransferGroupParams, TypingUpdateParams, UploadFileParams, VideoMsgFullParams, VideoMsgParams } from '../types/params';
import { AdvancedGetMessageResult, BlackUserItem, CardElem, ConversationItem, FriendApplicationItem, FriendshipInfo, FriendUserItem, FullUserItem, GroupApplicationItem, GroupItem, GroupMemberItem, MessageItem, SearchedFriendsInfo, SearchMessageResult, SelfUserInfo, WsResponse } from '../types/entity';
import { LoginStatus, MessageReceiveOptType } from '../types/enum';
declare class SDK extends Emitter {
    private wasmInitializedPromise;
    private goExitPromise;
    private goExisted;
    private tryParse;
    private isLogStandardOutput;
    constructor(url?: string);
    _logWrap(...args: any[]): void;
    _invoker<T>(functionName: string, func: (...args: any[]) => Promise<any>, args: any[], processor?: (data: string) => string): Promise<WsResponse<T>>;
    login: (params: InitAndLoginConfig, operationID?: string) => Promise<any>;
    logout: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getAllConversationList: (operationID?: string) => Promise<WsResponse<ConversationItem[]>>;
    getOneConversation: (params: GetOneConversationParams, operationID?: string) => Promise<WsResponse<ConversationItem>>;
    getAdvancedHistoryMessageList: (params: GetAdvancedHistoryMsgParams, operationID?: string) => Promise<WsResponse<AdvancedGetMessageResult>>;
    getAdvancedHistoryMessageListReverse: (params: GetAdvancedHistoryMsgParams, operationID?: string) => Promise<WsResponse<AdvancedGetMessageResult>>;
    getSpecifiedGroupsInfo: (params: string[], operationID?: string) => Promise<WsResponse<GroupItem[]>>;
    deleteConversationAndDeleteAllMsg: <T>(conversationID: string, operationID?: string) => Promise<WsResponse<T>>;
    markConversationMessageAsRead: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    markMessagesAsReadByMsgID: <T>(params: MarkNotiParams, operationID?: string) => Promise<WsResponse<T>>;
    getGroupMemberList: (params: GetGroupMemberParams, operationID?: string) => Promise<WsResponse<GroupMemberItem[]>>;
    createTextMessage: (text: string, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createImageMessage: (params: ImageMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createImageMessageByFile: <T>(params: ImageMsgParams & {
        file: File;
    }, operationID?: string) => Promise<WsResponse<T>>;
    createCustomMessage: (params: CustomMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createQuoteMessage: (params: QuoteMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createAdvancedQuoteMessage: (params: AdvancedQuoteMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createAdvancedTextMessage: (params: AdvancedMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    sendMessage: (params: SendMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    sendMessageNotOss: (params: SendMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    sendMessageByBuffer: <T>(params: SendMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    setMessageLocalEx: <T>(params: SetMessageLocalExParams, operationID?: string) => Promise<WsResponse<T>>;
    exportDB(operationID?: string): Promise<WsResponse<unknown>>;
    getHistoryMessageListReverse: <T>(params: GetHistoryMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    revokeMessage: <T>(data: AccessMessageParams, operationID?: string) => Promise<WsResponse<T>>;
    setConversationPrivateChat: <T>(params: setPrvParams, operationID?: string) => Promise<WsResponse<T>>;
    setConversationBurnDuration: <T>(params: setBurnDurationParams, operationID?: string) => Promise<WsResponse<T>>;
    getLoginStatus: (operationID?: string) => Promise<WsResponse<LoginStatus>>;
    setAppBackgroundStatus: <T>(data: boolean, operationID?: string) => Promise<WsResponse<T>>;
    networkStatusChanged: <T>(operationID?: string) => Promise<WsResponse<T>>;
    getLoginUser: (operationID?: string) => Promise<WsResponse<string>>;
    getSelfUserInfo: (operationID?: string) => Promise<WsResponse<SelfUserInfo>>;
    getUsersInfo: (data: string[], operationID?: string) => Promise<WsResponse<FullUserItem[]>>;
    setSelfInfo: <T>(data: PartialUserItem, operationID?: string) => Promise<WsResponse<T>>;
    createTextAtMessage: (data: AtMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createSoundMessage: (data: SoundMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createSoundMessageByFile: <T>(data: SoundMsgParams & {
        file: File;
    }, operationID?: string) => Promise<WsResponse<T>>;
    createVideoMessage: (data: VideoMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createVideoMessageByFile: <T>(data: VideoMsgParams & {
        videoFile: File;
        snapFile: File;
    }, operationID?: string) => Promise<WsResponse<T>>;
    createFileMessage: (data: FileMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createFileMessageByFile: <T>(data: FileMsgParams & {
        file: File;
    }, operationID?: string) => Promise<WsResponse<T>>;
    createFileMessageFromFullPath: <T>(data: FileMsgFullParams, operationID?: string) => Promise<WsResponse<T>>;
    createImageMessageFromFullPath: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    createSoundMessageFromFullPath: <T>(data: SouondMsgFullParams, operationID?: string) => Promise<WsResponse<T>>;
    createVideoMessageFromFullPath: <T>(data: VideoMsgFullParams, operationID?: string) => Promise<WsResponse<T>>;
    createMergerMessage: <T>(data: MergerMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    createForwardMessage: (data: MessageItem, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createFaceMessage: <T>(data: FaceMessageParams, operationID?: string) => Promise<WsResponse<T>>;
    createLocationMessage: (data: LocationMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    createCardMessage: (data: CardElem, operationID?: string) => Promise<WsResponse<MessageItem>>;
    deleteMessageFromLocalStorage: <T>(data: AccessMessageParams, operationID?: string) => Promise<WsResponse<T>>;
    deleteMessage: <T>(data: AccessMessageParams, operationID?: string) => Promise<WsResponse<T>>;
    deleteAllConversationFromLocal: <T>(operationID?: string) => Promise<WsResponse<T>>;
    deleteAllMsgFromLocal: <T>(operationID?: string) => Promise<WsResponse<T>>;
    deleteAllMsgFromLocalAndSvr: <T>(operationID?: string) => Promise<WsResponse<T>>;
    insertSingleMessageToLocalStorage: <T>(data: InsertSingleMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    insertGroupMessageToLocalStorage: <T>(data: InsertGroupMsgParams, operationID?: string) => Promise<WsResponse<T>>;
    typingStatusUpdate: <T>(data: TypingUpdateParams, operationID?: string) => Promise<WsResponse<T>>;
    clearConversationAndDeleteAllMsg: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    hideConversation: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    getConversationListSplit: (data: SplitParams, operationID?: string) => Promise<WsResponse<ConversationItem[]>>;
    getConversationIDBySessionType: (data: GetOneCveParams, operationID?: string) => Promise<WsResponse<string>>;
    getMultipleConversation: (data: string[], operationID?: string) => Promise<WsResponse<ConversationItem[]>>;
    deleteConversation: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    setConversationDraft: <T>(data: SetDraftParams, operationID?: string) => Promise<WsResponse<T>>;
    pinConversation: <T>(data: PinCveParams, operationID?: string) => Promise<WsResponse<T>>;
    getTotalUnreadMsgCount: (operationID?: string) => Promise<WsResponse<number>>;
    getConversationRecvMessageOpt: (data: string[], operationID?: string) => Promise<WsResponse<ConversationItem[]>>;
    setConversationRecvMessageOpt: <T>(data: isRecvParams, operationID?: string) => Promise<WsResponse<T>>;
    searchLocalMessages: (data: SearchLocalParams, operationID?: string) => Promise<WsResponse<SearchMessageResult>>;
    addFriend: <T>(data: AddFriendParams, operationID?: string) => Promise<WsResponse<T>>;
    searchFriends: (data: SearchFriendParams, operationID?: string) => Promise<WsResponse<SearchedFriendsInfo[]>>;
    getSpecifiedFriendsInfo: (data: string[], operationID?: string) => Promise<WsResponse<FriendUserItem[]>>;
    getFriendApplicationListAsRecipient: (operationID?: string) => Promise<WsResponse<FriendApplicationItem[]>>;
    getFriendApplicationListAsApplicant: (operationID?: string) => Promise<WsResponse<FriendApplicationItem[]>>;
    getFriendList: (operationID?: string) => Promise<WsResponse<FriendUserItem[]>>;
    setFriendRemark: <T>(data: RemarkFriendParams, operationID?: string) => Promise<WsResponse<T>>;
    checkFriend: (data: string[], operationID?: string) => Promise<WsResponse<FriendshipInfo[]>>;
    acceptFriendApplication: <T>(data: AccessFriendParams, operationID?: string) => Promise<WsResponse<T>>;
    refuseFriendApplication: <T>(data: AccessFriendParams, operationID?: string) => Promise<WsResponse<T>>;
    deleteFriend: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    addBlack: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    removeBlack: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    getBlackList: (operationID?: string) => Promise<WsResponse<BlackUserItem[]>>;
    inviteUserToGroup: <T>(data: InviteGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    kickGroupMember: <T>(data: InviteGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    isJoinGroup: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    getSpecifiedGroupMembersInfo: (data: Omit<InviteGroupParams, 'reason'>, operationID?: string) => Promise<WsResponse<GroupMemberItem[]>>;
    getGroupMemberListByJoinTimeFilter: (data: GetGroupMemberByTimeParams, operationID?: string) => Promise<WsResponse<GroupMemberItem[]>>;
    searchGroupMembers: (data: SearchGroupMemberParams, operationID?: string) => Promise<WsResponse<GroupMemberItem[]>>;
    setGroupApplyMemberFriend: <T>(data: SetMemberAuthParams, operationID?: string) => Promise<WsResponse<T>>;
    setGroupLookMemberInfo: <T>(data: SetMemberAuthParams, operationID?: string) => Promise<WsResponse<T>>;
    getJoinedGroupList: (operationID?: string) => Promise<WsResponse<GroupItem[]>>;
    createGroup: (data: CreateGroupParams, operationID?: string) => Promise<WsResponse<GroupItem>>;
    setGroupInfo: <T>(data: GroupBaseInfo, operationID?: string) => Promise<WsResponse<T>>;
    setGroupMemberNickname: <T>(data: MemberNameParams, operationID?: string) => Promise<WsResponse<T>>;
    setGroupMemberInfo: <T>(data: MemberExParams, operationID?: string) => Promise<WsResponse<T>>;
    joinGroup: <T>(data: JoinGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    searchGroups: (data: SearchGroupParams, operationID?: string) => Promise<WsResponse<GroupItem[]>>;
    quitGroup: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    dismissGroup: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    changeGroupMute: <T>(data: ChangeGroupMuteParams, operationID?: string) => Promise<WsResponse<T>>;
    changeGroupMemberMute: <T>(data: ChangeGroupMemberMuteParams, operationID?: string) => Promise<WsResponse<T>>;
    transferGroupOwner: <T>(data: TransferGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    getGroupApplicationListAsApplicant: (operationID?: string) => Promise<WsResponse<GroupApplicationItem[]>>;
    getGroupApplicationListAsRecipient: (operationID?: string) => Promise<WsResponse<GroupApplicationItem[]>>;
    acceptGroupApplication: <T>(data: AccessGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    refuseGroupApplication: <T>(data: AccessGroupParams, operationID?: string) => Promise<WsResponse<T>>;
    resetConversationGroupAtType: <T>(data: string, operationID?: string) => Promise<WsResponse<T>>;
    setGroupMemberRoleLevel: <T>(data: SetGroupRoleParams, operationID?: string) => Promise<WsResponse<T>>;
    setGroupVerification: <T>(data: SetGroupVerificationParams, operationID?: string) => Promise<WsResponse<T>>;
    getGroupMemberOwnerAndAdmin: (data: string, operationID?: string) => Promise<WsResponse<GroupMemberItem[]>>;
    setGlobalRecvMessageOpt: <T>(opt: MessageReceiveOptType, operationID?: string) => Promise<WsResponse<T>>;
    findMessageList: (data: FindMessageParams, operationID?: string) => Promise<WsResponse<SearchMessageResult>>;
    uploadFile: (data: UploadFileParams, operationID?: string) => Promise<WsResponse<{
        url: string;
    }>>;
}
export declare function getSDK(url?: string): SDK;
export {};
