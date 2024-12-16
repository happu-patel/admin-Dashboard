import React, { useState, useRef, useEffect } from "react";
import './composeDialog.css';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    IconButton,
    Button,
    Box,
    Tooltip,
    Typography,
} from "@mui/material";
import {
    Close as CloseIcon,
    AttachFile,
    Delete,
    MoreVert,
} from "@mui/icons-material";
import { TbBold, TbUnderline, TbItalic, TbStrikethrough, TbAlignLeft, TbAlignCenter, TbAlignRight, TbAlignJustified } from "react-icons/tb";

interface ComposeDialogProps {
    open: boolean;
    onClose: () => void;
}

const ComposeDialog: React.FC<ComposeDialogProps> = ({ open, onClose }) => {
    const [message, setMessage] = useState("");
    const [activeFormatting, setActiveFormatting] = useState({
        bold: false,
        italic: false,
        underline: false,
        strikeThrough: false,
        bulletList: false,
        alignLeft: true,
        alignCenter: false,
        alignRight: false,
        alignJustify: false,
    });

    const [showCc, setShowCc] = useState(false);
    const [showBcc, setShowBcc] = useState(false);
    const editorRef = useRef<HTMLDivElement>(null);

    const applyFormatting = (command: string) => {
        const selection = window.getSelection();
        const range = selection?.getRangeAt(0);
        const editor = editorRef.current;

        if (editor && range) {
            // Store the current selection
            const savedSelection = {
                startContainer: range.startContainer,
                startOffset: Math.min(range.startOffset, range.startContainer.textContent?.length || 0),
                endContainer: range.endContainer,
                endOffset: Math.min(range.endOffset, range.endContainer.textContent?.length || 0),
            };

            // Apply the formatting
            document.execCommand(command, false, undefined);

            // Restore the selection
            const newRange = document.createRange();

            // Ensure offsets are within valid bounds
            newRange.setStart(
                savedSelection.startContainer,
                Math.min(savedSelection.startOffset, savedSelection.startContainer.textContent?.length || 0)
            );

            newRange.setEnd(
                savedSelection.endContainer,
                Math.min(savedSelection.endOffset, savedSelection.endContainer.textContent?.length || 0)
            );

            selection?.removeAllRanges();
            selection?.addRange(newRange);

            // Update the message state and active formatting
            setMessage(editor.innerHTML);
            updateActiveFormatting();
        }

        // Focus back on the editor after applying formatting
        editor?.focus();
    };



    const updateActiveFormatting = () => {
        const newFormatting = {
            bold: document.queryCommandState("bold"),
            italic: document.queryCommandState("italic"),
            underline: document.queryCommandState("underline"),
            strikeThrough: document.queryCommandState("strikeThrough"),
            bulletList: document.queryCommandState("insertUnorderedList"),
            alignLeft: document.queryCommandState("justifyLeft"),
            alignCenter: document.queryCommandState("justifyCenter"),
            alignRight: document.queryCommandState("justifyRight"),
            alignJustify: document.queryCommandState("justifyFull"),
        };

        setActiveFormatting(newFormatting);
    };

    useEffect(() => {
        const editor = editorRef.current;

        if (editor) {
            const handleInput = () => {
                setMessage(editor.innerHTML);
                updateActiveFormatting();
            };

            editor.addEventListener("input", handleInput);
            editor.addEventListener("mouseup", updateActiveFormatting);
            editor.addEventListener("keyup", updateActiveFormatting);

            return () => {
                editor.removeEventListener("input", handleInput);
                editor.removeEventListener("mouseup", updateActiveFormatting);
                editor.removeEventListener("keyup", updateActiveFormatting);
            };
        }
    }, []);

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
                <Typography variant="h6">Compose Mail</Typography>
                <IconButton size="small" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ padding: '16px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                        <TextField
                            fullWidth
                            margin="dense"
                            placeholder="To:"
                            variant="standard"
                        />
                        <Button
                            variant="text"
                            size="small"
                            sx={{ textTransform: 'none' }}
                            onClick={() => setShowCc(!showCc)}
                        >
                            {showCc ? 'Cc' : 'Cc'}
                        </Button>
                        <Button
                            variant="text"
                            size="small"
                            sx={{ textTransform: 'none' }}
                            onClick={() => setShowBcc(!showBcc)}
                        >
                            {showBcc ? 'Bcc' : 'Bcc'}
                        </Button>
                    </Box>

                    {showCc && <TextField fullWidth margin="dense" placeholder="Cc:" variant="standard" className="ccInput" />}
                    {showBcc && <TextField fullWidth margin="dense" placeholder="Bcc:" variant="standard" className="bccInput" />}

                    <TextField fullWidth margin="dense" placeholder="Subject:" variant="standard" className="subject" />
                    <Box sx={{ mt: 2, mb: 1, display: 'flex', gap: '8px' }}>
                        <Tooltip title="Bold">
                            <IconButton
                                onClick={() => applyFormatting("bold")}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: activeFormatting.bold ? "#e8daff" : "transparent",
                                }}
                            >
                                <TbBold />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Underline">
                            <IconButton
                                onClick={() => applyFormatting("underline")}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: activeFormatting.underline ? "#e8daff" : "transparent",
                                }}
                            >
                                <TbUnderline />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Italic">
                            <IconButton
                                onClick={() => applyFormatting("italic")}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: activeFormatting.italic ? "#e8daff" : "transparent",
                                }}
                            >
                                <TbItalic />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Strikethrough">
                            <IconButton
                                onClick={() => applyFormatting("strikeThrough")}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: activeFormatting.strikeThrough ? "#e8daff" : "transparent",
                                }}
                            >
                                <TbStrikethrough />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Align Left">
                            <IconButton
                                onClick={() => applyFormatting("justifyLeft")}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: activeFormatting.alignLeft ? "action.selected" : "transparent",
                                }}
                            >
                                <TbAlignLeft />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Align Center">
                            <IconButton
                                onClick={() => applyFormatting("justifyCenter")}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: activeFormatting.alignCenter ? "action.selected" : "transparent",
                                }}
                            >
                                <TbAlignCenter /> 
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Align Right">
                            <IconButton
                                onClick={() => applyFormatting("justifyRight")}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: activeFormatting.alignRight ? "action.selected" : "transparent",
                                }}
                            >
                                <TbAlignRight /> 
                            </IconButton>      
                        </Tooltip>
                        <Tooltip title="Justify">
                            <IconButton
                                onClick={() => applyFormatting("justifyFull")}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: activeFormatting.alignJustify ? "action.selected" : "transparent",
                                }}
                            >
                                <TbAlignJustified />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <div
                        ref={editorRef}
                        contentEditable
                        data-placeholder="Message"
                        style={{
                            border: '1px solid #ccc',
                            padding: '8px',
                            minHeight: '200px',
                            width: '100%',
                            overflowY: 'auto',    
                            outline: 'none',
                            borderRadius: '4px',
                        }}
                        onInput={(e) => setMessage(e.currentTarget.innerHTML)}
                    >
                        {message}
                    </div>

                    <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                textTransform: 'none',
                                borderRadius: '16px',
                                padding: '6px 16px'
                            }}
                            endIcon={<AttachFile sx={{ transform: 'rotate(-45deg)' }} />}
                        >
                            Send
                        </Button>
                        <Box>
                            <IconButton>
                                <AttachFile />
                            </IconButton>
                            <IconButton>
                                <MoreVert />
                            </IconButton>
                            <IconButton color="error">
                                <Delete />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default ComposeDialog;