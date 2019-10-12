<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    
    version="1.0">
    
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="ARQELEM">
            <html>
                <head>
                    <title><xsl:value-of select="IDENTI"/></title>
                    <meta charset="UTF8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <h1 align="center"><xsl:value-of select="IDENTI"/></h1>
                    <hr/>
                    <xsl:apply-templates select = "TIPO"></xsl:apply-templates>
                    <xsl:apply-templates select = "DESCRI"></xsl:apply-templates>
                    <xsl:apply-templates select = "ACESSO"></xsl:apply-templates>
                    <xsl:apply-templates select = "QUADRO"></xsl:apply-templates>
                    <xsl:apply-templates select = "TRAARQ"></xsl:apply-templates>
                    <xsl:apply-templates select = "DESARQ"></xsl:apply-templates>
                    <xsl:apply-templates select = "DEPOSI"></xsl:apply-templates>
                    <xsl:apply-templates select = "INTERE"></xsl:apply-templates>
                    <xsl:apply-templates select="INTERP"></xsl:apply-templates>
                    <b>BIBLIO: </b><xsl:apply-templates select="BIBLIO"></xsl:apply-templates>
                    <hr></hr>
                    <table class="w3-table w3-striped w3-bordered">
                        <xsl:apply-templates select = "CRONO"></xsl:apply-templates>
                        <xsl:apply-templates select = "LUGAR"></xsl:apply-templates>
                        <xsl:apply-templates select = "FREGUE"></xsl:apply-templates>
                        <xsl:apply-templates select = "CONCEL"></xsl:apply-templates>
                        <xsl:apply-templates select = "CODADM"></xsl:apply-templates>
                        <xsl:apply-templates select = "LATITU"></xsl:apply-templates>
                        <xsl:apply-templates select = "LONGIT"></xsl:apply-templates>
                        <xsl:apply-templates select = "ALTITU"></xsl:apply-templates>
                    </table>
                    <xsl:apply-templates select="AUTOR"></xsl:apply-templates>
                </body>
            </html>
        
    </xsl:template>
    
    
    
    
    <xsl:template match="TIPO">
        <b>TIPO: </b><xsl:value-of select="@ASSUNTO"/>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="DESCRI">
        <b>DESCRI: </b><xsl:apply-templates></xsl:apply-templates>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="ACESSO">
        <b>ACESSO: </b><xsl:apply-templates></xsl:apply-templates>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="QUADRO">
        <b>QUADRO: </b><xsl:apply-templates></xsl:apply-templates>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="TRAARQ">
        <b>TRAARQ: </b><xsl:apply-templates></xsl:apply-templates>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="DESARQ">
        <b>DESARQ: </b><xsl:apply-templates></xsl:apply-templates>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="INTERP">
        <b>INTERP: </b><xsl:apply-templates></xsl:apply-templates>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="DEPOSI">
        <b>DEPOSI: </b><xsl:apply-templates></xsl:apply-templates>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="INTERE">
        <b>INTERE: </b><xsl:apply-templates></xsl:apply-templates>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="BIBLIO">
        <li>
            <xsl:value-of select="."/> 
        </li>
    </xsl:template>
    
    <xsl:template match="AUTOR">
        <p align="right"><xsl:value-of select="."/>, <xsl:apply-templates select="../DATA"></xsl:apply-templates></p>
    </xsl:template>
    
    <xsl:template match="DATA">
        <xsl:value-of select="."/>
    </xsl:template>
    
    <xsl:template match="CRONO">
        <tr>
            <th><b>CRONO: </b></th><td><xsl:apply-templates></xsl:apply-templates></td>
        </tr> 
    </xsl:template>
    
    <xsl:template match="LUGAR">
        <tr>
            <th><b>LUGAR: </b></th><td><xsl:apply-templates></xsl:apply-templates></td>
        </tr> 
    </xsl:template>
    
    <xsl:template match="FREGUE">
        <tr>
            <th><b>FREGUE: </b></th><td><xsl:apply-templates></xsl:apply-templates></td>
        </tr> 
    </xsl:template>
    
    <xsl:template match="CONCEL">
        <tr>
            <th><b>CONCEL: </b></th><td><xsl:apply-templates></xsl:apply-templates></td>
        </tr> 
    </xsl:template>
    
    <xsl:template match="CODADM">
        <tr>
            <th><b>CODADM: </b></th><td><xsl:apply-templates></xsl:apply-templates></td>
        </tr> 
    </xsl:template>
    
    <xsl:template match="LATITU">
        <tr>
            <th><b>LATITU: </b></th><td><xsl:apply-templates></xsl:apply-templates></td>
        </tr> 
    </xsl:template>
    
    <xsl:template match="LONGIT">
        <tr>
            <th><b>LONGIT: </b></th><td><xsl:apply-templates></xsl:apply-templates></td>
        </tr> 
    </xsl:template>
    
    <xsl:template match="ALTITU">
        <tr>
            <th><b>LONGIT: </b></th><td><xsl:apply-templates></xsl:apply-templates></td>
        </tr> 
    </xsl:template>
    
    <xsl:template match="LIGA">
        <a href=""><xsl:apply-templates></xsl:apply-templates></a>
    </xsl:template>
    
</xsl:stylesheet>