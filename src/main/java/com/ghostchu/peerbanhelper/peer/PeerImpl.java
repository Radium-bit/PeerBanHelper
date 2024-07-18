package com.ghostchu.peerbanhelper.peer;

import com.ghostchu.peerbanhelper.wrapper.PeerAddress;
import lombok.Setter;

@Setter
public class PeerImpl implements Peer {
    private PeerAddress peerAddress;
    private String rawIp;
    private String peerId;
    private String clientName;
    private long downloadSpeed;
    private long downloaded;
    private long uploadSpeed;
    private long uploaded;
    private double progress;
    private PeerFlag flags;

    public PeerImpl(PeerAddress peerAddress, String rawIp, String peerId, String clientName, long downloadSpeed, long downloaded, long uploadSpeed, long uploaded, double progress, PeerFlag flags) {
        this.peerAddress = peerAddress;
        this.rawIp = rawIp;
        this.peerId = peerId;
        this.clientName = clientName;
        this.downloadSpeed = downloadSpeed;
        this.downloaded = downloaded;
        this.uploadSpeed = uploadSpeed;
        this.uploaded = uploaded;
        this.progress = progress;
        this.flags = flags;
    }

    @Override
    public PeerAddress getPeerAddress() {
        return peerAddress;
    }

    @Override
    public String getPeerId() {
        return peerId;
    }

    @Override
    public String getClientName() {
        return clientName;
    }

    @Override
    public long getDownloadSpeed() {
        return downloadSpeed;
    }

    @Override
    public long getDownloaded() {
        return downloaded;
    }

    @Override
    public long getUploadSpeed() {
        return uploadSpeed;
    }

    @Override
    public long getUploaded() {
        return uploaded;
    }

    @Override
    public double getProgress() {
        return progress;
    }

    @Override
    public PeerFlag getFlags() {
        return flags;
    }

    @Override
    public String getRawIp() {
        return rawIp;
    }
}
