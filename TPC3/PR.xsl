<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="html" encoding="UTF-8" indent="yes"></xsl:output>
    
    <xsl:template match="/">
        
        <xsl:result-document href="PR.html">
            <html>
                <head>
                    <title><xsl:value-of select="/pr/metadata/title"/></title>
                    <meta charset="UTF8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <h1 align="center"><xsl:value-of select="/pr/metadata/title"/></h1>
                    <h6 align="right"><xsl:value-of select="pr/metadata/keyname"/></h6>
                    <xsl:choose>
                        <xsl:when test="pr/metadata/subtitle">
                            <h6 align="right"><xsl:value-of select="pr/metadata/subtitle"/></h6>
                        </xsl:when>
                    </xsl:choose>
                    <hr/>
                    <hr/>
                    <xsl:apply-templates/>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    
    <xsl:template match="pr">
        <xsl:apply-templates select="metadata"/>
        <hr/>
        <div class="w3-container">
            <xsl:apply-templates select="workteam"/>
        </div>
        <hr/>
        <div class="w3-container">
            <xsl:apply-templates select="abstract"/>
        </div>
        <hr/>
        <div class="w3-container">
            <xsl:apply-templates select="deliverables"/>
        </div>
    </xsl:template>
    
    <xsl:template match="metadata">
        <table class="w3-table">
            <tr>
                <th>Supervisor</th><td><a target="_blank" href="{supervisor/@homepage}"><xsl:value-of select="supervisor"/></a></td>      
            </tr>
            <tr>
                <th><b>Data Início</b></th><td><xsl:value-of select="bdate"/></td>      
            </tr>
            <tr>
                <th><b>Data Final</b></th><td><xsl:value-of select="edate"/></td>      
            </tr>
        </table>
    </xsl:template>
    
    <xsl:template match="worker">
        <li>
            <xsl:choose>
                <xsl:when test="git">
                    <xsl:value-of select="identifier"/> - <a href="{git}" target="_blank"><xsl:value-of select="name"/></a> - <a href="mailto:{email}"><xsl:value-of select="email"/></a>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="identifier"/> - <a href="#" ><xsl:value-of select="name"/></a> - <a href="mailto:{email}"><xsl:value-of select="email"/></a>
                </xsl:otherwise>
            </xsl:choose>
        </li>
    </xsl:template>
    
    <xsl:template match="abstract">
        <h3>Abstract:</h3>
        <xsl:apply-templates select="p"/>
    </xsl:template>
    
    <xsl:template match="p">
        <p><xsl:apply-templates/></p>
    </xsl:template>
    
    <xsl:template match="i">
        <i><xsl:apply-templates/></i>
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:apply-templates/></b>
    </xsl:template> 
    
    <xsl:template match="u">
        <u><xsl:apply-templates/></u>
    </xsl:template>
    
    <xsl:template match="xref">
        <a href="{@url}" target="_blank"><xsl:apply-templates/></a>
    </xsl:template>
    
    <xsl:template match="deliverables">
        <h3>Deliverables:</h3>
        <ol>
            <xsl:apply-templates select="deliverable"/>
        </ol>
    </xsl:template>
    
    <xsl:template match="deliverable">
        <li>
            <a target="_blank" href="{@path}"><xsl:apply-templates/></a>
        </li>
    </xsl:template>
    

            

</xsl:stylesheet>